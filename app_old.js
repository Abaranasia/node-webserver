const http = require('http');
const port= 8080;
const message = {
    id: 1,
    content:"Welcome to the jungle"
}

http.createServer( (req, res) => {
    console.log(req);

    // res.writeHead(200, {'Content-Type':'text/plain'})
    //res.write('Hola mundo'); // server response   

    res.writeHead(200, {'Content-Type':'application/json'});
    res.write( JSON.stringify(message))


    res.end(); // Ends the response and display
})
.listen(port);

console.log(`Listening to port ${port}`)