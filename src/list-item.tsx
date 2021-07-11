import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export const ListItem: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant="primary"
    {...props}
    // @ts-expect-error themeKey is a private prop
    __themeKey="list"
    __css={{
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      p: 3,
      border: 3,
      borderStyle: 'solid',
      borderColor: 'muted',
      borderRadius: 4,
      transition: 'border 150ms ease-out',
      ':hover': {
        borderColor: 'primary',
      },
    }}
  />
));
