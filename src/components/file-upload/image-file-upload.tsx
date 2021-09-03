import React, { useRef, useState } from 'react';
import { Box, Grid, Image, Text } from 'theme-ui';
import { FileDeleteButton } from './components/file-delete-button';
import { FileUploadButton } from './components/file-upload-button';
import { FileUploadInput } from './components/file-upload-input';

export interface UploadedFile {
  url: string;
}

export interface ImageFileUploadProps {
  value?: UploadedFile | null;
  user: {
    firstName: string;
    lastName: string;
  };
  id?: string;
  accept?: string;
  buttonComponent?: React.ReactNode;
  validate?: (file: File) => string | void;
  upload: (files: File) => Promise<string> | null;
  remove?: (file: UploadedFile) => void;
}

const defaultProps = {
  accept: 'image/*',
};

export const ImageFileUpload: React.FC<ImageFileUploadProps> = props => {
  const { value, user, id, accept, buttonComponent, validate, upload, remove } =
    props;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as string[]);
  const [image, setImage] = useState(value?.url);

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => inputRef.current && inputRef.current.click();
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
      if (filesToUpload.length !== 0) {
        const url = await upload(filesToUpload[0]);
        if (url) {
          setImage(url);
        }
      }
    } catch (err) {
      setErrors([err.message]);
    }
    setLoading(false);
  };

  return (
    <Box
      mt={5}
      mb={4}
      sx={{ backgroundColor: 'lightGray', p: '45px', borderRadius: '8px' }}
    >
      <Grid gap={2} columns={[1, 1, 2]}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={
              image ||
              `https://eu.ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=749F97&size=512`
            }
            variant="rounded"
            sx={{ minWidth: 161, width: 161, height: 161 }}
          />
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
                Upload Image
              </FileUploadButton>
            )}
            <FileUploadInput
              id={id}
              inputRef={inputRef}
              onChange={onInputChange}
              accept={accept}
            />
          </label>
          <FileDeleteButton
            mt={3}
            onClick={() => {
              if (value && remove) {
                remove(value);
              }
              setImage('');
            }}
          >
            Delete image
          </FileDeleteButton>
        </Box>
        {errors && errors.length > 0 && (
          <Text sx={{ color: 'danger', mt: 2 }}>{errors.join(' ')}</Text>
        )}
      </Grid>
    </Box>
  );
};

ImageFileUpload.defaultProps = defaultProps;

ImageFileUpload.displayName = 'ImageFileUpload';
