
function	main(argv)
{
	if (argv.length != 4)
	{
		console.log("Invalid number of arguments!\nInsert your name and age.");
		return (1);
	}
	let name = argv[2];
	let	age = argv[3];

	console.log("Hello " + name + "! you are " + age + " years old");
}

main(process.argv);