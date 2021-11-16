import React from 'react';
import { Skeleton } from '../skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const textShape: React.FC = props => <Skeleton {...props} shape="text" />;
