/* eslint no-console: off */
import React, { MouseEventHandler } from 'react';
import { UseTableOptions, useTable } from 'react-table';
import { Box, BoxProps } from 'theme-ui';

export interface TableProps<D extends Record<string, unknown>>
  extends UseTableOptions<D>, BoxProps {
  withHeader?: boolean;
}

export interface TableData<T = unknown> extends Record<string, unknown> {
  onClick?: MouseEventHandler<T> | undefined;
}

export const Table = React.forwardRef<
  HTMLTableElement,
  TableProps<TableData<any>>
>((props, ref) => {
  const { withHeader, ...tableOptions } = props;
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups = [],
    rows = [],
  } = useTable(tableOptions);

  return (
    <Box
      ref={ref}
      {...getTableProps()}
      as="table"
      // @ts-expect-error themeKey is a private prop
      __themeKey="table"
      __css={{
        borderSpacing: '0 15px',
      }}
      variant="primary"
    >
      {withHeader && (
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, i) => (
                <Box
                  as="th"
                  // @ts-expect-error css is a private prop
                  __css={{ textAlign: 'left', px: 2 }}
                  {...column.getHeaderProps()}
                  key={i}
                >
                  {column.render('Header')}
                </Box>
              ))}
            </tr>
          ))}
        </thead>
      )}
      <Box as="tbody" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Box
              as="tr"
              {...row.getRowProps()}
              key={i}
              // @ts-expect-error css is a private prop
              __css={{
                cursor: row.original.onClick ? 'pointer' : null,
              }}
              onClick={row.original.onClick}
            >
              {row.cells.map((cell, i) => (
                <Box
                  as="td"
                  {...cell.getCellProps()}
                  key={i}
                  // @ts-expect-error css is a private prop
                  __css={{ p: 2 }}
                >
                  {cell.render('Cell')}
                </Box>
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
});
