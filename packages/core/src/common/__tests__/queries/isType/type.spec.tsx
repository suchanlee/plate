/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils';
import { ELEMENT_PARAGRAPH } from '../../../../../../nodes/paragraph/src/createParagraphPlugin';
import { PlateEditor } from '../../../../types/PlateEditor';
import { isType } from '../../../queries/isType';

jsx;

const editor = ((
  <editor>
    <hp>test</hp>
  </editor>
) as any) as PlateEditor;

it('should return true when type matches', () => {
  expect(isType(editor, editor.children[0], ELEMENT_PARAGRAPH)).toEqual(true);
});
