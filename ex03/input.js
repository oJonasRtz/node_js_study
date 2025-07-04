const	readline = require('readline/promises');
const	{ stdin: input, stdout: output } = require('process');

class	User{
	async	getInput(){
		const	rl = readline.createInterface({input, output});

		this._name = await rl.question("Qual seu nome: ");
		this._food = await rl.question("Qual sua comida favorita: ");
		rl.close();;
	}
	iLove(){
		console.log(this._name + " ama " + this._food + "!");
	}
}

async function	main()
{
	let	user = new User();

	await user.getInput();
	user.iLove();

	return (0);
}

main();
