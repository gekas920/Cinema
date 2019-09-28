import express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/first', function (req:express.Request, res:express.Response) {
    console.log('312')
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
