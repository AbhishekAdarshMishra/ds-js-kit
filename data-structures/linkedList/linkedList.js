/**
 * Represents a single node in a linked list.
 */
class Node {
    constructor(value) {
        this.value = value; // The value stored in this node.
        this.next = null;  // Reference to the next node in the list.
    }
}

/**
 * Represents a singly linked list data structure.
 */
class LinkedList {
    
    constructor(){
        this.head = null; // The first node in the list.
        this.size = 0;    // The number of nodes in the list.
    }
    
    /**
     * Inserts a new item at the end of the linked list.
     * @param {*} item - The item to be inserted.
     */
    insert(item) {
        const node = new Node(item); // Create a new node with the given item.
        if (this.head == null) {
            this.head = node; // If the list is empty, set the new node as the head.
        } else {
            let current = this.head;
            while (current?.next) {
                current = current.next; // Traverse the list until the last node is reached.
            }
            current.next = node; // Set the next of the last node to the new node.
        }
        this.size++; // Increment the size of the list.
    }
    
    /**
     * Displays the value of the head node in the linked list.
     */
    display() {
        if (this.head !== null) {
            console.log(this.head.value); // Log the value of the head node to the console.
        } else {
            console.log("The linked list is empty.");
        }
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
