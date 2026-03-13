import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [iconPositions, setIconPositions] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);

  const [stars] = useState(() =>
    Array.from({ length: 150 }, () => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 1000,
      z: (Math.random() - 0.5) * 1000,
      size: Math.random() * 1.5 + 0.5,
    }))
  );
  // 1. IMPROVED SCALING: Bigger on mobile, crisp on desktop
  const getScale = () => {
    if (dimensions.width === 0) return 1;
    if (dimensions.width < 640) return 0.85; // Increased from 0.6 for mobile
    if (dimensions.width < 1024) return 1.0;
    return 1.4; // 2XL/Mac
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. TOUCH HANDLERS FOR MOBILE DRAGGING
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setLastMousePos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      // Updates hover/ripple effect for mobile touch
      setMousePos({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    }
    if (isDragging) {
      const deltaX = touch.clientX - lastMousePos.x;
      const deltaY = touch.clientY - lastMousePos.y;
      rotationRef.current.x += deltaY * 0.004; // Slightly faster for touch
      rotationRef.current.y -= deltaX * 0.004;
      setLastMousePos({ x: touch.clientX, y: touch.clientY });
    }
  };

  // 3. ICON GENERATION
  useEffect(() => {
    if (!icons && !images) return;
    const items = icons ?? images ?? [];
    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 100;
      offscreen.height = 100;
      const offCtx = offscreen.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = images ? items[index] : "data:image/svg+xml;base64," + btoa(renderToString(item));
      img.onload = () => {
        if (offCtx) {
          offCtx.beginPath();
          offCtx.arc(50, 50, 50, 0, Math.PI * 2);
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 100, 100);
          imagesLoadedRef.current[index] = true;
        }
      };
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  useEffect(() => {
    if (dimensions.width === 0) return;
    const items = icons ?? images ?? [];
    const numIcons = items.length;
    const newIcons = [];
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    // MASSIVE RADIUS: Using 0.45 height for mobile ensures it fills the screen
    const radiusMult = dimensions.width < 640 ? 0.45 : 0.42;
    const sphereRadius = Math.min(dimensions.width, dimensions.height) * radiusMult;

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      newIcons.push({
        x: Math.cos(phi) * r * sphereRadius,
        y: y * sphereRadius,
        z: Math.sin(phi) * r * sphereRadius,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images, dimensions]);

  // Standard Mouse Handlers
  const handleMouseDown = (e) => { setIsDragging(true); setLastMousePos({ x: e.clientX, y: e.clientY }); };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      // NATURAL DRAG:
      rotationRef.current.x += deltaY * 0.002;
      rotationRef.current.y -= deltaX * 0.002;

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || dimensions.width === 0) return;

    const animate = () => {


      // Inside the animate function, before drawing icons



      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scaleFactor = getScale();
      const radiusMult = dimensions.width < 640 ? 0.45 : 0.42;
      const baseRadius = Math.min(dimensions.width, dimensions.height) * radiusMult;

      if (!isDragging) {
        rotationRef.current.y -= 0.0025;
        rotationRef.current.x *= 0.98;
      }

      const { x: rotX, y: rotY } = rotationRef.current;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX), cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      // --- RINGS ---
      const drawRing = (rMult, color, tiltAngle) => {
        ctx.save();
        const r = baseRadius * rMult;
        const cosT = Math.cos(tiltAngle), sinT = Math.sin(tiltAngle);
        for (let i = 0; i < 100; i++) {
          const a1 = (i / 100) * Math.PI * 2, a2 = ((i + 1) / 100) * Math.PI * 2;
          const getP = (a) => {
            const px = Math.cos(a) * r, pz = Math.sin(a) * r;
            const tx = px, ty = pz * sinT, tz = pz * cosT;
            const rx = tx * cosY - tz * sinY, rz = tx * sinY + tz * cosY;
            return { x: centerX + rx, y: centerY + (ty * cosX + rz * sinX), z: rz };
          };
          const p1 = getP(a1), p2 = getP(a2);
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.globalAlpha = Math.max(0.01, (p1.z + r) / (r * 3));
          ctx.lineWidth = (p1.z > 0 ? 1.5 : 0.5) * scaleFactor;
          ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
        ctx.restore();
      };

      drawRing(1.15, "#3b82f6", 0.15);
      drawRing(1.10, "#f97316", Math.PI / 8);
      drawRing(1.15, "#ffffff", Math.PI / 4);

      const sorted = iconPositions.map(icon => {
        const rx = icon.x * cosY - icon.z * sinY, rz = icon.x * sinY + icon.z * cosY;
        const ry = icon.y * cosX + rz * sinX;
        return { ...icon, rx, ry, rz };
      }).sort((a, b) => a.rz - b.rz);

      // --- CONNECTIONS ---
      ctx.save();
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i], b = sorted[j];
          const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
          if (dist < (baseRadius * 0.5)) {
            // ctx.beginPath(); ctx.strokeStyle = `rgba(173, 216, 230, ${0.1 * scaleFactor})`;
            ctx.beginPath(); ctx.strokeStyle = `rgba(173, 216, 230, ${0.2})`;
            ctx.moveTo(centerX + a.rx, centerY + a.ry); ctx.lineTo(centerX + b.rx, centerY + b.ry);
            ctx.stroke();
          }
        }
      }
      ctx.restore();


      stars.forEach(s => {
        const rx = s.x * cosY - s.z * sinY;
        const rz = s.x * sinY + s.z * cosY;
        const ry = s.y * cosX + rz * sinX;

        // Depth-based opacity for particles
        const alpha = Math.max(0, (rz + 400) / 1000);

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(centerX + rx, centerY + ry, s.size * scaleFactor, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- ICONS ---
      sorted.forEach(icon => {
        const sX = centerX + icon.rx, sY = centerY + icon.ry;
        const dist = Math.sqrt((mousePos.x - sX) ** 2 + (mousePos.y - sY) ** 2);

        // Ripple area is larger on mobile to make it easier to trigger
        const rippleArea = (dimensions.width < 640 ? 80 : 100) * scaleFactor;
        const ripple = dist < rippleArea ? easeOutCubic(1 - dist / rippleArea) : 0;

        const baseIconSize = (dimensions.width < 640 ? 24 : 28) * scaleFactor;
        const depthScale = ((icon.rz + baseRadius) / (baseRadius * 1.8)) + (ripple * 0.4);

        ctx.save();
        ctx.translate(sX, sY + (ripple * 15));
        ctx.scale(depthScale, depthScale);
        ctx.globalAlpha = Math.max(0.15, (icon.rz + baseRadius) / (baseRadius * 1.4));
        if (ripple > 0) { ctx.shadowBlur = 15; ctx.shadowColor = "#3b82f6"; }
        if (iconCanvasesRef.current[icon.id] && imagesLoadedRef.current[icon.id]) {
          ctx.drawImage(iconCanvasesRef.current[icon.id], -baseIconSize / 2, -baseIconSize / 2, baseIconSize, baseIconSize);
        }
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, isDragging, mousePos, dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden touch-none bg-transparent">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        // Desktop Events
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        // Mobile Events
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      />
    </div>
  );
}