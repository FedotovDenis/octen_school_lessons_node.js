const foo = () => {
    console.log(111111);

    console.log(__dirname);
    console.log(__filename);
    console.log(process.cwd);
}

module.exports = {
    foo
}