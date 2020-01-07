import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, withReact } from 'slate-react';
import {
  BLOCKQUOTE,
  BlockquotePlugin,
  EditablePlugins,
  HeadingPlugin,
  ListPlugin,
  ListType,
  ParagraphPlugin,
  withBlock,
  withBreakEmptyReset,
  withDeleteEmptyReset,
  withShortcuts,
} from '../../packages/slate-plugins/src';
import { initialValueMarkdownShortcuts } from '../config/initialValues';

export default {
  title: 'Plugins/Markdown Shortcuts',
};

export const Example = () => {
  const plugins = [
    BlockquotePlugin(),
    ListPlugin(),
    HeadingPlugin(),
    ParagraphPlugin(),
  ];

  const createReactEditor = () => () => {
    const [value, setValue] = useState(initialValueMarkdownShortcuts);

    const editor = useMemo(
      () =>
        withBreakEmptyReset({ types: [BLOCKQUOTE] })(
          withDeleteEmptyReset({
            types: [BLOCKQUOTE, ListType.LIST_ITEM],
            unwrapTypes: [ListType.UL_LIST, ListType.OL_LIST],
          })(
            withShortcuts(
              withBlock({
                unwrapTypes: [ListType.UL_LIST, ListType.OL_LIST],
              })(withHistory(withReact(createEditor())))
            )
          )
        ),
      []
    );

    return (
      <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
      >
        <EditablePlugins
          plugins={plugins}
          placeholder="Write some markdown..."
          spellCheck
          autoFocus
        />
      </Slate>
    );
  };

  const Editor = createReactEditor();

  return <Editor />;
};