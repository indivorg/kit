import React from 'react';
import { Box, Flex } from 'theme-ui';
import { Skeleton } from '../skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaults: React.FC = props => (
  <Box>
    <Flex>
      <Skeleton {...props} shape="circular" size="10rem" />
      <Box sx={{ width: '400px', mx: 4 }}>
        <Skeleton {...props} shape="text" sx={{ mb: 2 }} />
        <Skeleton {...props} shape="text" sx={{ width: '80%' }} />
      </Box>
    </Flex>
  </Box>
);

export const textShape: React.FC = props => (
  <Skeleton {...props} shape="text" />
);

export const circularShape: React.FC = props => (
  <Box>
    <Skeleton {...props} shape="circular" size="10rem" />
  </Box>
);

export const rectagularShape: React.FC = props => (
  <Box>
    <Skeleton {...props} shape="rectangular" sx={{ width: 200, height: 400 }} />
  </Box>
);
