import React from 'react';
import { Box, Card, Flex, Heading, Text } from 'theme-ui';
import { Skeleton } from '../skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const simpleLayout: React.FC = props => (
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

export const circleShape: React.FC = props => (
  <Skeleton {...props} shape="circular" size={48} />
);

export const cardLoading: React.FC = props => (
  <Box>
    <Flex sx={{ gap: 4 }}>
      <Card
        sx={{
          p: 3,
          width: 240,
          height: 320,
          outline: 'solid',
          outlineColor: '#',
          borderRadius: 6,
        }}
      >
        <Flex>
          <Heading as="h2">Card name</Heading>
          <Box
            sx={{
              height: 48,
              width: 48,
              borderRadius: 48,
              background: '#8fa4c8',
              ml: 'auto',
              mr: 1,
            }}
          />
        </Flex>
        <Text>
          This is a text describing a person or something like that. We are
          retrieving this data form somewhere, which is why we want to write a
          loding component!
        </Text>
        <Box sx={{ width: 52, height: 52 }} />
      </Card>

      <Card
        sx={{
          p: 3,
          width: 240,
          height: 320,
          outline: 'solid',
          outlineColor: '#',
          borderRadius: 6,
        }}
      >
        <Flex>
          <Skeleton />
          <Skeleton
            {...props}
            shape="circular"
            size={48}
            sx={{ ml: 'auto', mr: 1 }}
          />
        </Flex>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Box sx={{ backgrondColor: '#8fa4c8', width: 52, height: 52 }} />
      </Card>
    </Flex>
  </Box>
);
