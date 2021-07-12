import React from 'react';
import { Box, BoxProps, Link } from 'theme-ui';

export interface BreadcrumbsProps extends BoxProps {
  items: { href?: string; name: React.ReactNode | string }[];
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props, ref) => (
    <Box
      ref={ref}
      variant="primary"
      {...props}
      // @ts-expect-error themeKey is a private prop
      __themeKey="breadcrumb"
    >
      {props.items.map((item, k) => {
        const isLast = k === props.items.length - 1;
        return (
          <Box
            key={k}
            sx={{
              color: isLast ? 'primary' : 'inherit',
              display: 'inline-block',
            }}
          >
            {item.href ? (
              <Link
                href={item.href}
                sx={{
                  textDecoration: 'none',
                  color: isLast ? 'primary' : 'inherit',
                }}
              >
                {item.name}
              </Link>
            ) : (
              item.name
            )}
            {!isLast && (
              <Box sx={{ display: 'inline-block', mx: 2, color: 'muted' }}>
                /
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  ),
);
