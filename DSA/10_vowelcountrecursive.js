//count vowels in a string=>a,e,i,o,u

function isVowel(character){
    let lowerChar=character.toLowerCase()
    let vowels = "aeiou"
    if(vowels.indexOf(lowerChar)!=-1){
        return true
    }else{
        return false
    }
}

function countVowels(string){
    let count=0

    for(let i=0; i<string.length;i++){
        if(isVowel(string[i])){
            count+=1
        }
    }
    return count
}
//console.log(countVowels("Aditi"))

function recursiveCountVowels(string, stringLength) {
    if (stringLength === 1) {
        return Number(isVowel(string[0]));
    }
    return recursiveCountVowels(string, stringLength - 1) + Number(isVowel(string[stringLength - 1]));
}

let myString = "Aditi";
console.log(recursiveCountVowels(myString, myString.length));