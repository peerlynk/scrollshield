export const MOTION_TOKENS = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    cinematic: 1.2,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    emphasized: [0.16, 1, 0.3, 1] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
  },
  distance: {
    sm: 16,
    md: 32,
    lg: 64,
  },
  scale: {
    hover: 1.02,
    active: 0.98,
    heroExit: 0.92,
  },
};

export function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
