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
          as="button"
          className="accordion-heading"
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            fontSize: 'inherit',
            border: 0,
            cursor: hasChildren && 'pointer',
            '::after': {
              border: '2px solid',
              borderColor: 'primary',
            },
          }}
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={toggleDetails}
        >
          {summary}
          <Box>Clicky</Box>
        </Flex>
        {isOpen && otherChildren}
      </Box>
    );
  },
);
