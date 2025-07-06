function	main(argv)
{
	console.log("Argv[0]: " + argv[0]);
	console.log("Argv[1]: " + argv[1]);
	for (let i = 2; i < argv.length; i++)
	{
		console.log("Argv[" + i + "]: " + argv[i]);
	}
	return (0);
}

main(process.argv);
