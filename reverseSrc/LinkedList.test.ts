import { LinkedList } from './LinkedList';
import { INode } from './INode';

let testedLinkedList: LinkedList<any>;

beforeEach(() => {
  testedLinkedList = new LinkedList<any>();
  testedLinkedList.fromArray([2, 3]);
});

test('Basic grouping with saving order of manufacturerId appearing in input', () => {
  expect(testedLinkedList.appendToTheStartOfTheList(1).toEqual([1, 2, 3]);
});
