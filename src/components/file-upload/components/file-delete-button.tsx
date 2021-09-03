import React from 'react';
import { Button, ButtonProps } from 'theme-ui';

export const FileDeleteButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    variant="danger"
    type="button"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
    }}
    {...props}
  >
    {children}
  </Button>
);
