const forEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    } 
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

forEach(letters, function(char) {
  alphabet += char;
});

console.log(alphabet)


//=============EXTENSIONS============/


//===========EXTENSION 1=================

const mapWith = (arr, callback) =>{
  const newArr = []
  forEach(arr, (i)=>{
    newArr.push(callback(i))
  })
  return newArr
}

console.log(mapWith([1,2,3],(i)=>{return i+2}))

//===========EXTENSION 2=================

const reduce = (arr, initialValue, callback) => {
  let counter = initialValue
  forEach(arr, (i) => {
    counter += callback(i)
  })
  return counter
}

console.log(reduce([1,2,3], 0, (i) => {return i + 2}))

//===========EXTENSION 3=================
const intersection=(...arr)=>{
  const newArr = arr.shift()
  const result = []

  newArr.forEach(number => {
    let counter = 0
    arr.forEach(eleArr => {
      if (eleArr.includes(number)) {
        counter++
      }
    })
    if (counter === arr.length) {
      result.push(number)
    }
  })
  
  return result
}

console.log(intersection([5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]))