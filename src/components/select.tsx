import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { IconButton, Select as ThemeSelect } from 'theme-ui';
import { SelectOption } from './select-option';

export interface DropdownProps {
  onChange?: (tags: SelectOption) => void;
}

// TODO: should be refactored, see SelectAlt component
export const Select: React.FC<DropdownProps> = React.forwardRef(
  ({ onChange = () => '', children, ...props }) => {
    return (
      <ThemeSelect
        {...props}
        arrow={
          <IconButton sx={{ ml: -30, alignSelf: 'center', pointerEvents: 'none' }}>
            <HiChevronDown sx={{ fontSize: 4 }} />
          </IconButton>
        }
        onChange={(event) => {
          const optionElement = event.target.selectedOptions[0];
          onChange({
            id: optionElement.id,
            text: optionElement.value,
          });
        }}
        sx={{
          minWidth: '10rem',
          alignItems: 'center',
          backgroundColor: 'muted',
          border: 'none',
          borderRadius: '8px',
          outline: 'none',
          padding: '8px 24px 8px 8px',
          fontSize: '12px',
        }}
      >
        {children}
      </ThemeSelect>
    );
  }
);
