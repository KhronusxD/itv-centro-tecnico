import type { CSSProperties } from 'react';

type Props = {
  base: string;
  widths: number[];
  sizes: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  width: number;
  height: number;
};

export function Picture({
  base,
  widths,
  sizes,
  alt,
  className,
  style,
  priority = false,
  width,
  height,
}: Props) {
  const avif = widths.map((w) => `/images/${base}-${w}w.avif ${w}w`).join(', ');
  const webp = widths.map((w) => `/images/${base}-${w}w.webp ${w}w`).join(', ');
  const fallback = `/images/${base}-${widths[Math.floor(widths.length / 2)]}w.webp`;
  return (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // @ts-expect-error fetchpriority is a valid attribute, not yet typed in React
        fetchpriority={priority ? 'high' : 'auto'}
        className={className}
        style={style}
      />
    </picture>
  );
}
