const http = require('node:http');
const path = require('node:path');
const readLine = require('node:readline/promises');

const {foo: helperFoo} = require('./helpers/helper');

const foo = async () => {
    // Https
    //const server = http.createServer((reg, res) => {
    //    res.writeHead(200, {'Content-Type': 'application/json'});
    //    res.end(JSON.stringify({
    //        data: 'Hello World',
    //    }));
    //});
    //
    //server.listen(3000);

    // Path
    // const pathToFile = __filename;
    // console.log(pathToFile);
    // console.log(path.dirname(pathToFile));
    // console.log(path.extname(pathToFile));
    // console.log(path.basename(pathToFile));
    // console.log(path.parse(pathToFile));
    // console.log(path.isAbsolute(pathToFile));

    // Readline
    const rlineInstsnce = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const answer = await rlineInstsnce.question('What is your name? ');
    console.log(`Hello ${answer}`);
    process.exit(0);
}

void foo();