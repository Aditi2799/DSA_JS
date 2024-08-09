class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
        this.prev=prev
    }
}

class DoublyLinkedList{
constructor(){
    this.head=null
    this.tail=null
}
}

LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data,head,null)
    if(!this.head)
    {
        this.head.prev=newNode
       
    }
    this.head=newNode
    if(this.tail===null){
        this.tail=newNode
    }
}

LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data,tail,null)
    if(!this.tail)
        {
            this.tail.next=newNode
            
        }
        this.tail=newNode
        if(this.head===null){
            this.head=newNode
        }
}

//insert in between
LinkedList.prototype.insertInBetween = function(prevNode,data){
    if(prevNode==null){
        console.log("Invalid prev node")
        return
    }
    const newNode = new Node(data,prevNode.next,null)

if (prevNode.next!==null)
{
    prevNode.next.prev=newNode
}
prevNode.next=newNode

if(newNode.next==null){
    this.taiL=newNode
}
}

//delete first node
LinkedList.prototype.deleteFirstNode = function(){
if(!this.head){
    return//nothing to delete
}
if(!this.head===tail){
    this.head=null
this.taiL=null
}
else{
    this.head.next=this.head
    this.head.prev=null
}
}

//delete last node
LinkedList.prototype.deleteLastNode = function(){

    if(!this.tail){
        return//nothing to delete
    }
    if(this.head===this.tail){
        this.head=null
        this.taiL=null
    }
    else{
        this.tail=this.tail.prev
        this.tail.next=null
    }

}

//Reverse DLL
LinkedList.prototype.deleteLastNode = function(){
    let current=this.head
    let temp=null
    while(current!=null){
temp=current.prev
current.prev=current.next
current.next=temp
//move to next node
current=current.prev
    }

    if(temp!=null){
        this.tail=this.head
        this.head=temp.prev
    }
}
