import { keyframes } from '@emotion/react';
import React from 'react';
import { Box } from 'theme-ui';
export interface SkeletonProps {
  /** `circular` | `rectangular` | `text` */
  shape: 'circular' | 'rectangular' | 'text';
}

const pulse = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const Skeleton = React.FC<SkeletonProps>(({ shape }: SkeletonProps) => {
  if (shape === 'text')
    return (
      <Box
        ref={ref}
        variant="primary"
        {...props}
        // @ts-expect-error themeKey is a private prop
        __themeKey="skeleton"
        __css={{
          height: '1rem',
          borderRadius: 4,
          backgroundColor: 'muted',
        }}
        sx={{
          animationName: pulse,
          animationDuration: '1s',
          animationIterationCount: 'infinite',
        }}
      />
    );
});
