import { ThemeProvider } from '@emotion/react';
import { Meta } from '@storybook/react';
import * as faker from 'faker';
import React from 'react';
import { Table } from '../table';

const range = (len: number, fun: () => Record<string, unknown>) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(fun());
  }
  return arr;
};

export default {
  title: 'Table',
  component: Table,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    data:
      range(15, () => ({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.streetAddress()}, ${faker.address.zipCode()} ${faker.address.city()}`,
      })) || [],
  },
} as Meta;

interface Props {
  data: Record<string, string>[];
}

export const WithText: React.FC<Props> = (props) => {
  return (
    <Table
      {...props}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Address',
          accessor: 'address',
        },
      ]}
      withHeader
    />
  );
};

export const WithThemeStyles: React.FC<Props> = (props) => (
  <ThemeProvider
    theme={{
      table: {
        primary: {
          width: '100%',
          borderRadius: 3,
          '>thead th': {
            fontWeight: 'normal',
            textDecoration: 'underline',
            bg: 'primary',
            p: 3,
          },
        },
      },
    }}
  >
    <Table
      {...props}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Address',
          accessor: 'address',
        },
      ]}
      withHeader
    />
  </ThemeProvider>
);
