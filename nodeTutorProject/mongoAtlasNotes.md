MongoDB atlas notes:

cluster is mongodb server running the cloud databse
create one free cluster

Security
go to security, network access and IP access list, add current ip address, so that mongodb allows request from that machine.
database access: create new user with password read write access 

Stroing image in database is vary bad idea from performance point of view

for connecting to the database
click on connect, driver version use connection string only, and copy the connection string

mongoose allows to create more structred data by defining the schemas.
collection names will always be starting from small letters and ends with plural.

mongoose connect function
const mongoose =  require('mongoose')
const mongoUrl = ''
module.exports = connect() => {
    mongoose.connect(mongoUrl, () => {
        console.log()
    })
}

in main file, 
const db = require(path for db)
db.connect()