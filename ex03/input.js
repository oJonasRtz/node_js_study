const	readline = require('readline/promises');
const	{ stdin: input, stdout: output } = require('process');

async function	main()
{
	const	rl = readline.createInterface({input, output});

	let	name = await rl.question("Qual seu nome: ");
	let	food = await rl.question("QUal sua comida favorita: ");

	console.log(name + " ama " + food + "!");

	rl.close();
}

main();
