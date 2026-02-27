import { Node } from './Node';

export class Stack<T> {
  private top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  push(data: T): void {
    const newNode = new Node(data);

    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.top!;
    this.top = removedNode.next;

    return removedNode.data;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.top!.data;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}