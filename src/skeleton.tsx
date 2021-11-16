import { keyframes } from '@emotion/react';
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SkeletonProps extends BoxProps {
  /** `circular` | `rectangular` | `text` */
  shape: 'circular' | 'rectangular' | 'text';
}

const pulseKeyframe = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ shape = 'text', ...props }, ref) => (
    <Box
      ref={ref}
      variant="primary"
      {...props}
      // @ts-expect-error themeKey is a private prop
      __themeKey="skeleton"
      __css={{
        height: shape === 'circular' ? '1rem' : '2rem',
        borderRadius: 4,
        backgroundColor: 'muted',
        animation: `${pulseKeyframe} 1.5s ease-in-out 0.5s infinite`
      }}
    />
  ),
);
