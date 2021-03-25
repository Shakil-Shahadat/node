const http = require( 'http' );
let url = require( 'url' );

function start()
{
	function onRequest( req, res )
	{
		let pathname = url.parse( req.url ).pathname;
		console.log( 'Request for ' + pathname + ' received.' );
		res.writeHead( 200, { 'content-type': 'text/plain' } );
		res.write( 'Hello World!' );
		res.end();
	}

	http.createServer( onRequest ).listen( 3000 );

	console.log( 'Server has started.' );
}

exports.start = start;
