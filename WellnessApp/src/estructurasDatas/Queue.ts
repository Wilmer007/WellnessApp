import { Node } from './Node';

export class Queue<T> {
  private front: Node<T> | null;
  private rear: Node<T> | null;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data: T): void {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear!.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.front!;
    this.front = removedNode.next;

    if (this.front === null) {
      this.rear = null;
    }

    return removedNode.data;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.front!.data;
  }

  isEmpty(): boolean {
    return this.front === null;
  }
}