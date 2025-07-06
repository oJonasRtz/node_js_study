const	fs = require('fs');

function	main(argv)
{
	const	args = argv.slice(2);
	const	fileName = "message.txt";

	if (args.length != 1)
		return (0);

	//Creates and fill de file
	fs.writeFileSync(fileName, args[0]);

	//read and  encode the content of the file
	let	content = fs.readFileSync(fileName, 'utf-8');

	//show the content
	console.log(content);

	return (0);
}

main(process.argv);
