"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor() {
        this.head = null;
        this.append = (value) => {
            const node = this.forgeNode(value);
            if (this.isEmpty()) {
                this.head = node;
                return this;
            }
            this.appendToTheStart(value);
            return this;
        };
        this.isEmpty = () => !this.head;
        this.toArray = () => {
            const result = [];
            let node = this.head;
            while (node) {
                result.push(node.value);
                node = node.next;
            }
            return result;
        };
        this.fromArray = (values) => {
            values.reverse();
            values.forEach(v => this.append(v));
            return this;
        };
        this.appendToTheStart = (value) => {
            const node = this.forgeNode(value);
            const currentHead = this.head;
            this.head = node;
            this.head.next = currentHead;
        };
        this.getFirstElement = () => this.head;
        this.getElementsExceptFirst = () => {
            const result = [];
            let node = this.head.next;
            while (node) {
                result.push(node.value);
                node = node.next;
            }
            return result;
        };
        this.forgeNode = (value) => {
            return { value, next: null };
        };
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map