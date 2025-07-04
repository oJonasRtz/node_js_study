let name = process.argv[2];

function	sayhello(nome){
	if (nome)
		console.log("Hello " + nome);
	else
		console.log("Hello world!");
}


//Execucao
sayhello(name);