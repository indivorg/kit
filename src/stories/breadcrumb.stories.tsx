import React from 'react';
import { Breadcrumb } from '../breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Normal: React.FC = props => (
  <Breadcrumb
    {...props}
    items={[
      {
        href: '/settings/department',
        name: 'Department',
      },
      {
        name: 'Add new department',
      },
    ]}
  />
);
