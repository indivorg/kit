import React, { useState } from 'react';
import { SelectOption, TagSelect } from '../components';

export default {
  title: 'TagSelect',
  component: TagSelect,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Basic: React.FC = () => {
  const [tags, setTags] = useState<SelectOption[]>([]);

  return (
    <TagSelect
      tags={tags}
      onChangeTags={(tags: SelectOption[]) => setTags(tags)}
    >
      <option id="">Select person</option>
      <option id="bret">Bret</option>
      <option id="jemaine">Jemaine</option>
    </TagSelect>
  );
};
