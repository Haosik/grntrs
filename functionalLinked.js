"use strict";
let LinkedList = [];
const forgeNode = (val) => ({
    value: val
});
const append = (list, val) => {
    const node = forgeNode(val);
    list.unshift(node);
    return list;
};
console.log(append(LinkedList, 1));
//# sourceMappingURL=functionalLinked.js.map