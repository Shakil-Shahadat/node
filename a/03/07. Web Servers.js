let http = require( 'http' );

let server = http.createServer( function ( req, res ) {
	res.write( '<h1>Hello World!</h1>' );
	res.write( '<p>Method: ' + req.method + '</p>' );
	res.write( '<p>URL: ' + req.url + '</p>' );
	res.end();
});

server.listen( 3000 );
