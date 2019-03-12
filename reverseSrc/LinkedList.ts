export interface INode<T> {
  value: T;
  next?: INode<T>;
}

export class LinkedList<T> {
  private head: INode<T> = null;

  public append = (value: T): LinkedList<T> => {
    const node = this.forgeNode(value);

    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    this.appendToTheStart(value);
    return this;
  };

  public isEmpty = () => !this.head;

  public toArray = (): T[] => {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  };

  public fromArray = (values: T[]): LinkedList<T> => {
    // To behave as expected and get 1>2>3 from [1,2,3]
    values.reverse();

    values.forEach(v => this.append(v));
    return this;
  };

  public appendToTheStart = (value: any) => {
    const node = this.forgeNode(value);
    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
  };

  public getFirstElement = (): INode<T> => this.head;

  public getElementsExceptFirst = (): T[] => {
    const result: T[] = [];
    let node = this.head.next;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  };

  private forgeNode = (value: T): INode<T> => {
    return { value, next: null };
  };
}
