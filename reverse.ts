const readline = require('readline');

import { LinkedList } from './reverseSrc/LinkedList';
import { INode } from './reverseSrc/INode';

/* TODO
 * a) Implement an immutable, singly linked list in TypeScript, with the
 *    following functionality:
 *
 *    - constructing a new list by adding an element to the front of an
 *      existing list, e.g. (1, <2, 3>) -> <1, 2, 3>
 *    - getting the first element of the list, e.g. <1, 2, 3> -> 1
 *    - getting the rest of the the list, e.g. <1, 2, 3> -> <2, 3>
 *
 *    Unsupported operations should throw exceptions.
 *
 * b) write a function that, given a list that supports operations
 *    from (a), returns the reversed list, e.g.: <1, 2, 3> -> <3, 2, 1>
 *
 * c) Using lists from (a) and function from (b), write a program that
 *    reverses the order of lines in its standard input e.g.
 *
 *   $ reverse << EOF
 *   > 1
 *   > 2
 *   > 3
 *   > EOF
 *   3
 *   2
 *   1
 */

function reverseLinkedList(list: LinkedList<any>) {
  const oldArray = list.toArray();

  return new LinkedList().fromArray(oldArray);
}

// #region a) and b) tests)))
let myLinkedArr = new LinkedList<number>();
// a.1
myLinkedArr.fromArray([2, 3]);
console.log(myLinkedArr.toArray());
myLinkedArr.appendToTheStartOfTheList(1);
console.log(myLinkedArr.toArray());
// a.2
console.log(myLinkedArr.getFirstElement());
console.log(myLinkedArr.toArray());
myLinkedArr.append(4);
myLinkedArr.append(5);
// a.3
console.log(myLinkedArr.getElementsExceptFirst());
console.log('just full array', myLinkedArr);
// b
console.log(reverseLinkedList(myLinkedArr));
console.log(reverseLinkedList(myLinkedArr).toArray());
// #endregion

// #region Node program for c)
const linkedPromptList = new LinkedList<any>();
let line = 1;
const increaseLineByOne = () => line++;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const makeNode = (value: any) => ({ value });

rl.on('line', (input: INode<any>) => {
  const node = makeNode(input);
  linkedPromptList.appendToTheStartOfTheList(node);
  console.log(`On line ${line} you entered: ${input}`);
  increaseLineByOne();
});

rl.on('close', () => {
  const arrayFromLinkedPromptList = linkedPromptList;
  const reversedList = reverseLinkedList(arrayFromLinkedPromptList);
  const reversedListArray = reversedList.toArray();

  const reversedLinesString = reversedListArray.join('\n').trim();
  console.log('\nHere is your "input with reverse order of lines": ');
  console.log(reversedLinesString);
});

rl.question(
  `\n Please enter anything (e.g. number or a string) and press "Enter". 
 After you\'re done, simply press ctrl+C (cmd+C on Mac) to see the lines you entered in reverse order \n`,
  (answer: INode<any>) => {
    const node = makeNode(answer);
    linkedPromptList.appendToTheStartOfTheList(node);

    console.log(`On line ${line} you entered: ${answer}`);
    increaseLineByOne();

    // rl.close();
  }
);
// #endregion
