import { keyframes } from '@emotion/react';
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SkeletonProps extends BoxProps {
  /** `circular` | `rectangular` | `text` */
  shape?: 'circular' | 'rectangular' | 'text';

  /**
   * Use to set size of circular shape.
   *
   * @default 1.2rem
   */
  size?: string | number;
}

const pulseKeyframe = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
  },
});

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ shape = 'text', size = '1.2em', ...props }, ref) => (
    <Box
      ref={ref}
      variant="primary"
      {...props}
      // @ts-expect-error themeKey is a private prop
      __themeKey="skeleton"
      __css={{
        backgroundColor: 'muted',
        height: shape === 'circular' && size,
        width: shape === 'circular' && size,
        borderRadius: shape === 'circular' ? '50%' : 4,
        transformOrigin: shape === 'text' && '0 55%',
        transform: shape === 'text' && 'scale(1, 0.60)',
        animation: `${pulseKeyframe} 1.5s ease-in-out 0.5s infinite`,
        '&:empty:before': {
          content: '"\\00a0"',
        },
      }}
    />
  ),
);
