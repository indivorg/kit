import React from 'react';
import { Button, Flex, Text } from 'theme-ui';
import { ListItem } from '../list-item';

export default {
  title: 'ListItem',
  component: ListItem,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const withText: React.FC = props => (
  <ListItem {...props}>This is a list element</ListItem>
);

export const withButton: React.FC = props => (
  <ListItem {...props}>
    <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
      <Text>This is a list element</Text>
      <Button variant="small" sx={{ py: 2, px: 3 }}>Go there</Button>
    </Flex>
  </ListItem>
);
