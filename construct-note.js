// add whatever parameters you deem necessary
function constructNote(message, note) {
    const messageFrequency = frequencyCounter(message)
    const noteFrequency = frequencyCounter(note)
    for( let c of Object.keys(messageFrequency)){

        if( !noteFrequency[c] || noteFrequency[c] < messageFrequency[c]){
            return false
        }
    }
    return true
}
 
function frequencyCounter(stringToCount){
    let frequencyCount = {}
    for(let s of stringToCount){
        if(frequencyCount[s]){
            frequencyCount[s]+=1
        } else {
            frequencyCount[s] = 1
        }
    }
    return frequencyCount
}

module.exports = constructNote