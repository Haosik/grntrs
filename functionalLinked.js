"use strict";
let myLinkList = [];
const forgeNode = (val) => ({
    value: val
});
const cons = (val, list) => {
    const node = forgeNode(val);
    node.next = list.length ? list[0] : null;
    list.unshift(node);
    return list;
};
const toArray = (list) => list.map(el => el.value);
function list() { }
function car() { }
function cdr() { }
function append() { }
function member() { }
function reverse() { }
cons(1, myLinkList);
cons(2, myLinkList);
cons(3, myLinkList);
console.log(myLinkList);
console.log(toArray(myLinkList));
//# sourceMappingURL=functionalLinked.js.map