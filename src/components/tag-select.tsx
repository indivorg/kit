import React from 'react';
import { HiX } from 'react-icons/hi';
import {
  Card,
  Flex,
  ForwardRef,
  Grid,
  IconButton,
  SelectProps,
  Text,
} from 'theme-ui';
import { Select } from './select';
import { SelectOption } from './select-option';

export interface TagDropdownProps extends SelectProps {
  tags?: SelectOption[];
  onChangeTags?: (tags: SelectOption[]) => void;
}

export const TagSelect: ForwardRef<HTMLSelectElement, TagDropdownProps> =
  React.forwardRef(
    ({ tags = [], onChangeTags = () => '', children, ...props }) => {
      const onAdd = (tag: SelectOption) => {
        if (tag.id !== '') {
          if (!tags.find(entry => tag.id === entry.id))
            onChangeTags([...tags, tag]);
        }
      };

      const onDelete = (tag: SelectOption) => {
        const newTags = tags.slice(0);
        const tagIndex = newTags.findIndex(val => val.id === tag.id);
        newTags.splice(tagIndex, 1);
        onChangeTags(newTags);
      };

      return (
        <Flex sx={{ alignItems: 'center' }}>
          <Grid gap={1} columns={[1, 1, 2, 3]}>
            {(tags || []).map(tag => (
              <Card key={tag.id}>
                <Flex
                  sx={{
                    backgroundColor: 'primary',
                    border: '0.2rem solid',
                    borderColor: 'secondary',
                    borderRadius: '0.5rem',
                    color: 'background',
                    alignItems: 'center',
                    py: 1,
                    px: 2,
                    m: '8px',
                    width: 'auto',
                    minWidth: '8.75rem',
                  }}
                >
                  <Text>{tag.text}</Text>
                  <IconButton
                    sx={{
                      fontSize: '1.2rem',
                      ml: 3,
                      flexGrow: 1,
                      justifyContent: 'flex-end',
                      color: 'background',
                    }}
                    onClick={() => onDelete(tag)}
                  >
                    <HiX />
                  </IconButton>
                </Flex>
              </Card>
            ))}
            <Card sx={{ display: 'flex', p: '8px' }}>
              <Select
                {...props}
                onChange={optionElement =>
                  onAdd({
                    id: optionElement.id,
                    text: optionElement.text,
                  })
                }
              >
                {children}
              </Select>
            </Card>
          </Grid>
        </Flex>
      );
    },
  );
