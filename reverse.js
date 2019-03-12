"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const LinkedList_1 = require("./reverseSrc/LinkedList");
function reverseLinkedList(list) {
    const oldReversedArray = list.toArray().reverse();
    return new LinkedList_1.LinkedList().fromArray(oldReversedArray);
}
exports.reverseLinkedList = reverseLinkedList;
const linkedPromptList = new LinkedList_1.LinkedList();
let line = 1;
const increaseLineByOne = () => line++;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    linkedPromptList.append(input);
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
rl.question(`\n Please enter anything (e.g. number or a string) and press "Enter". 
 After you\'re done, simply press ctrl+C (cmd+C on Mac) to see the lines you entered in reverse order \n`, (answer) => {
    linkedPromptList.append(answer);
    console.log(`On line ${line} you entered: ${answer}`);
    increaseLineByOne();
});
//# sourceMappingURL=reverse.js.map