const exec = require( 'child_process' ).exec;

function start()
{
	console.log( 'Request handler "start" was called.' );

	// function sleep( milliSeconds )
	// {
	// 	let startTime = new Date().getTime();
	// 	while( new Date().getTime() < startTime + milliSeconds );
	// }

	// sleep( 10000 );
	// return 'Hello Start';

	let content = 'empty';
	exec( 'dir', function ( error, stdout, stderr ) {
		content = stdout;
	});
	return content;
}

function upload()
{
	console.log( 'Request handler "upload" was called.' );
	return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
