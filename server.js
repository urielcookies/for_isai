// Include Modules
var express = require("express");
var app = express();
var server = require("http").createServer(app).listen(3000)
var io = require("socket.io").listen(server);

users = [];
connections = [];

// server.listen(3000)

// Run The Server
// server.listen(process.env.PORT || 3000);

// console.log("server running...")

// // Create a Route
// app.get("/", function(req, res){ //When "/" is visited then it runs the function
//     // res.sendFile(__dirname + "/views/login.html");
//     res.sendFile(__dirname + "/public/index.html");
// });


// works css

// app.use(express.static(__dirname + '/public'));

// app.listen(3000, function() {
//   console.log('Server listening on port 3000');
// });

// // Open a connection with socket.io
// io.sockets.on("connection", function(socket){
//     connections.push(socket);
//     console.log("Connected: %s sockets connected", connections.length);

//     //Disconnect
//     socket.on("disconnect", function(data){
//         connections.splice(connections.indexOf(socket), 1);
//     console.log("Disconnected: %s sockets connected", connections.length);
//     }); 
// });

// ================================================================================
app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res){
    res.redirect("public/index.html")
})

// Open a connection with socket.io
io.sockets.on("connection", function(socket){
    // connections.push(socket);
    console.log("server621");
    socket.emit("MyEvent", "Connection Success")

    // //Disconnect
    // socket.on("disconnect", function(data){
    //     connections.splice(connections.indexOf(socket), 1);
    // console.log("Disconnected: %s sockets connected", connections.length);
    // }); 
});







