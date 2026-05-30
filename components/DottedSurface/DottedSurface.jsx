"use client";

import { useEffect, useRef } from "react";
import "./DottedSurface.css";

const hash = (x, y) => {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return value - Math.floor(value);
};

const DottedSurface = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time = 0) => {
      const t = time * 0.00035;
      context.clearRect(0, 0, width, height);

      const horizon = height * 0.56;
      const focal = Math.min(width, height) * 0.9;
      const spacing = Math.max(1.15, width / 1500);
      const xLimit = Math.max(44, width / 28);

      for (let z = 2.2; z < 84; z += 1.18) {
        const perspective = focal / z;
        const baseY = horizon + perspective * 1.68;
        if (baseY < horizon - 16 || baseY > height + 80) continue;

        const rowAlpha = Math.max(0, Math.min(1, (baseY - horizon) / (height * 0.56)));
        const farFade = Math.max(0.08, Math.min(1, (84 - z) / 70));
        const radius = Math.max(0.8, Math.min(2.4, perspective * 0.012));

        for (let x = -xLimit; x <= xLimit; x += spacing) {
          const jitterX = (hash(x, z) - 0.5) * 0.32;
          const jitterZ = (hash(z, x) - 0.5) * 0.55;
          const wave =
            Math.sin(x * 0.48 + z * 0.12 + t * 2.2) * 0.5 +
            Math.cos(x * 0.16 - z * 0.28 + t * 1.4) * 0.38;

          const projectedZ = z + jitterZ;
          const scale = focal / projectedZ;
          const screenX = width / 2 + (x + jitterX) * scale;
          const screenY = horizon + scale * (1.68 + wave * 0.06);

          if (screenX < -20 || screenX > width + 20 || screenY < horizon - 24 || screenY > height + 80) {
            continue;
          }

          const centerFade = 1 - Math.min(0.55, Math.abs(screenX - width / 2) / width);
          const alpha = (0.26 + rowAlpha * 0.9) * farFade * centerFade;

          context.fillStyle = `rgba(238, 242, 247, ${alpha})`;
          context.fillRect(screenX, screenY, radius, radius);
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={`dotted-surface ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="dotted-surface__canvas" />
      <div className="dotted-surface__glow" />
      <div className="dotted-surface__fade" />
    </div>
  );
};

export default DottedSurface;
