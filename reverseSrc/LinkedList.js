"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.append = (value) => {
            const node = this.forgeNode(value);
            if (this.isEmpty()) {
                this.head = node;
                this.tail = node;
                return this;
            }
            this.appendToTheStartOfTheList(node);
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
            values.forEach(v => this.append(v));
            return this;
        };
        this.appendToTheStartOfTheList = (node) => {
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