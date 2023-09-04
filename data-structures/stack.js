/**
 * Represents a stack data structure.
 */
export class Stack {
    // The stack is implemented as an array.
    stack = new Array();

    /**
     * Creates a new stack and optionally initializes it with items.
     * @param {Array} items - An optional array of items to initialize the stack with.
     */
    constructor(items) {
        items?.forEach((item) => {
            // Add each item from the provided array to the stack during initialization.
            this.stack.push(item);
        });
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item - The item to be added to the stack.
     */
    push(item) {
        this.stack.push(item);
    }

    /**
     * Removes and returns the item at the top of the stack.
     */
    pop() {
        this.stack.pop();
    }

    /**
     * Retrieves the item at the top of the stack without removing it.
     * @returns {*} The item at the top of the stack.
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Returns the number of items in the stack.
     * @returns {number} The number of items in the stack.
     */
    size() {
        return this.stack.length;
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, otherwise false.
     */
    isEmpty() {
        return this.stack.length === 0;
    }

}