import React from 'react';

export interface FileUploadInputProps extends React.HTMLProps<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: { current: null | HTMLInputElement };
}

export const FileUploadInput: React.FC<FileUploadInputProps> = ({
  inputRef,
  ...rest
}) => <input ref={inputRef} {...rest} type="file" sx={{ display: 'none' }} />;
