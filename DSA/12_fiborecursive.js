// 0,1
// 0,1,1
// 0,1,1,2
// 0,1,1,2,3
// 0,1,1,2,3,5
// 0,1,1,2,3,5,8
//fn = fn-2 + fn-1

//iterative
function fibonacci(value){
    let n0=0
    let n1=1

    for(let i=0;i<value;i++){
        temp=n0+n1
        n0=n1
        n1=temp
    }
    return n0
}

//console.log(fibonacci(0),fibonacci(1),fibonacci(2),fibonacci(3),fibonacci(4))



//recursive
function fibonacciRecursive(value){

    if(value<=1){
return value
    }

    return (fibonacciRecursive(value-1) + fibonacciRecursive(value-2))
}