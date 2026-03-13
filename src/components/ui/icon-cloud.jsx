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

  // 1. Dynamic Scaling Factor: Determines how "large" everything is based on screen
  const getScale = () => {
    if (dimensions.width === 0) return 1;
    if (dimensions.width < 640) return 0.6; // Mobile
    if (dimensions.width < 1024) return 0.8; // Tablet
    if (dimensions.width < 1536) return 1.1; // Laptop/Standard Desktop
    return 1.5; // Large Screens / Mac Retina
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Set canvas to parent size
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const [stars] = useState(() =>
    Array.from({ length: 120 }, () => ({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 1200,
      z: (Math.random() - 0.5) * 1200,
      size: Math.random() * 2 + 0.5,
    }))
  );

  useEffect(() => {
    if (!icons && !images) return;
    const items = icons ?? images ?? [];
    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 80; // Higher res for retina
      offscreen.height = 80;
      const offCtx = offscreen.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = images ? items[index] : "data:image/svg+xml;base64," + btoa(renderToString(item));
      img.onload = () => {
        if (offCtx) {
          offCtx.clearRect(0, 0, 80, 80);
          offCtx.beginPath();
          offCtx.arc(40, 40, 40, 0, Math.PI * 2);
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 80, 80);
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
    
    // SCALE THE SPHERE: 
    // On desktop, we use a larger percentage of the screen
    const sphereRadius = Math.min(dimensions.width, dimensions.height) * (dimensions.width > 1024 ? 0.42 : 0.38);

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

  // Handle Input
  const handleMouseDown = (e) => { setIsDragging(true); setLastMousePos({ x: e.clientX, y: e.clientY }); };
  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (isDragging) {
      rotationRef.current.x += (e.clientY - lastMousePos.y) * 0.002;
      rotationRef.current.y += (e.clientX - lastMousePos.x) * 0.002;
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || dimensions.width === 0) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scaleFactor = getScale();
      const baseRadius = Math.min(dimensions.width, dimensions.height) * (dimensions.width > 1024 ? 0.42 : 0.38);

      if (!isDragging) {
        rotationRef.current.y -= 0.002;
        rotationRef.current.x *= 0.98;
      }
      
      const { x: rotX, y: rotY } = rotationRef.current;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX), cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      // --- RINGS ---
      const drawRing = (rMult, color, tiltAngle) => {
        ctx.save();
        const r = baseRadius * rMult;
        const cosT = Math.cos(tiltAngle), sinT = Math.sin(tiltAngle);
        for (let i = 0; i < 120; i++) {
          const a1 = (i / 120) * Math.PI * 2, a2 = ((i + 1) / 120) * Math.PI * 2;
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

      drawRing(1.2, "#3b82f6", 0.15);
      drawRing(1.15, "#f97316", Math.PI / 8);
      drawRing(1.3, "#ffffff", Math.PI / 4);

      // --- STARS ---
      stars.forEach(s => {
        const rx = s.x * cosY - s.z * sinY, rz = s.x * sinY + s.z * cosY;
        const ry = s.y * cosX + rz * sinX;
        const alpha = Math.max(0, (rz + 400) / 1000);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        ctx.beginPath(); ctx.arc(centerX + rx, centerY + ry, s.size * scaleFactor, 0, Math.PI * 2); ctx.fill();
      });

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
          const dist = Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2);
          if (dist < (baseRadius * 0.45)) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(173, 216, 230, ${0.08 * scaleFactor})`;
            ctx.moveTo(centerX + a.rx, centerY + a.ry); ctx.lineTo(centerX + b.rx, centerY + b.ry);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // --- ICONS ---
      sorted.forEach(icon => {
        const sX = centerX + icon.rx, sY = centerY + icon.ry;
        const dist = Math.sqrt((mousePos.x - sX)**2 + (mousePos.y - sY)**2);
        const rippleArea = 100 * scaleFactor;
        const ripple = dist < rippleArea ? easeOutCubic(1 - dist / rippleArea) : 0;

        // Scale icons based on Z-depth AND the Screen Scale Factor
        const baseIconSize = 28 * scaleFactor;
        const depthScale = ((icon.rz + baseRadius) / (baseRadius * 1.8)) + (ripple * 0.4);
        
        ctx.save();
        ctx.translate(sX, sY + (ripple * 15));
        ctx.scale(depthScale, depthScale);
        ctx.globalAlpha = Math.max(0.15, (icon.rz + baseRadius) / (baseRadius * 1.4));
        if (ripple > 0) { ctx.shadowBlur = 20; ctx.shadowColor = "#3b82f6"; }
        if (iconCanvasesRef.current[icon.id] && imagesLoadedRef.current[icon.id]) {
          ctx.drawImage(iconCanvasesRef.current[icon.id], -baseIconSize/2, -baseIconSize/2, baseIconSize, baseIconSize);
        }
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, isDragging, mousePos, dimensions, stars]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden touch-none bg-transparent">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      />
    </div>
  );
}