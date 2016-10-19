var express = require ('express');
var app = express();

app.set('port', process.env.PORT);
app.get('/', function(request, response){
    var ip = request.connection.remoteAddress || request.headers["x-forwarded-for"];
    var lang = request.headers["accept-language"];
    var os = request.headers["user-agent"];
    
    var obj = {
        "IP": ip,
        "Language": lang,
        "Operating system": os
    };
    response.send(obj);
    
});

app.listen(app.get('port'), function(){
    console.log("App running on", app.get('port'));
});
