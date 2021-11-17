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
        as="button"
        {...props}
        // @ts-expect-error themeKey is a private prop
        __themeKey="list"
        __css={{
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          // borderColor: isOpen ? 'primary' : 'muted',
          backgroundColor: 'transparent',
          display: 'block',
          textAlign: 'left',
          width: '100%',
          borderRadius: 4,
          transition: 'border 15ms ease-out',
          boxSizing: 'border-box',
          border: 3,
          borderStyle: 'solid',
          borderColor: 'transparent',
          ':hover,:focus': {
            borderColor: 'primary',
          },
        }}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            p: 3,
            cursor: hasChildren && 'pointer',
          }}
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
