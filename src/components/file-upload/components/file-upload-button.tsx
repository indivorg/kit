import React from 'react';
import { FiLoader } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi';
import { Button, ButtonProps } from 'theme-ui';

export type FileUploadButtonProps = {
  loading?: boolean;
} & ButtonProps;

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  loading,
  children,
  ...props
}) => (
  <Button
    variant="secondary"
    type="button"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      color: 'text',
      borderColor: 'text',
    }}
    disabled={loading}
    {...props}
  >
    {children}
    {!loading ? (
      <HiOutlineUpload size={16} sx={{ ml: 2 }} />
    ) : (
      <FiLoader sx={{ height: '1rem', ml: 2 }} />
    )}
  </Button>
);
