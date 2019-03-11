"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const LinkedList_1 = require("./reverseSrc/LinkedList");
function reverseLinkedList(list) {
    const oldArray = list.toArray();
    return new LinkedList_1.LinkedList().fromArray(oldArray);
}
let myLinkedArr = new LinkedList_1.LinkedList();
myLinkedArr.fromArray([2, 3]);
console.log(myLinkedArr.toArray());
myLinkedArr.appendToTheStartOfTheList(1);
console.log(myLinkedArr.toArray());
console.log(myLinkedArr.getFirstElement());
console.log(myLinkedArr.toArray());
myLinkedArr.append(4);
myLinkedArr.append(5);
console.log(myLinkedArr.getElementsExceptFirst());
console.log('just full array', myLinkedArr);
console.log(reverseLinkedList(myLinkedArr));
console.log(reverseLinkedList(myLinkedArr).toArray());
const linkedPromptList = new LinkedList_1.LinkedList();
let line = 1;
const increaseLineByOne = () => line++;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const makeNode = (value) => ({ value });
rl.on('line', (input) => {
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
rl.question(`\n Please enter anything (e.g. number or a string) and press "Enter". 
 After you\'re done, simply press ctrl+C (cmd+C on Mac) to see the lines you entered in reverse order \n`, (answer) => {
    const node = makeNode(answer);
    linkedPromptList.appendToTheStartOfTheList(node);
    console.log(`On line ${line} you entered: ${answer}`);
    increaseLineByOne();
});
//# sourceMappingURL=reverse.js.map