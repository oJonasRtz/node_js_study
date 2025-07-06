const	fs = require('fs');

function	createFile(str_name, str_content)
{
	if (typeof str_name !== "string" || typeof str_content !== "string")
		throw new TypeError("Both should be strings.");

	fs.writeFileSync(str_name, str_content);
}

function	readFile(str_name)
{
	if (typeof str_name !== "string")
		throw new TypeError("Name should be a string.");
	
	return (fs.readFileSync(str_name, "ascii"));
}

function	main(argv)
{
	const	filename = "message.txt";

	if (argv.length === 0)
		return (0);
	
	try{
		createFile(filename, argv[0]);
		console.log(readFile(filename));
	}catch(error){
		console.log(error.message);
	}
	return (0);
}

main(process.argv.slice(2));
