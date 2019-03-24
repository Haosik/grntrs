type TNode = string | number;

interface INode<T> {
  value: T;
  next?: INode<T>;
}

let LinkedList: INode<TNode>[] = [];

const forgeNode = (val: TNode) => ({
  value: val
});

const append = (list: INode<TNode>[], val: TNode): INode<TNode>[] => {
  const node = forgeNode(val);

  list.unshift(node);
  return list;
};

console.log(append(LinkedList, 1));
