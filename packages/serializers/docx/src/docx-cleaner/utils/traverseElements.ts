import { isHtmlElement } from '@udecode/plate-html-serializer';
import { traverse } from './traverse';

type Callback = (node: Element) => boolean;

export const traverseElements = (rootNode: Node, callback: Callback): void => {
  traverse(rootNode, (node) => {
    if (!isHtmlElement(node)) {
      return true;
    }

    return callback(node);
  });
};