var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(arr, newVal){
  return arr.push(newVal)
}

function addElementToBeginningOfArray(arr, newVal){
    arr.unshift(newVal);
  
    return arr
}
