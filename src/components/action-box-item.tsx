import React, { ReactNode } from 'react';
import { ButtonProps, Container, Flex, Grid } from 'theme-ui';

export interface ActionBoxItemProps extends ButtonProps {
  actions?: Array<ReactNode>;
}

export const ActionBoxItem: React.FC<ActionBoxItemProps> = ({
  actions,
  disabled,
  children,
}) => {
  return (
    <Container
      sx={{
        color: disabled ? 'secondary' : 'primary',
        border: '5px solid',
        borderColor: 'muted',
        borderRadius: '8px',
        p: 3,
        m: 2,
      }}
    >
      <Flex sx={{ alignItems: 'center' }}>
        <Grid gap={2} columns={[1, 6, 6, 10]} sx={{ flexGrow: 1 }}>
          {children}
        </Grid>
        {actions}
      </Flex>
    </Container>
  );
};

ActionBoxItem.displayName = 'ListBox';
