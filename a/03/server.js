let http = require( 'http' );

let server = http.createServer( function ( req, res ) {
	res.write( 'Hello World!' );
	res.end();
});

server.listen( 3000 );
