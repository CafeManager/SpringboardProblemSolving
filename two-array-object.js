// add whatever parameters you deem necessary
function twoArrayObject(keyArray, valueArray) {
    let newObj = {}
    for(let i in keyArray){
        if(valueArray[i]){
        newObj[keyArray[i]] = valueArray[i]
    } else {
            newObj[keyArray[i]] = null
        }
    }
    return newObj
}


module.exports = twoArrayObject