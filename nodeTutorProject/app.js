/*steps
*   1. npm init
    2. install dependencies
    3. dev dependencies like nodemon
    4. use body-parser to parse the request
    5. add routes
    6. add controllers in routes so that it looks clean
    7. write own error handling middleware
    8. note: next() doesnot stop function execution unlike throw or return, so make sure to use return while using next()
    9. array.filter returns array where as array.find return only one element
    10.inorder to convert address to lat long or get coordinates for address, we can use geolocation apis of google
    https://developers.google.com/maps/documentation/geocoding/requests-geocoding

*/

/**
 * Assignment: whatever operations you use for tutorial http requests, make a file a
 * and compare db query and array operation for the same || array functions/ db queries
 */


const express = require('express')
const app = express();
const bodyParser = require('body-parser')

//body parser function parses the incoming body
//after parsing it will call the next middleware

app.use(bodyParser.urlencoded({extended: true}))        //parses body coming via url
app.use(bodyParser.json())                              //parses body of json into any kind of js objects

//include routes in main file
const placeRoute = require('./routes/places')
app.use('/placePath', placeRoute);

//unsupported routes error handling

app.use((req, res, next) => {
    const error = new Error("Incorrect path/ path doesnot exists!");
    error.code = 404;
    throw error
})
//error handler middleware      //*7 
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)      //*8
    }
    console.log(error.message+" "+error.code)
    res.status(error.code || 500).json({message:error.message || "An unknown error occured"})
})

app.listen(9876, ()=>{
    console.log(`running on port 9876`)
})