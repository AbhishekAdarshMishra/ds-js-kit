/**
 * Represents a Node in a doubly-linked list used by the Deque.
 */
class Node {
    /**
     * Creates a new Node.
     * @param {*} value - The value to store in the Node.
     */
    constructor(value) {
        this.value = value;
        this.next = null; // Reference to the next Node in the list.
        this.prev = null; // Reference to the previous Node in the list.
    }
}

/**
 * Represents a Double-Ended Queue (Deque) data structure.
 */
export class Deque {
    /**
     * Creates a new Deque.
     */
    constructor() {
        this.front = null; // Reference to the front Node of the Deque.
        this.back = null; // Reference to the back Node of the Deque.
        this.size = 0;     // Number of elements in the Deque.
    }

    /**
     * Adds an element to the back of the Deque.
     * @param {*} item - The element to be added.
     */
    push_back(item) {
        const node = new Node(item);

        if (this.front === null) {
            this.front = node;
            this.back = this.front;
        } else {
            this.back.next = node;
            node.prev = this.back;
            this.back = this.back.next;
        }
        this.size++;
    }

    /**
     * Adds an element to the front of the Deque.
     * @param {*} item - The element to be added.
     */
    push_front(item) {
        const node = new Node(item);

        if (this.front === null) {
            this.front = node;
            this.back = this.front;
        } else {
            this.front.prev = node;
            node.next = this.front;
            this.front = this.front.prev;
        }
        this.size++;
    }

    /**
     * Removes and returns the element from the back of the Deque.
     * @returns {*} The removed element, or null if the Deque is empty.
     */
    pop_back() {
        if (!this.front || !this.back)
            return null;

        const temp = this.back;

        if (this.front === this.back) {
            this.front = this.back = null;
        } else {
            this.back = this.back.prev;
            this.back.next = null;
        }
        this.size--;
        return temp.value;
    }

    /**
     * Removes and returns the element from the front of the Deque.
     * @returns {*} The removed element, or null if the Deque is empty.
     */
    pop_front() {
        if (!this.front)
            return null;

        const temp = this.front;

        if (this.front === this.back) {
            this.front = this.back = null;
        } else {
            this.front = this.front.next;
            this.front.prev = null;
        }
        this.size--;
        return temp.value;
    }

    /**
     * Returns the number of elements in the Deque.
     * @returns {number} The number of elements.
     */
    size() {
        return this.size;
    }

    /**
     * Checks if the Deque is empty.
     * @returns {boolean} True if the Deque is empty, false otherwise.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Return front value of the queue.
     * @returns {*} - The item at the front of the queue, or null if the queue is empty.
     */
    front() {
        if(this.front === null) {
            return null;
        }
        return this.front.value;
    }

    /**
     * Return back value of the queue.
     * @returns {*} - The item at the last of the queue, or null if the queue is empty.
     */
    back() {
        if(this.back === null) {
            return null;
        }
        return this.back.value;
    }
}
