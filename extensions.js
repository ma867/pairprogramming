const forEach = require('./challengeFour')
const map = require('./challengeThree')

// ==========EXTENSION 1=================

const mapWith = (arr, callback) => {
  const newArr = []
  forEach(arr, (i) => {
    newArr.push(callback(i))
  })
  return newArr
}

console.log(
  mapWith([1, 2, 3], (i) => {
    return i + 2
  })
)

// ==========EXTENSION 2=================
const reduce = (arr, func, initialValue) => {
  let acc = initialValue
  forEach(arr, (i) => {
    acc = func(acc, i)
  })
  return acc
}

console.log(
  reduce([4, 1, 3], (a, b) => {
    return a + b
  }, 0)
)

// ==========EXTENSION 3=================
const intersection = (...arr) => {
  const newArr = arr.shift()
  const result = []

  forEach(newArr, (num) => {
    let counter = 0
    forEach(arr, (i) => {
      if (i.includes(num)) {
        counter++
      }
    })
    if (counter === arr.length) {
      result.push(num)
    }
  })

  return result
}

console.log(
  intersection([5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
)

// ==========EXTENSION 4=================
const union = (...arr) => {
  const newArr = []
  forEach(arr, (i) => {
    newArr.push(...i)
  })

  return Array.from(new Set(newArr))
}

// Optimized Solution
const unionOptimized = (...arr) => {
  return Array.from(new Set(arr.flat()))
}

console.log(union([5, 10, 15, 5], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]))

// ==========EXTENSION 5=================
const objOfMatches = (arr1, arr2, callback) => {
  const newObj = {}
  forEach(arr2, (i) => {
    const match = callback(i)
    if (i === match) {
      newObj[arr1[arr2.indexOf(i)]] = match
    }
  })

  return newObj
}

console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase()
    }
  )
)

// ==========EXTENSION 6=================
const multiMap = (arr1, arr2) => {
  const newObj = {}
  map(arr1, (string) => {
    const newArr = []
    forEach(arr2, (i) => {
      newArr.push(i(string))
    })
    newObj[string] = newArr
  })

  return newObj
}

console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase()
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
      },
      function (str) {
        return str + str
      }
    ]
  )
)

// ==========EXTENSION 7=================
const objectFilter = (obj, callback) => {
  const newObj = {}
  const keys = Object.keys(obj)
  forEach(keys, (i) => {
    const checkVal = callback(i)
    if (checkVal === obj[i]) {
      newObj[i] = checkVal
    }
  })

  return newObj
}

console.log(
  objectFilter({ me: 'ME', you: 'you', them: 'THEM' }, (key) =>
    key.toUpperCase()
  ))
