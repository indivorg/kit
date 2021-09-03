import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import {
  Box,
  Label,
  Input,
  FieldProps,
  Text,
  Image,
  Flex,
  ForwardRef,
  InputProps,
  ThemeUIStyleObject,
} from 'theme-ui';
import { getMargin, getPos, omitMargin, omitPos } from '../util';

export interface UserProps {
  photoUrl: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

// TODO correctly type this interface and implement it to type props
export interface FieldImageProps {
  as: ForwardRef<any, InputProps>;
  label: string;
  name: string;
  error: any;
  sx: ThemeUIStyleObject;
  userData: Partial<UserProps>;
  children: any;
}

export const FieldImage = React.forwardRef(
  (
    { as: Control = Input, label, name, error, sx, userData, ...props }: FieldProps<any>,
    ref
  ) => {
    return (
      <Flex
        {...getMargin(props)}
        sx={{
          p: 3,
          mt: 3,
          mb: 3,
          borderRadius: '8px',
          border: '3px solid',
          borderColor: 'primary',
          backgroundColor: 'background',
          ...getPos(sx),
        }}
      >
        <Flex
          sx={{
            width: '48px',
            height: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed',
            borderRadius: '50%',
            borderColor: 'accent',
            mr: 4,
            fontSize: '20px',
          }}
        >
          {/* TODO: replace with Avatar component (shows user image or initials) */}
          {userData ? (
            <Image
              src={
                userData?.photoUrl ||
                `https://eu.ui-avatars.com/api/?name=${userData?.firstName}+${userData?.lastName}&background=749F97&size=512`
              }
              variant="rounded"
              sx={{ minWidth: 52, width: 52, height: 52 }}
            />
          ) : (
            <HiOutlineUser />
          )}
        </Flex>
        <Box sx={{ flexGrow: 1 }}>
          <Label sx={{ fontWeight: 'bold', fontSize: 1 }} htmlFor={name}>
            {label}
          </Label>
          <Control
            ref={ref}
            id={name}
            name={name}
            sx={{ border: 0, outline: 'none', p: 0, ...omitPos(sx) }}
            {...omitMargin(props)}
          />
          {!!error && <Text sx={{ color: 'lightRed' }}>{error}</Text>}
        </Box>
      </Flex>
    );
  }
);
