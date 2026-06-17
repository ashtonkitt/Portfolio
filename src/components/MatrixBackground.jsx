import React, { useEffect, useRef } from "react";

const DEFAULT_CHARSET = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";

export default function MatrixBackground({
  className = "",
  children,
  fontSize = 16,
  speed = 1,
  color = "#cc3900",
  charset = DEFAULT_CHARSET,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    let animationId;
    const chars = charset.split("");

    const columnWidth = fontSize;
    let columnCount = Math.ceil(width / columnWidth);

    const createColumn = (x) => ({
      x,
      originalX: x,
      y: Math.random() * -height,
      speed: (0.5 + Math.random() * 0.5) * speed,
      chars: Array.from({ length: 35 }, () => chars[Math.floor(Math.random() * chars.length)]),
      charXs: Array(35).fill(x),
      length: 15 + Math.floor(Math.random() * 15),
    });

    let columns = Array.from({ length: columnCount }, (_, i) =>
      createColumn(i * columnWidth)
    );

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      columnCount = Math.ceil(width / columnWidth);

      while (columns.length < columnCount) {
        columns.push(createColumn(columns.length * columnWidth));
      }
      columns = columns.slice(0, columnCount);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 204, g: 57, b: 0 };
    };

    const rgb = hexToRgb(color);

    const animate = () => {
      // Fade effect to light background
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px "Inter", sans-serif`;

      for (const column of columns) {
        column.y += column.speed * fontSize * 0.5;

        for (let i = 0; i < column.length; i++) {
          const charY = column.y - i * fontSize;

          if (charY < -fontSize || charY > height + fontSize) continue;

          // --- UMBRELLA AVOIDANCE LOGIC PER CHARACTER ---
          if (mouseRef.current.x !== -1000) {
            const dy = charY - mouseRef.current.y;
            const dx = column.charXs[i] - mouseRef.current.x;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 150; // Umbrella radius

            // Only repel if hitting the top/sides of the umbrella
            if (dist < maxDist && dy < 30) {
              const pushForce = (maxDist - dist) * 0.15;
              column.charXs[i] += (dx >= 0 ? pushForce : -pushForce);
            }
          }

          // Subtle opacity
          const opacity = i === 0 ? 1 : Math.max(0, 1 - i / column.length);

          if (i === 0) {
            ctx.fillStyle = `rgba(${Math.min(255, rgb.r + 50)}, ${Math.min(255, rgb.g + 50)}, ${Math.min(255, rgb.b + 50)}, ${opacity * 0.2})`;
            ctx.shadowColor = color;
            ctx.shadowBlur = 5;
          } else {
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.08})`;
            ctx.shadowBlur = 0;
          }

          if (Math.random() < 0.02) {
            column.chars[i % column.chars.length] = chars[Math.floor(Math.random() * chars.length)];
          }

          ctx.fillText(column.chars[i % column.chars.length], column.charXs[i], charY);
        }

        ctx.shadowBlur = 0;

        if (column.y - column.length * fontSize > height) {
          column.y = Math.random() * -height * 0.5;
          column.charXs.fill(column.originalX); // Reset all X's to straight vertical
          column.speed = (0.5 + Math.random() * 0.5) * speed;
          column.length = 15 + Math.floor(Math.random() * 15);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initial fill transparent
    ctx.clearRect(0, 0, width, height);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [fontSize, speed, color, charset]);

  return (
    <div 
      ref={containerRef} 
      className={`matrix-container ${className}`}
      style={{ position: 'relative', overflow: 'hidden', zIndex: 0, backgroundColor: '#ffffff' }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }} />
      
      {/* Seamless blend gradient at the top */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '250px',
          background: 'linear-gradient(to bottom, #f0f0f0 0%, rgba(240,240,240,0.8) 20%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5
        }}
      />

      {children && <div style={{ position: 'relative', zIndex: 10, height: '100%', width: '100%' }}>{children}</div>}
    </div>
  );
}
