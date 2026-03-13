import React, { useEffect, useRef, useState } from "react"
import { renderToString } from "react-dom/server"

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({
  icons,
  images
}) {
  const canvasRef = useRef(null)
  const [iconPositions, setIconPositions] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetRotation, setTargetRotation] = useState(null)
  const animationFrameRef = useRef(0)
  const rotationRef = useRef({ x: 0, y: 0 })
  const iconCanvasesRef = useRef([])
  const imagesLoadedRef = useRef([])

  // Create icon canvases once when icons/images change




  useEffect(() => {
    if (!icons && !images) return

    const items = icons ?? images ?? []
    imagesLoadedRef.current = new Array(items.length).fill(false)

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas")
      offscreen.width = 40
      offscreen.height = 40
      const offCtx = offscreen.getContext("2d")

      if (offCtx) {
        if (images) {
          // Handle image URLs directly
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.src = items[index]
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height)

            // Create circular clipping path
            offCtx.beginPath()
            offCtx.arc(20, 20, 20, 0, Math.PI * 2)
            offCtx.closePath()
            offCtx.clip()

            // Draw the image
            offCtx.drawImage(img, 0, 0, 40, 40)

            imagesLoadedRef.current[index] = true
          }
        } else {
          // Handle SVG icons
          offCtx.scale(0.4, 0.4)
          const svgString = renderToString(item)
          const img = new Image()
          img.src = "data:image/svg+xml;base64," + btoa(svgString)
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height)
            offCtx.drawImage(img, 0, 0)
            imagesLoadedRef.current[index] = true
          }
        }
      }
      return offscreen
    })

    iconCanvasesRef.current = newIconCanvases
  }, [icons, images])

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const items = icons ?? images ?? []
    const newIcons = []
    const numIcons = items.length || 20

    // Fibonacci sphere parameters
    const offset = 2 / numIcons
    const increment = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * increment

      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      // sphere radius
      newIcons.push({
        x: x * 220,
        y: y * 220,
        z: z * 220,
        scale: 1,
        opacity: 1,
        id: i,
      })
    }
    setIconPositions(newIcons)
  }, [icons, images])

  // Handle mouse events
  const handleMouseDown = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect || !canvasRef.current) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x)
      const sinX = Math.sin(rotationRef.current.x)
      const cosY = Math.cos(rotationRef.current.y)
      const sinY = Math.sin(rotationRef.current.y)

      const rotatedX = icon.x * cosY - icon.z * sinY
      const rotatedZ = icon.x * sinY + icon.z * cosY
      const rotatedY = icon.y * cosX + rotatedZ * sinX

      const screenX = canvasRef.current.width / 2 + rotatedX
      const screenY = canvasRef.current.height / 2 + rotatedY

      const scale = (rotatedZ + 180) / 300
      const radius = 20 * scale
      const dx = x - screenX
      const dy = y - screenY

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z))
        const targetY = Math.atan2(icon.x, icon.z)

        const currentX = rotationRef.current.x
        const currentY = rotationRef.current.y
        const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2))

        const duration = Math.min(2000, Math.max(800, distance * 1000))

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        })
        return
      }
    })

    setIsDragging(true)
    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePos({ x, y })
    }

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x
      const deltaY = e.clientY - lastMousePos.y

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      }

      setLastMousePos({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Animation and rendering
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {



      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // --- 1. DIRECTIONAL MOTION ---
        if (!isDragging) {
          // Only increment Y (horizontal rotation) for left-to-right spin
          // Increase 0.005 to make it spin faster
          rotationRef.current.y -= 0.005;

          // Slow vertical drift (optional, set to 0 to keep it perfectly level)
          rotationRef.current.x *= 0.95;
        }

        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        // --- 2. DRAW RINGS ---
        // --- Updated Ring Function with Color & Width ---
        const drawRing = (radius, color, tiltAngle = 0) => {
          ctx.save();
          ctx.beginPath();
          ctx.lineWidth = 1.2;
          ctx.strokeStyle = color;

          // Set a consistent alpha for the whole ring so it's not "too dark"
          ctx.globalAlpha = 0.4;

          // Pre-calculate tilt constants
          const cosT = Math.cos(tiltAngle);
          const sinT = Math.sin(tiltAngle);

          for (let i = 0; i <= 120; i++) { // Increased steps for smoothness
            const angle = (i / 120) * Math.PI * 2;

            // 1. Initial coordinates on a flat plane
            const px = Math.cos(angle) * radius;
            const pz = Math.sin(angle) * radius;

            // 2. Apply Tilt (Rotating the plane of the ring)
            const tx = px;
            const ty = pz * sinT;
            const tz = pz * cosT;

            // 3. Apply Sphere Rotation (The "Revolution" logic)
            // This MUST match the icon rotation math exactly
            const rotatedX = tx * cosY - tz * sinY;
            const rotatedZ = tx * sinY + tz * cosY;
            const rotatedY = ty * cosX + rotatedZ * sinX;

            if (i === 0) ctx.moveTo(centerX + rotatedX, centerY + rotatedY);
            else ctx.lineTo(centerX + rotatedX, centerY + rotatedY);
          }

          ctx.stroke();
          ctx.restore();
        };

        drawRing(260, "#3b82f6", 0.2);           // Inner Blue (slight tilt)
        drawRing(250, "#f97316", Math.PI / 6);    // Middle Orange (45 deg tilt)
        drawRing(280, "#FFFFCC", -Math.PI / 5);   // Outer Blue (30 deg tilt)



       

        // ===================================================================

        // --- 3. DRAW ICONS (With Depth Sorting) ---
        const sortedIcons = [...iconPositions].map(icon => {
          const rotatedX = icon.x * cosY - icon.z * sinY;
          const rotatedZ = icon.x * sinY + icon.z * cosY;
          const rotatedY = icon.y * cosX + rotatedZ * sinX;
          return { ...icon, rotatedX, rotatedY, rotatedZ };
        }).sort((a, b) => a.rotatedZ - b.rotatedZ);



        sortedIcons.forEach((icon) => {
          // --- 1. PROXIMITY CALCULATION ---
          const screenX = centerX + icon.rotatedX;
          const screenY = centerY + icon.rotatedY;

          // Calculate distance between mouse and icon
          const dx = mousePos.x - screenX;
          const dy = mousePos.y - screenY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Ripple settings
          const rippleRadius = 80; // How far the "water" effect reaches
          const pressDepth = 15;   // How much it "sinks" or "pops"

          let hoverScaleOffset = 0;
          let hoverYOffset = 0;

          if (distance < rippleRadius) {
            // Create a normalized factor (1 at center of mouse, 0 at edge of rippleRadius)
            const factor = 1 - distance / rippleRadius;
            const easedFactor = easeOutCubic(factor);

            // Effect: Icon grows slightly and "sinks" (moves down) like it's pressed into water
            hoverScaleOffset = easedFactor * 0.4;
            hoverYOffset = easedFactor * pressDepth;
          }

          // --- 2. APPLY TRANSFORMATIONS ---
          const baseScale = (icon.rotatedZ + 250) / 400;
          const finalScale = baseScale + hoverScaleOffset;
          const opacity = Math.max(0.1, (icon.rotatedZ + 150) / 300);

          ctx.save();
          // We add hoverYOffset to the Y position to create the "press" movement
          ctx.translate(screenX, screenY + hoverYOffset);
          ctx.scale(finalScale, finalScale);
          ctx.globalAlpha = opacity;

          // Add a small "shadow" glow when hovered to enhance the water feel
          if (hoverScaleOffset > 0) {
            ctx.shadowBlur = 15 * hoverScaleOffset;
            ctx.shadowColor = "rgba(0, 150, 255, 0.5)";
          }

          if (iconCanvasesRef.current[icon.id] && imagesLoadedRef.current[icon.id]) {
            ctx.drawImage(iconCanvasesRef.current[icon.id], -10, -10, 24, 24);
          }
          ctx.restore();
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };







      animate()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    };
  }, [icons, images, iconPositions, isDragging, mousePos, targetRotation])

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={500}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud"
      role="img" />
  );
}
