import React, { useMemo, useState } from 'react';
import { Node, createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { ForwardRef } from 'theme-ui';

export interface EditorProps {
  text: Node[];
  onChange?: (value: Node[]) => void;
}

const noteDefaultValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

export const Editor: ForwardRef<HTMLInputElement, EditorProps> =
  React.forwardRef(({ text = noteDefaultValue, onChange = () => '' }, ref) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [editorValue, setEditorValue] = useState(text);

    return (
      <Slate
        editor={editor}
        value={editorValue}
        onChange={val => {
          onChange(val);
          setEditorValue(val);
        }}
        ref={ref}
      >
        <Editable
          sx={{
            mt: 3,
            minHeight: '160px',
          }}
        />
      </Slate>
    );
  });
