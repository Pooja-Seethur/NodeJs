const { validationResult } = require('express-validator');
const mongoose = require('mongoose')
const places = require('../models/placeSchema');
let users = [];
const mongoUrl = "mongodb+srv://developer:6omO0EHyOc42U1Ow@apigateway0.lg5at1o.mongodb.net/tutorialDb?retryWrites=true&w=majority"

mongoose.connect(mongoUrl)

const placeById = (req, res, next) => {

    const errors= validationResult(req)
    console.log(errors)
    if(!errors.isEmpty){
        const Valerror = new Error('Validation Error');
        Valerror.code = 422
        return next(Valerror)
    }
    
    places.findById({ _id: req.body.placeId })
        .then((result) => {
            console.log(result)
            res.json(result)
        })
        .catch((error) => {
            res.send("An unknown error occured")
        })

    //second implementation
}



//json method wraps/encodes any kind of response in to json body

//handle error validation in controller function

const userByName = (req, res, next) => {
    const varname = array.find(p => {
        return p.userName === req.body.userName
    })
    const errors = validationResult(req);

    if (!errors.isEmpty) {
        console.log(errors)
        const errorsu = new Error('Invalid inputs passed! check incoming data!')
        errorsu.code = 422;
        return next(errorsu)
    }

    res.json({ varname })
}

const signUp = (req, res, next) => {
    const { emailId, password, userName } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors)
        const error = new Error('Invalid inputs passed! check incoming data!')
        error.code = 422;
        return next(error)
    } else {
        users.push({
            emailId: emailId,
            password: password,
            userName: userName
        });

        res.status(200).json({ message: "user created" })
    }
}

const login = (req, res, next) => {
    const { emailId, password } = req.body;

    const result = users.find(u => u.password === password)
    console.log(result)
    if (result.length === 0) {
        const notFoundError = new Error('password incorrect')
        notFoundError.code = 404
        return next(notFoundError)
    }
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        console.log(errors)
        const errorsu = new Error('Invalid inputs passed! check incoming data!')
        errorsu.code = 422;
        return next(errorsu)
    }
    res.status(200).json({ meesage: "Successfully logged in" })
}

const insertPlaceData = async (req, res, next) => {
    const { title, description, address, creator, coordinates } = req.body;
    const newPlace = new places({
        title,
        description,
        address,
        location: coordinates,
        image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/01/minecraft-attack-on-titan-map-550x309.jpg",
        creator
    })

    try {
        await newPlace.save()
        //console.log(result)
        res.status(200).json({ createdData: newPlace })
    }
    catch (error) {
        console.log(error)
        res.status(200).json({ message: 'error in handling data' })
    }
}

exports.placeById = placeById;
exports.userByName = userByName;
exports.signUp = signUp;
exports.login = login;
exports.insertPlaceData = insertPlaceData;