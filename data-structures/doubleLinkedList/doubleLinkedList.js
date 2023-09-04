/**
 * Represents a Node in a doubly linked list.
 */
class Node {
    /**
     * Creates a new Node with the specified value.
     * @param {*} value - The value to store in the Node.
     */
    constructor(value) {
        this.value = value; // The data stored in this Node.
        this.next = null;  // Reference to the next Node in the list.
        this.prev = null;  // Reference to the previous Node in the list.
    }
}

/**
 * Represents a doubly linked list data structure.
 */
class LinkedList {
    /**
     * Creates a new empty LinkedList.
     * @constructor
     */
    constructor() {
        this.head = null; // Reference to the first Node in the list.
        this.tail = null; // Reference to the last Node in the list.
        this.size = 0;    // The number of Nodes in the list.
    }

    /**
     * Inserts a new item at the end of the LinkedList.
     * @param {*} item - The item to insert.
     */
    insert(item) {
        const node = new Node(item); // Create a new Node with the provided item.
        
        if (this.head === null) {
            // If the list is empty, set the new Node as both the head and tail.
            this.head = node;
            this.tail = this.head;
        } else {
            // If the list is not empty, update the tail's next reference and the new Node's prev reference.
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node; // Update the tail to the new Node.
        }
        
        this.size++; // Increment the size of the list.
    }

    /**
     * Displays the value of the head Node in the LinkedList.
     */
    display() {
        console.log(this.head.value); // Output the value of the head Node to the console.
    }

    /**
     * Returns the current size of the linked list.
     * @returns {number} - The number of nodes in the list.
     */
    size() {
        return this.head.length; // Return the size of the linked list.
    }

    /**
     * Checks if the linked list is empty.
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty() {
        return this.head.length === 0; // Check if the size is 0 to determine if the list is empty.
    }
}
