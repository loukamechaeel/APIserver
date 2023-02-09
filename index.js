const express = require('express')
var cors = require('cors')
const app = express()


 
app.use(cors())
//--http://loaclhsot:3000/match?a=cecchia&b=belvedere
app.get('/match', function (req, res) {
    res.send(
        "<h1>"+
        req.query.a+
        "match"+
        req.query.b+
        ":"+
  (Math.floor(Math.random() * 100) +1)+
  "%</h1>"
  );
  res.send('Hello World')
});

app.listen(3000)
