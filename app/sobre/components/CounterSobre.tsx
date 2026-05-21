'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function CounterSobre({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
}: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const startAnimation = () => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          setCount(0);
          if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
          }
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return (
    <div ref={elementRef} className="tabular-nums inline-block">
      {prefix}
      {count}
      {suffix}
    </div>
  );
}
