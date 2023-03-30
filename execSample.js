/********execute mentod: executes the command*******/

// const {exec} = require('child_process');

// exec('dir', (error, stdout, stderr) => {
//     if(error){
//         console.log(`Error: ${error}`)
//         return;
//     }

//     if(stderr){
//         console.log(`standard Error: ${stderr}`)
//         return;
//     }
//     console.log(`Standard output: ${stdout}`)
// });

/********executeFile mentod: read from a file and execute it*******/

//const {execFile} = require('child_process');

// execFile('./someFile.sh', (error, stdout, stderr) => {
//     if(error){
//         console.log(`Error: ${error}`)
//         return;
//     }

//     if(stderr){
//         console.log(`standard Error: ${stderr}`)
//         return;
//     }
//     console.log(`Standard output: ${stdout}`)
// });

/*******Spawn method: doesnot have buffer*******/

// const {spawn} = require('child_process');

// //const child = spawn('node',['--version'] );

// const child = spawn('ls',[' -lh'], {shell: true} );

// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`)
// })

// child.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`)
// })  

// child.on('error', (error) => console.log(`error: ${error.message}`))

// child.on('exit', (code, signal) => {
//     if(code){
//         console.log(`Process exited with ${code}`)
//     }
//     if(signal){
//         console.log(`Process killed with ${signal}`)
//     }
//     console.log('done')
// })


/*********Fork method**************/

const express = require('express');

const app = express();

app.get('/one', (req, res) => {
    const sum = longComputation();
    console.log(sum);
    res.send({ sum: sum })
});

app.get('/two', async (req, res) => {
    const sum = await longComputePromise();
    console.log(sum);
    res.send({ sums: sum })
})

app.listen(3000, (req, res) => {
    console.log(`Server running on 3000...`)
});

function longComputation(req, res) {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i
    }
    return sum
}

function longComputePromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i
        }
        resolve(sum)
    })
}