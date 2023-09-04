export class Stack {
    stack = new Array();
    
    constructor(items) {
        items?.forEach((item) => {
            this.stack.push(item);
        })
    }
    
    push(item) {
        this.stack.push(item);
    }
    
    pop() {
        this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    display() {
        return this.stack;
    }
}