/**
 * Represents a single node in a Queue.
 * @class Node
 */
class Node {
    constructor(value) {
        this.value = value; // The value stored in the node
        this.next = null;  // Reference to the next node in the queue
    }
}

/**
 * Represents a Queue data structure.
 * @class Queue
 */
export class Queue {
    constructor() {
        this.head = null; // Reference to the front (head) of the queue
        this.tail = null; // Reference to the back (tail) of the queue
        this.size = 0;    // The current size of the queue
    }
    
    /**
     * Adds an item to the back of the queue.
     * @param {*} item - The item to be enqueued.
     */
    enqueue(item) {
        const node = new Node(item); // Create a new node with the given item
        if (this.head === null) {
            // If the queue is empty, set both front and tail to the new node
            this.head = node;
            this.tail = this.head;
        } else {
            // Otherwise, append the new node to the tail and update the tail reference
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++; // Increment the size of the queue
    }
    
    /**
     * Removes and returns the item from the front of the queue.
     * @returns {*} - The item at the front of the queue, or null if the queue is empty.
     */
    dequeue() {
        if (!this.head)
            return null; // If the queue is empty, return null
        
        const temp = this.head; // Store a reference to the front node
        
        if (this.head === this.tail) {
            // If there was only one node in the queue, set both front and tail to null
            this.head = this.tail = null;
        } else {
            // Otherwise, update the front reference to the next node
            this.head = this.head.next;
        }
        
        this.size--; // Decrement the size of the queue
        return temp.value; // Return the value of the removed node
    }

    /**
     * Returns the number of items in the queue.
     * @returns {number} The number of items in the queue.
     */
    size() {
        return this.head.length;
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, otherwise false.
     */
    isEmpty() {
        return this.head.length === 0;
    }

    /**
     * Return front value of the queue.
     * @returns {*} - The item at the front of the queue, or null if the queue is empty.
     */
    front() {
        if(this.head === null) {
            return null;
        }
        return this.head.value;
    }

    /**
     * Return back value of the queue.
     * @returns {*} - The item at the last of the queue, or null if the queue is empty.
     */
    back() {
        if(this.tail === null) {
            return null;
        }
        return this.tail.value;
    }
}
