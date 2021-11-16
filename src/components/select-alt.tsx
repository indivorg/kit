import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { ForwardRef, IconButton, Select as ThemeSelect } from 'theme-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectAltProps {}

export const SelectAlt: ForwardRef<HTMLSelectElement, SelectAltProps> =
  React.forwardRef(({ children, ...props }, ref) => {
    return (
      <ThemeSelect
        {...props}
        ref={ref}
        arrow={
          <IconButton
            sx={{
              ml: -30,
              mt: -20,
              alignSelf: 'center',
              pointerEvents: 'none',
            }}
          >
            <HiOutlineChevronDown size={24} sx={{ color: 'primary' }} />
          </IconButton>
        }
        sx={{
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          p: 0,
        }}
      >
        {children}
      </ThemeSelect>
    );
  });
