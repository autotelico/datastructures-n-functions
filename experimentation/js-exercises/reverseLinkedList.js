class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    insertFirst(data) {
        let temp = this.head;
        this.head = data;
        data.next = temp;
    }
    insertLast(data) {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next
        }
        temp.next = data;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        return temp;
    }
    removeKthNode(k) {
        if (typeof k !== "number") throw new Error('Input must be a number');
        let temp = this.head;
        let prev;
        let counter = 0;
        while (temp.next) {
            if (counter === k) {
                prev.next = temp.next
                return 'Done'
            }
            prev = temp;
            temp = temp.next;
            counter++;
        }
    }
}


const myLinkedList = new LinkedList(new Node('first'));
myLinkedList.insertFirst(new Node('zeroth'))
myLinkedList.insertLast(new Node('second'))
myLinkedList.insertLast(new Node('third'))
myLinkedList.insertLast(new Node('last!!'))
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
myLinkedList.removeKthNode(3)
console.log(myLinkedList);
