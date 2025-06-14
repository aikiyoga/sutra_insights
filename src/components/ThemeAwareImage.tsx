'use client';

import { useTheme } from '@/context/ThemeContext';

interface ThemeAwareImageProps {
  lightSrc: string;
  darkSrc: string;
  width: number;
  height?: number;
  style?: React.CSSProperties;
  alt: string;
}

export default function ThemeAwareImage({ 
  lightSrc, 
  darkSrc, 
  width, 
  height, 
  style, 
  alt 
}: ThemeAwareImageProps) {
  const { theme } = useTheme();
  
  return (
    <img
      src={theme === 'dark' ? darkSrc : lightSrc}
      width={width}
      height={height}
      style={style}
      alt={alt}
    />
  );
}