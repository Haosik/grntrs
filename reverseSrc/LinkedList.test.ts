import { LinkedList } from './LinkedList';
import { reverseLinkedList } from '../reverse';

describe('LinkedList functionality', () => {
  let testedLinkedList: LinkedList<any>;

  beforeEach(() => {
    testedLinkedList = new LinkedList<any>();
  });

  test('Basic', () => {
    expect(testedLinkedList).toBeInstanceOf(LinkedList);
  });

  test('Should initialize LinkedList calling fromArray', () => {
    testedLinkedList.fromArray([2, 3]);
    expect(testedLinkedList.toArray()).toEqual([2, 3]);
  });

  test('Should initialize LinkedList by appending single values', () => {
    testedLinkedList.append(1);
    testedLinkedList.append(2);
    testedLinkedList.append(3);
    expect(testedLinkedList.toArray()).toEqual([3, 2, 1]);
  });

  test('Should insert items to the start of the list', () => {
    testedLinkedList.fromArray([2, 3]);
    testedLinkedList.appendToTheStart(1);
    expect(testedLinkedList.toArray()).toEqual([1, 2, 3]);
  });

  test('Should return only first element (head)', () => {
    testedLinkedList.fromArray([1, 2, 3]);
    expect(testedLinkedList.getFirstElement()).toEqual({
      next: { next: { next: null, value: 3 }, value: 2 },
      value: 1
    });
  });

  test('Should return all elements except first (head)', () => {
    testedLinkedList.fromArray([1, 2, 3]);
    expect(testedLinkedList.getElementsExceptFirst()).toEqual([2, 3]);
  });

  test('Should return reversed list with reverseLinkedList', () => {
    testedLinkedList.fromArray([1, 2, 3]);
    const reversedList = reverseLinkedList(testedLinkedList);
    expect(reversedList.toArray()).toEqual([3, 2, 1]);
  });
});
