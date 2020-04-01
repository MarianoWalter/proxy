module.exports = require('yargs')
.command('* [port] [to]', 'Redirects requests from a port to a specified URL', yargs => {
	yargs.positional('port', {
		describe: 'port to bind on',
		type: 'number',
		demandOption: true,
	});
	yargs.positional('to', {
		describe: 'url to redirect to',
		type: 'string',
		demandOption: true,
	});
}, ({ port, to  }) => {
	if (isNaN(port)) {
		throw new TypeError('PORT is not a number');
	}

	console.info(`Redirecting from "${port}" to "${to}"`);
})
.option('silent', {
	alias: 's',
	type: 'boolean',
	description: 'Skip log',
})
.argv;
