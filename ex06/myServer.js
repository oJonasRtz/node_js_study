const	http = require('http');
const	server = http.createServer((req, res) => {

	if (req.url === '/')
	{
		res.writeHead(200, {'Content-Type' : 'text/plain' });
		res.end("Bem-vindo.");
	} else if (req.url === "/sobre")
	{
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Esse eh meu servidor');
	}else
	{
		res.writeHead(404, {'Content-Type' : 'text/plain'});
		res.end("Pagina nao encontrada");
	}
});

function	main()
{
	const	port = 3000;

	server.listen(port, () => {
		console.log("Server rodando na porta " + port);
	});
	return  (0);
}

main();
