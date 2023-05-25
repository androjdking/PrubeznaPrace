const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/node'), {},err => {
    if(err) throw err;
    console.log('Folder created...');
});

fs.writeFile(path.join(__dirname,'/node','hello.txt'),
    'Hello World!',
    err => {
        if(err) throw err;
        console.log('File written to...');
    }
);

fs.rename(path.join(__dirname,'/node','hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});