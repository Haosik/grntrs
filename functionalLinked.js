"use strict";
let myLinkList = [];
const forgeNode = (val) => ({
    value: val
});
const append = (list, val) => {
    const node = forgeNode(val);
    node.next = list.length ? list[0] : null;
    list.unshift(node);
    return list;
};
const toArray = (list) => list.map(el => el.value);
append(myLinkList, 1);
append(myLinkList, 2);
append(myLinkList, 3);
console.log(myLinkList);
console.log(toArray(myLinkList));
//# sourceMappingURL=functionalLinked.js.map