class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class Queue {
    
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    
    enqueue(item) {
        
        const node = new Node(item);
        if(this.front === null) {
            this.front = node;
            this.tail = this.front;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++;
    }
    
    dequeue() {
        if(!this.front)
            return null;
            
        const temp = this.front;
        
        if(this.front === this.last) {
            this.front = this.last = null;
        }
        else {
            this.front = this.front.next;
        }
				this.size--;
        return temp.value;
    }
}