// All code written, but haven't understood the second part

// Part 1: OK
let http = require( 'http' );
let fs = require( 'fs' );

let server = http.createServer( function ( req, res ) {
	res.write( '<h1>Hello World!</h1>' );
	res.write( '<p>Method: ' + req.method + '</p>' );
	res.write( '<p>URL: ' + req.url + '</p>' );
	res.end();
});

// server.listen( 3000 );

// Part 2: haven't understood the code
let server2 = http.createServer();

server2.on( 'request', function ( req, res ) {

	fs.createReadStream( '07. Web Servers.js' ).pipe( res );

});

server2.listen( 3000 );
