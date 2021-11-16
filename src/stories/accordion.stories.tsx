import React from 'react';
import { Box } from 'theme-ui';
import { Accordion } from '../accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Normal: React.FC = () => (
  <Accordion>
    <Box>Hello there! This first box is visible</Box>
    <Box>This is a hidden box</Box>
  </Accordion>
);
