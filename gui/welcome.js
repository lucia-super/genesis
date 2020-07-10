var express = require("express");
const bodyParser = require('body-parser')
var build = require('./server/build');
var app = express();

const port = 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

var router = express.Router();
router.get('/getAllModules', (req, res) => res.send(build.getModules()))
router.post('/rebuild', (req, res) => {
    // build.execCommand(req.body);
    res.send(build.getModules())
})

app.use(router)
app.use(express.static("gui"))

app.listen(port);