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

    const { borderRadius = 4 } = (props.sx as any) ?? {};

    return (
      <Box
        variant="primary"
        ref={ref}
        {...props}
        // @ts-expect-error themeKey is a private prop
        __themeKey="accordion"
        __css={{
          position: 'relative',
          borderRadius,
          border: 0,
        }}
      >
        <Flex
          as="button"
          className="accordion-heading"
          // @ts-expect-error themeKey is a private prop
          __css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            fontSize: 'inherit',
            border: 0,
            p: 0,
            m: 0,
            cursor: hasChildren && 'pointer',
            '&:focus': {
              outline: 'none',
            },
            '&::after': {
              content: '""',
              pointerEvents: 'none',
              borderRadius,
              position: 'absolute',
              inset: -2,
            },
            '&:focus::after,&:hover::after': {
              border: '2px solid',
              borderColor: 'primary',
            },
          }}
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={toggleDetails}
        >
          {summary}
        </Flex>
        <Box as="section" hidden={!isOpen}>
          {otherChildren}
        </Box>
      </Box>
    );
  },
);
