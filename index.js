const http = require('node:http');
const path = require('node:path');
const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const readLine = require('node:readline/promises');
const EventEmitter = require('node:events');
const os = require('node:os');

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
    // const rlineInstsnce = readLine.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    // });
    // const answer = await rlineInstsnce.question('What is your name? ');
    // console.log(`Hello ${answer}`);
    // process.exit(0);

    // FS
    // const pathToFile = path.join(__dirname, 'text.txt');
    // await fsPromises.writeFile(pathToFile, 'Hello World\n');
    // const data = await fsPromises.readFile(pathToFile, 'utf-8');
    // console.log(data);
    // await fsPromises.appendFile(pathToFile, 'Some new data');
    // await fsPromises.mkdir(path.join(__dirname, 'newFolder'));
    // // await fsPromises.rmdir(path.join(__dirname, 'newFolder'), {recursive: true});
    //
    // // await fsPromises.unlink(pathToFile); // delete file
    // // await fsPromises.rename(pathToFile, path.join(__dirname, 'newFile.txt'));
    // // await fsPromises.copyFile(pathToFile, path.join(__dirname, 'newFile.txt'));
    // const stat = await fsPromises.stat(pathToFile);
    // console.log(stat.isFile());

    // Stream
    // const pathToFile = path.join(__dirname, 'text.txt');
    // const readStream = fs.createReadStream(pathToFile, 'utf-8');
    // const writeStream = fs.createWriteStream(path.join(__dirname, 'newFile.txt'));
    // readStream.on('data', (chunk) => {
    //     console.log('chunk', chunk.length);
    //     writeStream.write(chunk);
    // })

    // Events
    //     const emitter = new EventEmitter();
    //         emitter.on('event', () => {
    //             console.log('Event triggered');
    //             });
    //             emitter.emit('event2');
    //             emitter.emit('event2');
    //             emitter.emit('event2');
    //             emitter.emit('event2');
    //             emitter.emit('event2');
    //             emitter.once('event2', (...args) => {
    //                 console.log('____________________');
    //                 console.log('Event 1 happened');
    //                 console.log('args');
    //                 console.log('____________________');
    //             });
    //             emitter.on('event2', () => {
    //                 console.log('Event 2 happened');
    //             })
    //             emitter.emit('event2', 'Hellol', 564651, 56451);
    //             emitter.emit('event2');
    //             emitter.emit('event2', 555);

    // OS
    // console.log(os.arch());
    // console.log(os.cpus());
    // console.log(os.totalmem());
    // console.log(os.freemem());
    // console.log(os.homedir());
    // console.log(os.hostname());
    // console.log(os.platform());
    // console.log(os.userInfo());

}

void foo();

