import React from 'react';
import { Box, Divider } from 'theme-ui';
import { Accordion } from '../accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Normal: React.FC = () => (
  <Accordion>
    <Box sx={{ p: 3 }}>Hello there! This first box is visible</Box>
    <Box sx={{ px: 3, pb: 3 }}>
      <Divider sx={{ m: 0, mb: 3 }} />
      This is a hidden box
    </Box>
  </Accordion>
);
