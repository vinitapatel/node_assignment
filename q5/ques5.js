var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./Files/text1.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./Files/text1.txt.gz'));// Compress the file 
console.log("File Compressed.");