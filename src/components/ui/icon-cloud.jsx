import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }) {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);

  // 1. Generate static stars once
  const [stars] = useState(() =>
    Array.from({ length: 100 }, () => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 800,
      z: (Math.random() - 0.5) * 800,
      size: Math.random() * 1.5 + 0.5,
    }))
  );

  // 2. Create icon canvases
  useEffect(() => {
    if (!icons && !images) return;
    const items = icons ?? images ?? [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = images ? items[index] : "data:image/svg+xml;base64," + btoa(renderToString(item));
        
        img.onload = () => {
          offCtx.clearRect(0, 0, 40, 40);
          offCtx.beginPath();
          offCtx.arc(20, 20, 20, 0, Math.PI * 2);
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 40, 40);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  // 3. Generate initial sphere positions
  useEffect(() => {
    const items = icons ?? images ?? [];
    const numIcons = items.length || 20;
    const newIcons = [];
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      newIcons.push({
        x: Math.cos(phi) * r * 220,
        y: y * 220,
        z: Math.sin(phi) * r * 220,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      rotationRef.current.x += deltaY * 0.002;
      rotationRef.current.y += deltaX * 0.002;
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (!isDragging) {
        rotationRef.current.y -= 0.003; // Constant slow spin
        rotationRef.current.x *= 0.98;  // Stabilize tilt
      }
         

      
      const { x: rotX, y: rotY } = rotationRef.current;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      // --- DRAW RINGS (Depth Faded) ---
      const drawRing = (radius, color, tiltAngle) => {
        ctx.save();
        const cosT = Math.cos(tiltAngle), sinT = Math.sin(tiltAngle);
        for (let i = 0; i < 100; i++) {
          const a1 = (i / 100) * Math.PI * 2, a2 = ((i + 1) / 100) * Math.PI * 2;
          const getP = (a) => {
            const px = Math.cos(a) * radius, pz = Math.sin(a) * radius;
            const tx = px, ty = pz * sinT, tz = pz * cosT;
            const rx = tx * cosY - tz * sinY, rz = tx * sinY + tz * cosY;
            return { x: centerX + rx, y: centerY + (ty * cosX + rz * sinX), z: rz };
          };
          const p1 = getP(a1), p2 = getP(a2);
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.globalAlpha = Math.max(0.02, (p1.z + 200) / 600) * 0.5;
          ctx.lineWidth = p1.z > 150 ? 1.5 : 0.8;
          ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
        ctx.restore();
      };



        

      drawRing(260, "#3b82f6", 0.2);
      drawRing(250, "#f97316", Math.PI / 6);
      drawRing(280, "#fafacc", Math.PI / 4);




    

      // --- DRAW STARS ---
      stars.forEach(s => {
        const rx = s.x * cosY - s.z * sinY, rz = s.x * sinY + s.z * cosY;
        const ry = s.y * cosX + rz * sinX;
        const alpha = Math.max(0, (rz + 200) / 600);
        if (alpha > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.beginPath(); ctx.arc(centerX + rx, centerY + ry, s.size, 0, Math.PI * 2); ctx.fill();
        }
      });

      // --- DEPTH SORT ICONS ---
      const sorted = iconPositions.map(icon => {
        const rx = icon.x * cosY - icon.z * sinY, rz = icon.x * sinY + icon.z * cosY;
        const ry = icon.y * cosX + rz * sinX;
        return { ...icon, rx, ry, rz };
      }).sort((a, b) => a.rz - b.rz);

      // --- DRAW CONNECTIONS ---
      ctx.save();
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i], b = sorted[j];
          const dist = Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2);
          if (dist < 90) {
            const avgZ = (a.rz + b.rz) / 2;
            // const alpha = Math.max(0, (avgZ + 100) / 350) * (avgZ > 100 ? 0.4 : 0.1);
            const alpha = 0.09;
            ctx.beginPath(); ctx.strokeStyle = `rgba(173, 216, 230, ${alpha})`;
            ctx.moveTo(centerX + a.rx, centerY + a.ry); ctx.lineTo(centerX + b.rx, centerY + b.ry);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // --- DRAW ICONS (Water Ripple Logic) ---
      sorted.forEach(icon => {
        const sX = centerX + icon.rx, sY = centerY + icon.ry;
        const dist = Math.sqrt((mousePos.x - sX)**2 + (mousePos.y - sY)**2);
        const ripple = dist < 80 ? easeOutCubic(1 - dist / 80) : 0;

        const scale = ((icon.rz + 250) / 400) + (ripple * 0.3);
        ctx.save();
        ctx.translate(sX, sY + (ripple * 12));
        ctx.scale(scale, scale);
        ctx.globalAlpha = Math.max(0.1, (icon.rz + 150) / 350);
        if (ripple > 0) { ctx.shadowBlur = 10; ctx.shadowColor = "#3b82f6"; }
        if (iconCanvasesRef.current[icon.id] && imagesLoadedRef.current[icon.id]) {
          ctx.drawImage(iconCanvasesRef.current[icon.id], -12, -12, 24, 24);
        }
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, isDragging, mousePos, stars]);

  return (
    <canvas
      ref={canvasRef}
      width={700} height={500}
      onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}
      className="cursor-grab active:cursor-grabbing"
    />
  );
}