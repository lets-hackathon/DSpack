const ds=require('../index');
const {LinkedList}=ds;
//for linked list testing
console.log("test for ll");
var objll=new LinkedList();
objll.add(4)
objll.add(3);
objll.printList();
objll.insertAt(12,1);
objll.printList();
objll.removeFrom(1);
objll.printList();
objll.removeElement(4);
objll.printList();
objll.size_of_list();
console.log("test successful");