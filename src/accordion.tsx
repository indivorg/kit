import React, { useCallback, useState } from 'react';
import { Box, BoxProps, Flex } from 'theme-ui';

export const Accordion = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    const [summary, ...otherChildren] = React.Children.toArray(children);
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = Boolean(otherChildren);
    const toggleDetails = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    return (
      <Box
        ref={ref}
        variant="primary"
        {...props}
        // @ts-expect-error themeKey is a private prop
        __themeKey="list"
        __css={{
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          border: 3,
          borderStyle: 'solid',
          borderColor: isOpen ? 'primary' : 'muted',
          borderRadius: 4,
          transition: 'border 15ms ease-out',
          cursor: hasChildren && 'pointer',
          ':hover': hasChildren && {
            borderColor: 'primary',
          },
        }}
      >
        <Flex
          sx={{ justifyContent: 'space-between', p: 3 }}
          onClick={toggleDetails}
        >
          {summary}
          <Box>Clicky</Box>
        </Flex>
        {isOpen && (
          <Box sx={{ px: 3, pb: 3 }}>
            <Box
              sx={{
                borderBottomColor: 'muted',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                mb: 3,
              }}
            />
            {otherChildren}
          </Box>
        )}
      </Box>
    );
  },
);
