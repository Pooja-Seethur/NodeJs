var request = require('request')

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

//return done param whenever async code finishes 
//nature of test: API nature here

describe('get places', () => {

    //check status code: mention test case in words

    it('should return 200 ok', (done) => {
        request.post({
            headers: {'content-type' : 'application/json'},
            url:     'http://localhost:9876/placePath/byPlaceId',
            body:    JSON.stringify({
                placeId: "646f074fda6918bea22f1041"
            })
          }, (error, response, body) => {
            console.log(error)
            console.log(body)
            expect(response.statusCode).toBe(200)
            done()
          })  
    })

    //check if boy length is not empty

    it('should not be empty list', (done) => {
        request.post({
            headers: {'content-type' : 'application/json'},
            url:     'http://localhost:9876/placePath/byPlaceId',
            body:    JSON.stringify({
                placeId: "646f074fda6918bea22f1041"
            })
          }, (error, response, body) => {
            console.log(error)
            console.log(body)
            expect(body.length).toBeGreaterThan(0)
            done()
          }) 
    })
})