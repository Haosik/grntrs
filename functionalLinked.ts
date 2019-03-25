type TNode = string | number;

interface INode<T> {
  value: T;
  next?: INode<T>;
}

type TLinkedList = INode<TNode>[];

let myLinkList: TLinkedList = [];

const forgeNode = (val: TNode): INode<TNode> => ({
  value: val
});

const append = (list: INode<TNode>[], val: TNode): INode<TNode>[] => {
  const node = forgeNode(val);
  node.next = list.length ? list[0] : null;

  list.unshift(node);
  return list;
};

const toArray = (list: INode<TNode>[]): TNode[] => list.map(el => el.value);

append(myLinkList, 1);
append(myLinkList, 2);
append(myLinkList, 3);
console.log(myLinkList);
console.log(toArray(myLinkList));
