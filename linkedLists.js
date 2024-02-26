class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }
//  adds a new node containing value to the start of the list
  prepend(data) {        
        this.head = new Node(data, this.head)
        this.size ++
}
//   adds a new node containing value to the end of the list
  append(data) {
        let node = new Node(data)
        let current
// If empty, make head  
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node          
        }
        this.size ++
}
//  inserts a new node with the provided value at the given index
  insertAt(data, index) {

//  if index is out of range
        if(index > 0 && index > this.size) {
            return
        }
// If first index
        if(index === 0) {
            this.head =new Node(data, this.head)
            return
        }
        const node = new Node(data)
        let current = this.head
        let previous
        let count = 0
        while(count < index) {
            previous = current // Node before index
            count++
            current = current.next // Node after index

        }
        node.next = current;
        previous.next = node;
        this.size ++;
}
  At(index) {
    let current = this.head
    let count = 0
    while(current) {
        if(count == index) {
            return current.data
        }
        count++
        current = current.next
    }
    return null

  }
  pop() {
    let current = this.head
    let previous
    while(current.next) {
        previous = current
        current = current.next
    }
   previous.next = null

  } 

  removeAt(index) {
    if(index > 0 && index > this.size) {
        return
    }
    let current = this.head
    let previous
    let count = 0

    if(index === 0) {
        this.head = current.next
    } else {
        while(count < index) {
            count++
            previous = current
            current = current.next

        }
        previous.next = current.next
    }
    this.size--
  }
  clearList() {
    this.head = null
    this.size = 0
  }


  get tails() {
        let current
                if(!this.head) {
                    return
                } else {
                    current = this.head
                    while(current.next) {
                        current = current.next
                    }
                    return current        
                }
}
  get heads() {
        return this.head
}
  get sizee() {
        return this.size
}
find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
        if (current.data === value) {
            return index;
        }
        current = current.next;
        index++;
    }
    return null; // Value not found
}
contains(value) {
    let current = this.head;
    while (current !== null) {
        if (current.data === value) {
            return true;
        }
        current = current.next;
    }
    return false;
}
  toString() {
    let output = ''
    let current = this.head
    while(current) {
        output = `${output}${current.data} -> `
        current = current.next
    }
    console.log(`${output}null`)
  }

// Print Nodes    
    printList() {
        let current = this.head
        while(current) {
            console.log(current)
            current = current.next
        }
    }

}

const ll = new LinkedList()
ll.prepend(120)
ll.prepend(180)
ll.prepend(240)
ll.append(300)
ll.append(300)
ll.insertAt(560, 5)
ll.prepend(0)


ll.toString()








