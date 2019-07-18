type TNode = string | number;

interface INode<T> {
  value: T;
  next?: INode<T>;
}

type TLispList = INode<TNode>[];

let myLinkList: TLispList = [];

const forgeNode = (val: TNode): INode<TNode> => ({
  value: val
});

const cons = (val: TNode, list: INode<TNode>[]): INode<TNode>[] => {
  const node = forgeNode(val);
  node.next = list.length ? list[0] : null;

  list.unshift(node);
  return list;
};

const toArray = (list: INode<TNode>[]): TNode[] => list.map(el => el.value);

function list() {}
function car() {}
function cdr() {}
function append() {}
function member() {}
function reverse() {}

cons(1, myLinkList);
cons(2, myLinkList);
cons(3, myLinkList);
console.log(myLinkList);
console.log(toArray(myLinkList));
