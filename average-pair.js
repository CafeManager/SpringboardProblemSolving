// add whatever parameters you deem necessary
function averagePair(arr, target) {
    if(arr.length == 0){
        return false
    }
    let leftIdx = 0
    let rightIdx = arr.length-1

    while(leftIdx != rightIdx){
        let val = (arr[leftIdx] + arr[rightIdx])/2

        if(val > target){
            rightIdx -= 1
        } else if ( val < target) {
            leftIdx += 1
        } else {
            return true
        }
    }
    return false
}

module.exports = averagePair
