
function	sum()
{
	let	result = 0;

	for (let i = 0; i < arguments.length; i++)
	{
		if (isNaN(arguments[i]))
			throw new Error("Error: not a number.");
		result += Number(arguments[i]);
	}

	return (result);
}

function	main(argv)
{
	const	args = argv.slice(2);

	if (!args.length)
	{
		console.log("Error: no input detected.")
		return (1);
	}
	
	try{
		console.log("The sum is " + sum(...args));
	}catch(error){
		console.log(error.message);
	}
	return (0);
}

main(process.argv);