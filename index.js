var express = require("express");  // ladataan express moduuli muuttujaan
var app = express();    // luodaan serveri
var path = require("path");


app.use('/',express.static(path.join(__dirname, 'views')));


app.listen(3000);   // käynnistetään serveri (kuuntele porttia 3000, voi käyttää tässä testissä portteja 3000 ->)