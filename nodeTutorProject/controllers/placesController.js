const { validationResult } = require('express-validator');
let users = [];

const placeById = (req, res, next) => {
    const varname = array.find(p => {
        return p.id === req.params.id
    })

    //error handling
    if(!varname){
        const error =  new Error("Could not find document for given ID");
        error.code = 404
        return next(error); //next does not cancel function execution,throw does, so when using next use return statement
    }
    //json method wraps/encodes any kind of response in to json body
    res.json({varname})
}

//handle error validation in controller function

const userByName =  (req, res, next) => {
    const varname = array.find(p => {
        return p.userName === req.body.userName
    })
    const errors = validationResult(req);

    if(!errors.isEmpty){
        console.log(errors)
        const errorsu = new Error('Invalid inputs passed! check incoming data!')
        errorsu.code = 422;
        return next(errorsu)
    }

    res.json({varname})
}

const signUp = (req, res, next) => {
    const {emailId, password, userName} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors)
        const error = new Error('Invalid inputs passed! check incoming data!')
        error.code = 422;
        return next(error)
    }else{
        users.push({
            emailId: emailId,
            password: password,
            userName: userName
        });
    
        res.status(200).json({message: "user created"})
    }
}

const login = (req, res, next) => {
    const{emailId, password} = req.body;

    const result =  users.find(u => u.password === password)
    console.log(result)
    if(result.length === 0){
        const notFoundError = new Error('password incorrect')
        notFoundError.code = 404
        return next(notFoundError)
    }
    const errors = validationResult(req);
    if(!errors.isEmpty){
        console.log(errors)
        const errorsu = new Error('Invalid inputs passed! check incoming data!')
        errorsu.code = 422;
        return next(errorsu)
    }
    res.status(200).json({meesage: "Successfully logged in"})
}

exports.placeById = placeById;
exports.userByName = userByName;
exports.signUp = signUp;
exports.login = login;