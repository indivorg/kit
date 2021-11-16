/**
 * @jest-environment jsdom
 */
import { matchers } from '@emotion/jest';
import React from 'react';
import { Skeleton } from '../skeleton';
import { renderJSON } from '../test-utils';

expect.extend(matchers);

describe('skeleton', () => {
  it.each(['text', 'circular', 'rectangular'] as const)(
    'should render %s',
    shape => {
      const json = renderJSON(<Skeleton shape={shape} />);
      expect(json).toMatchSnapshot();
    },
  );

  it('should always have muted background', () => {
    const circle = renderJSON(<Skeleton shape="circular" />);
    expect(circle).toHaveStyleRule('background-color', 'muted');
  });
});
