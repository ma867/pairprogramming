const map = (arr, callBack) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i]))
  }
  return newArr
}

console.log(map([1, 2, 3, 4, 5], (i) => {
  return i + 2
}))

// map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
// multiplyByTwo(1); //-> 2
// multiplyByTwo(2); //-> 4
