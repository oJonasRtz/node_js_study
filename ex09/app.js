function	main(argv)
{
	const	args = argv.slice(2);

	if (args.length === 0) return (1); 

	
	return (0);
}



main(process.argv);


//Em js posso ret
function	minhaFuncaoEsquisita(flag = 0)
{
	switch (flag)
	{
		case 1:
			return ("Toma uma string");
		case 2:
			return (3.14);
		case 3:
			return (42);
		default:
			return (false);
	}
}
