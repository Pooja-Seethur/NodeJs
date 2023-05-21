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

exports.placeById = placeById;