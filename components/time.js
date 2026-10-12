const fs = require('fs');
function nodeStyleCallback(err,data){
    if(err){
        console.error('there was an error',err);
        return;

    }
    console.log(data);
}
fs.readFile('./Node.tex')