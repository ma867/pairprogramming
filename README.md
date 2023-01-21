# Table Of Contents
## Challenges
- [Challenge One](#challenge-one)
- [Challenge Two](#challenge-two)
- [Challenge Three](#challenge-three)
- [Challenge Four](#challenge-four)
- [Challenge Five](#challenge-five)

## Extensions
- [Extension One](#extension-one)
- [Extension Two](#extension-two)
- [Extension Three](#extension-three)
- [Extension Four](#extension-four)
- [Extension Five](#extension-five)
- [Extension Six](#extension-six)
- [Extension Seven](#extension-seven)
- [Extension Eight](#extension-eight)
- [Extension Nine](#extension-nine)

# Challenge One
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'challengeOne.js'

## Description:
This challenge takes one argument in the form of a number and adds the number "2" to it. The goal was to keep it short and simple, thus we return the parameter with "2" added to it.

```
const addTwo = (num) => {
  return num + 2
}
```

[Back To Top](#table-of-contents)

# Challenge Two
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'challengeTwo.js'

## Description:
This challenge takes an argument and adds the string 's' to it, thus we return just that.

```
const addS = (str) => {
  return str + 's'
}
```

[Back To Top](#table-of-contents)

# Challenge Three
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'challengeThree.js'

## Description:
With this problem we are running a basic for loop to run through the arr that is the user's input. As we run through that array in the for loop we are applying the call back function to each of the elements in the array and pushing that reasult into a new array. We then return the new array.

```
const map = (arr, callBack) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i]))
  }
  return newArr
}
```

[Back To Top](#table-of-contents)

# Challenge Four
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'challengeFour.js'

## Description:
To simulate "forEach" we just write a function that will apply the call back function to every element in the array using a for loop.

```
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
```

[Back To Top](#table-of-contents)

# Extension One
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 3&nbsp;</mark>

## Description:
For this function we rewrote the map function utilizing the forEach function we wrote previously.

```
const mapWith = (arr, callback) => {
  const newArr = []
  forEach(arr, (i) => {
    newArr.push(callback(i))
  })
  return newArr
}
```

[Back To Top](#table-of-contents)

# Extension Two
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 19&nbsp;</mark>

## Description:
We are utilizing the initial value to create a counter and then navigating through the arr to add to the counter and then return the counter.

```
const reduce = (arr, initialValue, callback) => {
  let counter = initialValue
  forEach(arr, (i) => {
    counter += callback(i)
  })
  return counter
}
```

[Back To Top](#table-of-contents)

# Extension Three
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>line: 34</mark>

## Description:
The goal is to pull out the first array in the array of arrays. Thats what we use to compare if a number appears in all the other arrays. We run a forEach over that first array and we check if the other arrays include that number, if they do we increment the counter. If the counter hits the number of arrays that are left we push that number to our result.

```
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
```

[Back To Top](#table-of-contents)

# Extension Four
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 58&nbsp;</mark>

## Description:
For this challenge we need to join the elements in any given amount of arrays while ensuring that there aren’t any duplicates. We use the spread operator in our argument declaration since we don’t know how many arrays the user will pass. Using the custom forEach function, we use the spread operator to push all the elements inside each array into a new array. Then, using the Set class, we are able to delete any duplicates. Finally, we cast the set into an array and return it.

```
const union = (...arr) => {
  const newArr = []
  forEach(arr, (i) => {
    newArr.push(...i)
  })

  return Array.from(new Set(newArr))
}
```

**Optimized Solution:**
```
const unionOptimized = (...arr) => {
  return Array.from(new Set(arr.flat()))
}
```

[Back To Top](#table-of-contents)

# Extension Five
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 70&nbsp;</mark>

## Description:
For this challenge, we are trying to see if the converted output from an element inside of first array matches the value of the same index in the second array. To start off we create an empty object that will return our final output. Using our custom forEach function, we iterate through the second array's elements. We convert each element using the callback function and compare it to the original value. If it maches, we add it to the object.


```
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
```

[Back To Top](#table-of-contents)

# Extension Six
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 93&nbsp;</mark>

## Description:
For this challenge we have to array and essentially we need to apply the callback functions in the second array to the elements in the first array. However it is not that simple becuase we want the results of all those functions to be stored into and array and then assigning that array to the value of the first array as a key + value pair. To do this we creae an empty array and run those callback functions on the value from the first index of the first array. They get pushed into the empty array and then the array gets assigned to that value as a key + value pair before moving on to the second value in that first array.

```
const multiMap = (arr1, arr2) => {
  const newObj = {}
  const callbackValue = map(arr1, (string) => {
    const newArr = []
    forEach(arr2, (i) => {
      newArr.push(i(string))
    })
    newObj[string] = newArr
  })

  return newObj
}
```

[Back To Top](#table-of-contents)

# Extension Seven
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'extensions.js'&nbsp; <mark>&nbsp;line: 124&nbsp;</mark>

## Description:
So we need to run the provided callback function on the key in the object first, we store that in its own variable in our loop through the object. In an if statement we compare that agains the value from the first key. If they match they need to be put into our new obj to return as the result.

```
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
```

[Back To Top](#table-of-contents)

# Challenge Five
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC Files:** 'controllers/apiController.js', 'controllers/blogRootController.js', 'controllers/dataController.js', 'server.js', 'models/blog.js'

## Description:
The 'server.js' is set up and the bulk of the code comes from the 'dataController.js'. We need to require and use the blog data that is stored into the models folder. The functions then need to get and add to that data. 

## dataController.js
```
const Blog = require('../models/blog')
const forEach = require('../challengeFour')

const dataController = {
  index (req, res, next) {
    res.locals.data.blogs = Blog
    next()
  },
  show (req, res, next) {
    forEach(Blog, (i) => {
      if(req.params.id == i.id){
        res.locals.data.blog = i
      }
    })
    next()
  },
  create (req, res, next) {
    Blog.push(req.body)
    const createdBlog = Blog[Blog.length - 1]
    res.locals.data.blog = createdBlog
    next()
  }
}

module.exports = dataController
```

## blogRootController.js
```
const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const apiController = require('./apiController')

router.get('/', dataController.index, apiController.index)
router.post('/', dataController.create, apiController.show)
router.get('/:id', dataController.show, apiController.show)

module.exports = router
```

## apiController.js
```
const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.blogs)
  },
  show (req, res, next) {
    res.json(res.locals.data.blog)
  }
}

module.exports = apiController
```

## server.js
```
require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.static(__dirname + '/public'))

app.use('/api/blogs', require('./controllers/blogRootController'))

app.listen(PORT, () => {
  console.log('i am listening on port 3008')
})
```

[Back To Top](#table-of-contents)

# Extension Eight
**Navigator:** *Tony* <br />
**Driver:** *Melissa* <br />
**SRC File:** 'dataController.js'&nbsp; <mark>&nbsp;line: 10&nbsp;</mark>

## Description:
For this we were only using one function in our server that we could replace with one that we wrote. So we imported our forEach into the file and used it instead of the for loop we had originally.

```
const forEach = require('../challengeFour')
```

```
show (req, res, next) {
    forEach(Blog, (i) => {
      if(req.params.id == i.id){
        res.locals.data.blog = i
      }
    })
    next()
  }
```

[Back To Top](#table-of-contents)

# Extension Nine
**Navigator:** *Melissa* <br />
**Driver:** *Tony* <br />
**SRC File:** 'index.html'&nbsp; 

## Description:
[Live Link](https://peer-programming.herokuapp.com/)

App has been deployed with a table describing the end points.

[Back To Top](#table-of-contents)
