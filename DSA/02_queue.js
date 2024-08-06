class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        if(this.isEmpty){
            return "queue is empty"
        }
        this.queue.shift()
    }

    isEmpty(){
        return this.queue.length===0
    }

    peek(){
        if(this.isEmpty){
            return "queue is empty"
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){
        this.queue=[]
    }

    printQueue(){
        let str =""
        for(let i=0;i<this.queue.length;i++){
            str  += this.queue[i];
           
        }
        return str
    }

}
let myQueue = new Queue()
myQueue.enqueue(20)
myQueue.enqueue(10)
myQueue.enqueue(60)
myQueue.enqueue(90)
myQueue.enqueue(23)
myQueue.enqueue(2)
myQueue.dequeue(80)

console.log(myQueue.printQueue())