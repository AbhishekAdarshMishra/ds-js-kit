/**
 * A PriorityQueue class that can be used to implement both Max Heap and Min Heap.
 */
export class PriorityQueue {
    /**
     * Initializes a new PriorityQueue.
     * @param {string} type - The type of heap, either "maxHeap" or "minHeap" (default is "maxHeap").
     */
    constructor(type = "maxHeap") {
        this.heap = []; // An array to store the heap elements.
        this.type = type; // Indicates whether it's a maxHeap or minHeap.
    }
    
    /**
     * Returns the index of the left child of a given index.
     * @param {number} index - The index of the parent node.
     * @returns {number} - The index of the left child node.
     */
    getLeftChildIndex(index) {
        return (2 * index) + 1;
    }
    
    /**
     * Returns the index of the right child of a given index.
     * @param {number} index - The index of the parent node.
     * @returns {number} - The index of the right child node.
     */
    getRightChildIndex(index) {
        return (2 * index) + 2;
    }
    
    /**
     * Returns the index of the parent node of a given index.
     * @param {number} index - The index of the child node.
     * @returns {number} - The index of the parent node.
     */
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    
    /**
     * Checks if a node has a left child.
     * @param {number} index - The index of the node to check.
     * @returns {boolean} - True if a left child exists, false otherwise.
     */
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    
    /**
     * Checks if a node has a right child.
     * @param {number} index - The index of the node to check.
     * @returns {boolean} - True if a right child exists, false otherwise.
     */
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    
    /**
     * Checks if a node has a parent.
     * @param {number} index - The index of the node to check.
     * @returns {boolean} - True if a parent exists, false otherwise.
     */
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    
    /**
     * Returns the value of the left child of a given node.
     * @param {number} index - The index of the parent node.
     * @returns {*} - The value of the left child node.
     */
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    
    /**
     * Returns the value of the right child of a given node.
     * @param {number} index - The index of the parent node.
     * @returns {*} - The value of the right child node.
     */
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    
    /**
     * Returns the value of the parent node of a given node.
     * @param {number} index - The index of the child node.
     * @returns {*} - The value of the parent node.
     */
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
    
    /**
     * Swaps two elements in the heap by their indices.
     * @param {number} index1 - The index of the first element to swap.
     * @param {number} index2 - The index of the second element to swap.
     */
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    /**
     * Returns the root element of the heap without removing it.
     * @returns {*} - The root element.
     */
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }
    
    /**
     * Removes and returns the root element of the heap.
     * @returns {*} - The removed root element.
     */
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        // Remove the root.
        const item = this.heap[0];
        // Replace the root with the last element and remove the last element.
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        if (this.type === "maxHeap")
            this.heapifyDownMaxHeap();
        else
            this.heapifyDownMinHeap();
        return item;
    }
    
    /**
     * Inserts an element into the heap.
     * @param {*} item - The element to insert.
     */
    insert(item) {
        this.heap.push(item);
        if (this.type === "maxHeap")
            this.heapifyUpMaxHeap();
        else
            this.heapifyUpMinHeap();
    }
    
    /**
     * Restores the max heap property by moving an element up the heap.
     */
    heapifyUpMaxHeap() {
        // Start from the last index.
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    /**
     * Restores the min heap property by moving an element up the heap.
     */
    heapifyUpMinHeap() {
        // Start from the last index.
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    /**
     * Restores the max heap property by moving an element down the heap.
     */
    heapifyDownMaxHeap() {
        // Start from the root.
        let index = 0;
        while (this.hasLeftChild(index)) {
            if (this.leftChild(index) > this.heap[index]) {
                this.swap(this.getLeftChildIndex(index), index);
                index = this.getLeftChildIndex(index);
            }
            else if (this.hasRightChild(index) && this.rightChild(index) > this.heap[index]) {
                this.swap(this.getRightChildIndex(index), index);
                index = this.getRightChildIndex(index);
            }
            else {
                break;
            }
        }
    }
    
    /**
     * Restores the min heap property by moving an element down the heap.
     */
    heapifyDownMinHeap() {
        // Start from the root.
        let index = 0;
        while (this.hasLeftChild(index)) {
            if (this.leftChild(index) < this.heap[index]) {
                this.swap(this.getLeftChildIndex(index), index);
                index = this.getLeftChildIndex(index);
            }
            else if (this.hasRightChild(index) && this.rightChild(index) < this.heap[index]) {
                this.swap(this.getRightChildIndex(index), index);
                index = this.getRightChildIndex(index);
            }
            else {
                break;
            }
        }
    }

    /**
     * Returns the number of elements in the PriorityQueue.
     * @returns {number} - The number of elements.
     */
    size() {
        return this.heap.length;
    }

    /**
     * Checks if the PriorityQueue is empty.
     * @returns {boolean} - True if the PriorityQueue is empty, false otherwise.
     */
    isEmpty() {
        return this.heap.length === 0;
    }
}
