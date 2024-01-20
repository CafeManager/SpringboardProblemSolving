// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Freq = frequencyCounter(num1)
    let num2Freq = frequencyCounter(num2)

    for(let k of Object.keys(num1Freq)){
        if(num1Freq[k] == num2Freq[k]){
            delete num1Freq[k]
            delete num2Freq[k]
        } else {
            return false
        }
    }

    if(Object.keys(num1Freq) > 0 || Object.keys(num2Freq) > 0) {
        return false
    } else {
        return true
    }
}

function frequencyCounter(numToCount){
    let frequencyCount = {}
    let numAsString = String(numToCount)
    for(let s of numAsString){
        if(frequencyCount[s]){
            frequencyCount[s]+=1
        } else {
            frequencyCount[s] = 1
        }
    }
    return frequencyCount
}

module.exports = sameFrequency