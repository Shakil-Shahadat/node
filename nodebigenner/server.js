const http = require( 'http' );
const url = require( 'url' );

function start( route, handle )
{
	function onRequest( req, res )
	{
		let pathname = url.parse( req.url ).pathname;
		console.log( 'Request for ' + pathname + ' received.' );

		res.writeHead( 200, { 'content-type': 'text/plain' } );
		let content = route( handle, pathname )
		res.write( content );
		res.end();
	}

	http.createServer( onRequest ).listen( 3000 );

	console.log( 'Server has started.' );
}

exports.start = start;
