// add whatever parameters you deem necessary
function isSubsequence(substr, str) {
    let index = 0
    
    for(let char of str){
        if(index == substr.length){
            return true
        }
        if(char == substr[index]){
            index+=1
        } 
    }
    if(index == substr.length){
        return true
    }
    return false
}

module.exports = isSubsequence