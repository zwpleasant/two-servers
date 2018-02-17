var http = require("http");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "top_songsdb"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    function Server (port, cb) {
        this.port = port;
        this.s = http.createServer(cb);
    }
    
    Server.prototype.listen = function () {
        var port = this.port;
        function start() {
            console.log(`We live y'all!!! http://localhost/${port}`);
        }
        this.s.listen(this.port, start)
    }
    
    var s1 = new Server(7000, function (request, response) {
        connection.query("select * from top5000 limit 10", function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data.reduce(function (prev, curr){
                return prev + curr.artist + " ";
            }, ""));
        });
    });
    
    var s2 = new Server(7500, function (request, response) {
        response.end("And another one");
    });

    s1.listen();
    s2.listen();
});