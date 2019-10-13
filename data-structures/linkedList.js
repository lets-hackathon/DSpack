// User defined class node
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedlist class
const LinkedList = () => {
  let _head = null;
  let _size = 0;

  // functions to be implemented
  //add(element)
  return {
    add(element) {
      var node = new Node(element);

      // to store current node
      var current;

      // if list is Empty add the
      // element and make it head
      if (_head == null) {
        _head = node;
      } else {
        current = _head;

        while (current.next) {
          current = current.next;
        }

        // add node
        current.next = node;
      }
      _size++;
    },

    // insertAt(element,index)
    insertAt(element, index) {
      if (index > 0 && index > _size) {
        return false;
      } else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;

        curr = _head;

        // add the element to the
        // first index
        if (index == 0) {
          node.next = _head;
          _head = node;
        } else {
          curr = _head;
          var it = 0;

          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }

          // adding an element
          node.next = curr;
          prev.next = node;
        }
        _size++;
      }
    },

    // removeFrom(index)
    removeFrom(index) {
      if (index > 0 && index > _size) {
        return -1;
      } else {
        var curr,
          prev,
          it = 0;
        curr = _head;
        prev = curr;

        // deleting first element
        if (index === 0) {
          _head = curr.next;
        } else {
          // iterate over the list to the
          // position to removce an element
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }

          // remove the element
          prev.next = curr.next;
        }
        _size--;

        // return the remove element
        return curr.element;
      }
    },

    removeElement(element) {
      var current = _head;
      var prev = null;

      // iterate over the list
      while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) {
          if (prev == null) {
            _head = current.next;
          } else {
            prev.next = current.next;
          }
          _size--;
          return current.element;
        }
        prev = current;
        current = current.next;
      }
      return -1;
    },

    // checks the list for empty
    isEmpty() {
      return _size == 0;
    },
    // gives the size of the list
    size_of_list() {
      console.log(_size);
    },
    // prints the list items
    printList() {
      var curr = _head;
      var str = "";
      while (curr) {
        str += curr.element + " ";
        curr = curr.next;
      }
      console.log(str);
    }
  };
};

module.exports = LinkedList;
