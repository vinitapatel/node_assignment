const express = require('express');
const app = express();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 5000
var data;
const socket = require('socket.io')(http)
const fetch=require('node-fetch')
var
data=fetch("https://m.cricbuzz.com/cricket-commentary/72837/ind-vs-wi-2nd-odi-india-tour-of-west-indies-2023").
then(res => res.json())
.then(json => {
data=json
});
socket.on('connection',function(s){
console.log("Helloo "+ data)
s.emit('message',data);
})
http.listen(PORT,() => {
console.log(`Listening on port ${PORT}`);
})
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res) => {
res.sendFile(__dirname + '/index.html')
})
