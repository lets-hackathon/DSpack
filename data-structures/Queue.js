const Queue = () => {
  let _items = [];
  return {
   
    enqueue(element) {
      _items.push(element);
    },

   
    dequeue() {
      
      if (this.isEmpty()) {
        return "Underflow";
      }
      return _items.shift();
    },

   
    front() {
     
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return _items[0];
    },

    
    isEmpty() {
      return _items.length == 0;
    },
    
    printQueue() {
      var str = "";
      for (var i = 0; i < _items.length; i++) str += _items[i] + " ";
      return str;
    }
  };
};
module.exports = Queue;
