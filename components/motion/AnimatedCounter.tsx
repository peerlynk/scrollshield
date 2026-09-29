'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  className = '',
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [prevValue, setPrevValue] = useState(value);
  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsPulse(true);
      const timer = setTimeout(() => setIsPulse(false), 300);
      setPrevValue(value);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <motion.span
      animate={{ scale: isPulse ? 1.08 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center font-mono font-bold ${className} ${
        isPulse ? 'text-sage drop-shadow-glow-sage' : ''
      }`}
    >
      {prefix}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      {suffix}
    </motion.span>
  );
}
