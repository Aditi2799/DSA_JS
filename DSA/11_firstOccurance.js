//arr=[3,4,7,9,1]
// findMe=1
// currIndex=0
// ->Output=>2
// if not found=-1

//iteration
function firstOccurance(arr, findMe, currIndex){
    while(currIndex<arr.length){
        if(arr[currIndex]==findMe){
            return currIndex
        }
        currIndex+=1
    }
    return -1
}

//recursion
function recursiveFirstOccurance(arr, findMe, currIndex){

    if(arr.length===currIndex){
        return  -1
    }

if(arr[currIndex]==findMe){
    return currIndex
}

    return recursiveFirstOccurance(arr , findMe, currIndex+1) 
}