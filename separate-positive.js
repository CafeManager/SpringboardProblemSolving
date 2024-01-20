// add whatever parameters you deem necessary
function separatePositive(arr) {
  let leftIdx = 0;

  if (arr[leftIdx] > 0) {
    leftIdx += 1;
    while (leftIdx != arr.length && arr[leftIdx + 1] > 0) {
      leftIdx += 1;
    }
  }
  if (leftIdx == arr.length) {
    return arr;
  }
  
  let rightIdx = leftIdx + 1;
  while (rightIdx != arr.length) {
    if (arr[rightIdx] > 0) {
      let temp = arr[rightIdx];
      arr[rightIdx] = arr[leftIdx];
      arr[leftIdx] = temp;
      leftIdx += 1;
    }
    rightIdx += 1;
  }
  return arr;
}


module.exports = separatePositive;
