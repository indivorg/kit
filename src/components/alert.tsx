import React from 'react';
import {
  Alert as AlertTheme,
  AlertProps as AlertThemeProps,
  Close,
} from 'theme-ui';

export interface AlertProps {
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps & AlertThemeProps> = ({
  children,
  onClose,
  ...rest
}) => (
  <AlertTheme {...rest} sx={{ position: 'relative', mb: 3 }}>
    {children}
    <Close sx={{ position: 'absolute', right: 10, top: 10 }} onClick={onClose} />
  </AlertTheme>
);
