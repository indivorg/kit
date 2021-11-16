import React, { useRef, useState } from 'react';
import { Box, Grid, Text } from 'theme-ui';
import { FileDeleteButton } from './components/file-delete-button';
import { FileUploadButton } from './components/file-upload-button';
import { FileUploadInput } from './components/file-upload-input';

export interface FileUploadProps {
  value?: string[];
  id?: string;
  accept?: string;
  multiple?: boolean;
  buttonComponent?: React.ReactNode;
  validate?: (file: File) => string | void;
  upload: (files: FileList) => void;
  remove?: () => void;
}

export const DocumentFileUpload: React.FC<FileUploadProps> = props => {
  const {
    value,
    id,
    accept,
    multiple,
    buttonComponent,
    validate,
    upload,
    remove,
  } = props;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as string[]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => inputRef.current?.click();
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files: filesToUpload } = event.target;
    if (!filesToUpload?.length) {
      return;
    }
    if (validate) {
      const validationErrors = Array.from(filesToUpload).reduce(
        (acc: string[], file) => {
          const err = validate(file);
          if (err) {
            acc.push(err);
          }
          return acc;
        },
        [],
      );
      if (validationErrors.length) {
        setErrors(validationErrors);
        return;
      }
    }

    setLoading(true);
    try {
      await upload(filesToUpload);
    } catch (error: any) {
      setErrors([error.message]);
    }
    setLoading(false);
  };

  return (
    <Box
      mt={5}
      mb={4}
      sx={{ backgroundColor: 'lightGray', p: '45px', borderRadius: '8px' }}
    >
      <Grid gap={4} columns={[1, 1, 2]}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {value && value?.length > 0 ? (
            value.map(i => (
              <div key={i} sx={{ my: 1 }}>
                {i.split('/').pop()}
              </div>
            ))
          ) : (
            <Text>Choose file to upload</Text>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <label htmlFor={id}>
            {buttonComponent || (
              <FileUploadButton loading={loading} onClick={onButtonClick}>
                Upload file
              </FileUploadButton>
            )}
            <FileUploadInput
              id={id}
              inputRef={inputRef}
              onChange={onInputChange}
              accept={accept}
              multiple={multiple}
            />
          </label>
          <FileDeleteButton mt={3} onClick={remove}>
            Delete
          </FileDeleteButton>
        </Box>
        {errors && errors.length > 0 && (
          <Text sx={{ color: 'danger', mt: 2 }}>{errors.join(' ')}</Text>
        )}
      </Grid>
    </Box>
  );
};

DocumentFileUpload.defaultProps = {
  value: [],
  multiple: false,
  remove: () => null,
};
