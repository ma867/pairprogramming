# Challenge One
Navigator: Melissa <br />
Driver: Tony <br />
SRC File: 'challengeOne.js'

## Description:
This challenge takes one argument in the form of a number and adds the number "2" to it. The goal was to keep it short and simple, thus we return the parameter with "2" added to it.

```
const addTwo = (num) => {
    return num + 2
}
```

# Challenge Two
Navigator: Tony <br />
Driver: Melissa <br />
SRC File: 'challengeTwo.js'

## Description:
This challenge takes an argument and adds the string 's' to it, thus we return just that.

```
const addS = (str) => {
    return str + 's'
}
```

# Challenge Three
Navigator: Melissa <br />
Driver: Tony <br />
SRC File: 'challengeThree.js'

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

# Challenge Four
Navigator: Tony <br />
Driver: Melissa <br />
SRC File: 'challengeFour.js'

## Description:
To simulate "forEach" we just write a function that will apply the call back function to every element in the array using a for loop.

```
const forEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    } 
}
```

# Challenge Five
Navigator: Melissa <br />
Driver: Tony <br />
SRC Files: 'controllers/apiController.js', 'controllers/blogRootController.js', 'controllers/dataController.js', 'server.js', 'models/blog.js'

## Description:
The 'server.js' is set up and the bulk of the code comes from the 'dataController.js'. We need to require and use the blog data that is stored into the models folder. The functions then need to get and add to that data. 

## dataController.js
```
const Blog = require('../models/blog')

const dataController = {
    index(req, res, next) {
        res.locals.data.blogs = Blog
        next()
    },
    show(req, res, next) {
        for (let i = 0; i < Blog.length; i++) {
            if (req.params.id == Blog[i].id) {
                res.locals.data.blog = Blog[i]
            }
        }
        next()
    },
    create(req, res, next) {
        Blog.push(req.body)
        const createdBlog = Blog[Blog.length-1]
        res.locals.data.blog = createdBlog
        next()
    }
}

module.exports = dataController
```

## blogRootController.js
```
const express = require('express');
const router = express.Router();
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
    index(req, res, next) {
        res.json(res.locals.data.blogs)
    },
    show(req, res, next) {
        res.json(res.locals.data.blog)
    }
}

module.exports = apiController
```

## server.js
```
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.locals.data = {}
    next()
});

app.use(express.static(__dirname + '/public'));

app.use('/api/blogs', require('./controllers/blogRootController'))

app.listen(PORT, () => {
    console.log('i am listening on port 3008')
});
```
