## Install

```
npm install ds-kit
```

### Description
The Library provides ready to use famous data structures to JavaScript. It draws inspiration from the structured beauty of C++ STL.

1. Stack
2. Queue
3. Deque
4. LinkedList
5. DoubleLinkedList
6. PriorityQueue

## Usage

```javascript

import { Stack, Queue, PriorityQueue, DoubleLinkedList, LinkedList, Deque } from 'ds-kit';

const stack = new Stack();
stack.push(32);
stack.pop();
console.log(stack.top());
console.log(stack.size());
console.log(stack.isEmpty());

const queue = new Queue();
queue.enqueue(32);
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.front());
console.log(queue.back());

const deque = new Deque();
deque.push_back(32);
deque.push_front(33);
console.log(deque.pop_front());
console.log(deque.pop_back());
console.log(deque.size());
console.log(deque.isEmpty());


const linkedList = new LinkedList();
linkedList.insert(32);
linkedList.display();
console.log(linkedList.size());
console.log(linkedList.isEmpty());
const headLinkedList = linkedList.head();


const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insert(32);
doubleLinkedList.display();
console.log(doubleLinkedList.size());
console.log(doubleLinkedList.isEmpty());
const headLinkedList = doubleLinkedList.head();
const tailLinkedList = doubleLinkedList.tail();

// For MaxHeap
const priorityQueue = new PriorityQueue();
priorityQueue.insert(32);
console.log(priorityQueue.remove());
console.log(priorityQueue.peek());

//For MinHeap
const minPriorityQueue = new PriorityQueue("minHeap");
priorityQueue.insert(32);
console.log(priorityQueue.remove());
console.log(priorityQueue.peek());


```

## Author
**Abhishek Adarsh Mishra**

[Gmail](mailto:abhishekmshr063@gmail.com) | 
[Twitter](https://twitter.com/AbhishekAdarshM) | 
[Linkedin](https://www.linkedin.com/in/abhishek-adarsh-mishra-445125165/) | 
[Github](https://github.com/AbhishekAdarshMishra) |