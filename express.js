var express = require("express");
var app = express();
var path = require('path')
require('dotenv').config();
var twilio = require('twilio');

app.use(express.static(path.join(__dirname, "build")));

app.get('/', function (req, res) {
    console.log(req)
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    var curPort = process.env.PORT;
    if (curPort === undefined) {
        console.log(`listening on localhost://8080`)
        curPort = "localhost://8080"
    } else {
        let d = new Date();
        // client.messages.create({
        //     to: `+16309622093`,
        //     from: '+12314653515',
        //     body: `Profile view on ${d}`
        // });
        console.log(`listening on ${curPort} at ${d}`)
    }
})
