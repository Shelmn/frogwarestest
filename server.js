let express = require('express');
let app = express();
let alias;
let mainInfo = require('./data/MainPageInfo');
let functions = require('./functions');

app.use(express.static(__dirname+"/assets/main"));
app.use(express.static(__dirname+"/assets/info"));
app.use(express.static(__dirname+"/assets/404"));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});
app.get('/questinfo/:alias', function (req, res) {
    alias = req.param('alias');
    console.log(functions.availableQuest(alias));
    if(functions.availableQuest(alias)){
        res.sendFile(__dirname+"/assets/info/info.html");
    } else {
        res.sendFile(__dirname+"/assets/404/404.html");
    }
});
app.post('/data', function (req, res) {
    res.send(mainInfo);
});
app.post('/getLeafs', function (req, res) {
    let arr = functions.getLeafs();
    res.send(arr);
});
app.post('/info', function (req, res) {
    res.send(functions.getQuestInfo(alias));
});

app.listen(8080, () => console.log("server started"));

