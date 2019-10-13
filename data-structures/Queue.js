
// Queue class 
const Queue=()=>
{ 
	// Array is used to implement a Queue 
	
		_items = []; 
	
				
    // Functions to be implemented 
    return{
         // enqueue(item)
    // enqueue function 
enqueue(element) 
{	 
	// adding element to the queue 
	_items.push(element); 
} ,
 
    // dequeue() 
    // dequeue function 
dequeue() 
{ 
	// removing element from the queue 
	// returns underflow when called 
	// on empty queue 
	if(this.isEmpty()) 
		return "Underflow"; 
	return _items.shift(); 
} ,

    // front() 
    // front function 
front() 
{ 
	// returns the Front element of 
	// the queue without removing it. 
	if(this.isEmpty()) 
		return "No elements in Queue"; 
	return _items[0]; 
} ,

    // isEmpty() 
    // isEmpty function 
isEmpty() 
{ 
	// return true if the queue is empty. 
	return _items.length == 0; 
} ,
    // printQueue() 
    // printQueue function 
printQueue() 
{ 
	var str = ""; 
	for(var i = 0; i < _items.length; i++) 
		str += _items[i] +" "; 
	return str; 
} 

    }
   

}; 
module.exports=Queue;