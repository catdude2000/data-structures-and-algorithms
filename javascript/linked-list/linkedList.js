class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    if (!current) return;
    while (current?.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // includes
  includes(value) {
    let current = this.head;
    while (current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return "NULL";
    let current = this.head;
    let returnStr = "";
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += "NULL";
    return returnStr;
  }
}





// append
// arguments: new value
// adds a new node with the given value to the end of the list
// - create a function that takes in a new value
// - make a new node with the value argument
// - traverse to the end of linke list
// - end node.next will be the new node




// insert before
// arguments: value, new value
// adds a new node with the given new value immediately before the first node that has the value specified
// -assign node to temp var
//- if heads not value start looping, if is value use insert
// -check current.next.value
// -when we find value insert the new node (temp is current.next, current.next is new node, new node.next is temp)
//- return the list



// insert after
// arguments: value, new value
// adds a new node with the given new value immediately after the first node that has the value specified










module.exports = { LinkedList, Node };
