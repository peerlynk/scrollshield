'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_TOKENS } from '@/lib/motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | 'some' | 'all';
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = MOTION_TOKENS.duration.normal,
  className = '',
  amount = 0.2,
}: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: MOTION_TOKENS.distance.md, x: 0 };
      case 'down':
        return { y: -MOTION_TOKENS.distance.md, x: 0 };
      case 'left':
        return { x: MOTION_TOKENS.distance.md, y: 0 };
      case 'right':
        return { x: -MOTION_TOKENS.distance.md, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: MOTION_TOKENS.easing.standard,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
