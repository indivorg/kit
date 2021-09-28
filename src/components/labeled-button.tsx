import React from 'react';
import { Button, ButtonProps, ForwardRef, ThemeUIStyleObject } from 'theme-ui';

export interface LabeledButtonProps extends ButtonProps {
  name?: string;
  sx?: ThemeUIStyleObject;
}

export const LabeledButton: ForwardRef<HTMLButtonElement, LabeledButtonProps> =
  React.forwardRef(({ name, children, sx, ...props }, ref) => {
    return (
      <Button
        mr={3}
        sx={{
          color: 'text',
          ...sx,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          gap: 2,
        }}
        {...props}
        ref={ref}
        id={name}
        name={name}
      >
        {children}
      </Button>
    );
  });

LabeledButton.displayName = 'LabeledButton';
