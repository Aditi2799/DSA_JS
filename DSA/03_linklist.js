class Node{
    constructor(data,next){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }
}

LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data)
    this.head=newNode
}

LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head=newNode;
        return
    }
    let last = this.head
    last.next==null

    while(last.next){
    last=last.next
}
last.next=newNode
}


LinkedList.prototype.insertAfter = function(data){
   
if(!prevNode){
    console.log("prev node can't be null")
    return
}
const newNode = new Node(data,prevNode.next)
prevNode.next=newNode

}

//delete first node

LinkedList.prototype.deleteFirstNode = function(data){
    if(!this.head){
        return
    }
    this.head=this.head.next
}

//delete last node(second last node)
LinkedList.prototype.deleteLastNode = function(data){
if(!this.head){
    return "nothing to delte"
}
if (!this.head.next){
this.head=null
return
}
let secondlast=head
while(secondlast.next.next){
    secondlast=secondlast.next
}
}


//delete between node(last node)
LinkedList.prototype.deleteByKey = function(key){
   //if list is empty
    if(!this.head){
        return "nothing to delte"
    }
   //data found at head
    if(this.head.data===key){
        this.head= this.head.next
        return
    }

    let current=this.head
    while(current.next!==null)
    {
       if(current.next.data===key)
       {
        current.next= current.next.next
        return
       }
       current=current.next
    }

    console.log("no node found")
}

//search operation
LinkedList.prototype.search = function(key){
let current=this.head
while(current)
{
    if(current.data===key){
        return true
    }
    current=current.next
}
console.log("No data found")
}

//traversal
LinkedList.prototype.printList = function(key){
let current=this.head
let listValues=[]
while(current){
    listValues.push(current.data)
    current=current.next
}
console.log(listValues.join("->"))
}


//reverse linked list
LinkedList.prototype.reverseLinkedList = function(key){
let current=this.head
let prev=null
let next=null

while(current)
{
next=current.next
current.next=prev
prev=current
current=next


}
this.head=prev.data

}

