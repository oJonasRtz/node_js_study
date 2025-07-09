import chalk from 'chalk';

function	main(argv)
{
	let	args = argv.slice(2);

	if (args.length == 0)
	{
		console.log("No input detected. use: <colour>  <strings to be seen> ...");
		return (1);
	}


	let	colour  = args[0];
	if (colour[0] !== '#')
		colour = '#' + colour;

	for (let i = 1; i < args.length; i++)
		console.log(chalk.hex(colour)(args[i]));

	return (0);
}

main(process.argv);