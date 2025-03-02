'use client';
import { cn } from '../lib/utils';
import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 150,
  backgroundFill,
  blur = 20,
  speed = 'slow',
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const [isFirefox, setIsFirefox] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let animationId: number;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFirefox(navigator.userAgent.includes('Firefox'));
    }
  }, []);

  useEffect(() => {
    if (!isFirefox) {
      // Initialize and render the animation only if not Firefox.
      const noise = createNoise3D();
      let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;

      const getSpeed = () => {
        switch (speed) {
          case 'slow':
            return 0.001;
          case 'fast':
            return 0.002;
          default:
            return 0.001;
        }
      };

      const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
          w = ctx.canvas.width = window.innerWidth;
          h = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };
        render();
      };

      const waveColors = colors ?? ['#7400b8', '#5390d9', '#48bfe3', '#5feaff', '#80ffdb'];
      const drawWave = (n: number) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
          ctx.beginPath();
          ctx.lineWidth = waveWidth || 50;
          ctx.strokeStyle = waveColors[i % waveColors.length];
          for (x = 0; x < w; x += 5) {
            var y = noise(x / 1000, 0.03 * i, nt) * 400;
            ctx.lineTo(x, y + h * 0.5);
          }
          ctx.stroke();
          ctx.closePath();
        }
      };

      const render = () => {
        ctx.fillStyle = 'hsl(0, 0%, 10%)';
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
      };

      init();

      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, [isFirefox, colors, waveWidth, blur, speed, waveOpacity]);

  return (
    <div className={cn('flex flex-col items-center justify-center', containerClassName)}>
      {isFirefox ? (
        <div
          className="absolute inset-0 z-0"
          style={{ filter: `blur(${blur}px)` }}
        />
      ) : (
        <canvas
          className="absolute inset-0 z-0"
          ref={canvasRef}
          id="canvas"
          style={{
            filter: `blur(${blur}px)`,
          }}
        />
      )}
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};