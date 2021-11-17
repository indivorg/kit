import React from 'react';
import { FieldProps, Flex, ForwardRef, Input, Label } from 'theme-ui';

export interface FieldsProps extends FieldProps<any> {
  alignItems?: string;
}

export const TagField: ForwardRef<HTMLDivElement, FieldsProps> =
  React.forwardRef(
    (
      { as: Control = Input, label, name, alignItems = 'center', ...props },
      ref,
    ) => {
      return (
        <Flex sx={{ alignItems, mt: 2 }}>
          <Label
            htmlFor={name}
            sx={{
              width: 'auto',
              color: 'black',
              fontWeight: 'body',
              fontSize: '12px',
              mr: 3,
            }}
          >
            {label}
          </Label>
          <Control {...props} ref={ref} id={name} name={name} />
        </Flex>
      );
    },
  );

TagField.displayName = 'TagField';
