const readline = require('readline');

import { LinkedList } from './reverseSrc/LinkedList';

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

// function for b)
export function reverseLinkedList<T>(list: LinkedList<T>) {
  const oldReversedArray = list.toArray().reverse();

  return new LinkedList().fromArray(oldReversedArray);
}

// #region Node program for c)
const linkedPromptList = new LinkedList<any>();
let line = 1;
const increaseLineByOne = () => line++;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input: string) => {
  linkedPromptList.appendToTheStart(input);
  console.log(`On line ${line} you entered: ${input}`);
  increaseLineByOne();
});

rl.on('close', () => {
  const arrayFromLinkedPromptList = linkedPromptList;
  const reversedList = reverseLinkedList(arrayFromLinkedPromptList);
  const reversedListArray = reversedList.toArray().reverse();

  const reversedLinesString = reversedListArray.join('\n').trim();
  console.log('\nHere is your "input with reverse order of lines": ');
  console.log(reversedLinesString);
});

rl.question(
  `\n Please enter anything (e.g. number or a string) and press "Enter". 
 After you\'re done, simply press ctrl+C (cmd+C on Mac) to see the lines you entered in reverse order \n`,
  (answer: string) => {
    linkedPromptList.appendToTheStart(answer);

    console.log(`On line ${line} you entered: ${answer}`);
    increaseLineByOne();

    // rl.close();
  }
);
// #endregion
