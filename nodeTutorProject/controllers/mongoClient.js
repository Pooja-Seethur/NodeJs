const { MongoClient } = require('mongodb');
//const mongoClient = require('mongodb').MongoClient

const mongoUrl = "mongodb+srv://developer:6omO0EHyOc42U1Ow@apigateway0.lg5at1o.mongodb.net/tutorialDb?retryWrites=true&w=majority"

const createPlaces = async (req, res, next) => {
    const { name, description } = req.body;
    const place = {
        name: name,
        description: description
    }
    const client = new MongoClient(mongoUrl)
    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('places').insertOne(place)
        console.log(result)
        await client.close();
    } catch (error) {
        return res.status(500).json({ message: 'Could not send the data' })
    }
    //client.close();
    res.status(201).json({ createdData: place })

}

const getDataFromDb = async (req, res, next) => {
    const client = new MongoClient(mongoUrl);
    try {
        await client.connect()
        const db = client.db()
        const result = await db.collection('places').find().toArray()
        console.log(result)
        res.status(200).json({createdData: result})
        await client.close()    
    } catch (error) {
        return res.status(500).json({ message: 'Could not send the data' })
    }
    
    //res.status(200).json({createdData: result})
}

exports.createPlaces = createPlaces;
exports.getDataFromDb = getDataFromDb;