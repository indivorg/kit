import React from 'react';
import { ButtonProps, Flex, ForwardRef, IconButton, Label } from 'theme-ui';

export interface LabeledButtonProps extends ButtonProps {
  label: string;
  name?: string;
}

export const LabeledButton: ForwardRef<HTMLButtonElement, LabeledButtonProps> =
  React.forwardRef(({ label, name, children, ...props }, ref) => {
    return (
      <Flex sx={{ alignItems: 'center' }}>
        <Label
          htmlFor={name}
          sx={{
            width: 'auto',
            flexGrow: 1,
            color: 'black',
            fontWeight: 'body',
            marginRight: 1,
            cursor: 'pointer',
          }}
        >
          {label}
        </Label>
        <IconButton
          {...props}
          ref={ref}
          id={name}
          name={name}
          sx={{
            flexGrow: 3,
            cursor: 'pointer',
          }}
        >
          {children}
        </IconButton>
      </Flex>
    );
  });

LabeledButton.displayName = 'LabeledButton';
