import * as math from "./math.js";

function	main(argv)
{
	let	args = argv.slice(2);

	if (args.length === 0)
		return (1);

	let	nums = args.map(Number);

	try{
		console.log("Sum: " + math.sum(...nums));
		console.log("Mult: " + math.mult(...nums));
	} catch(error){
		console.log(error.message);
	}

	return (0);
}

main(process.argv);
