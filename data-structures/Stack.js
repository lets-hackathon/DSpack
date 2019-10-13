// Stack class 
const Stack =()=>{ 

	// Array is used to implement stack 
	
		let _items = [];  

    // Functions to be implemented 
    return{
           // push(item) 
    // push function 
push(element) 
{ 
	// push element into the items 
	_items.push(element); 
} ,

    // pop() 
    // pop function 
pop() 
{ 
	// return top most element in the stack 
	// and removes it from the stack 
	// Underflow if stack is empty 
	if (_items.length == 0) 
		return "Underflow"; 
	return _items.pop(); 
} ,

    // peek() 
    // peek function 
peek() 
{ 
	// return the top most element from the stack 
	// but does'nt delete it. 
	return _items[_items.length - 1]; 
} ,

    // isEmpty() 
    // isEmpty function 
isEmpty() 
{ 
	// return true if stack is empty 
	return _items.length == 0; 
} ,

    // printStack() 
    // printStack function 
printStack() 
{ 
	var str = ""; 
	for (var i = 0; i < _items.length; i++) 
		str += _items[i] + " "; 
	return str; 
} ,


    }
 
} 
module.exports=Stack;
