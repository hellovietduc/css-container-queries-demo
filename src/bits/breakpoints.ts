export const widthToBreakpoint = (width: number): string => {
  if (width < 744) return 'phone';
  if (width < 1024) return 'tablet-portrait';
  if (width < 1440) return 'tablet-landscape';
  return 'desktop';
};
