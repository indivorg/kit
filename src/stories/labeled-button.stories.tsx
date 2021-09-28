import React from 'react';
import {
  HiOutlineAcademicCap,
  HiOutlineAdjustments,
  HiOutlineArchive,
  HiOutlineArrowNarrowRight,
  HiOutlineCloudDownload,
  HiOutlinePlus,
  HiOutlineViewGridAdd,
} from 'react-icons/hi';
import { Text } from 'theme-ui';
import { LabeledButton } from '../components/labeled-button';

export default {
  title: 'LabeledButton',
  component: LabeledButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Delete: React.FC = () => (
  <LabeledButton
    sx={{
      backgroundColor: 'lightRed',
      color: 'text',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => alert('Button clicked!')}
  >
    <Text>Delete</Text>
    <HiOutlineArchive />
  </LabeledButton>
);

export const AffixedIcon: React.FC = () => (
  <LabeledButton
    sx={{
      backgroundColor: 'lightGreen',
      color: 'text',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => alert('Button clicked!')}
  >
    <HiOutlinePlus />
    <Text>Add something</Text>
  </LabeledButton>
);

export const Download: React.FC = () => (
  <LabeledButton
    sx={{
      backgroundColor: 'lightYellow',
      color: 'text',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => alert('Button clicked!')}
  >
    <Text>Download</Text>
    <HiOutlineCloudDownload />
  </LabeledButton>
);

export const JustIcon: React.FC = () => (
  <LabeledButton
    sx={{
      backgroundColor: 'lightYellow',
      color: 'text',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => alert('Button clicked!')}
  >
    <HiOutlineAcademicCap />
  </LabeledButton>
);

export const ManyIcons: React.FC = () => (
  <LabeledButton
    sx={{
      backgroundColor: 'lightGreen',
      color: 'text',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => alert('Button clicked!')}
  >
    <HiOutlineAdjustments />
    <HiOutlineArrowNarrowRight />
    <HiOutlineViewGridAdd />
    <HiOutlineCloudDownload />
  </LabeledButton>
);
