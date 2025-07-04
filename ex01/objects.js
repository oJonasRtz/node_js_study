
class	User{
	constructor(name, email, age){
		this._name = name;
		this._age = age;
		this._email = email;
	}

	//Getters
	get name() { return this._name; }
	get age() { return this._age; }
	get email() { return this._email; }

	//Methods
	showUser(){
		console.log("name: " + this.name +
			"\nage: " + this.age +
			"\nemail: " + this.email
		);
	}
}

function	main(argv)
{
	if (argv.length != 5)
	{
		console.log("Error: invalid number of arguments.");
		return (1);
	}

	let	myUser = new User(argv[2], argv[3], argv[4]);
	myUser.showUser();

	//getters test
	console.log("Getters test\n" +
		"name: " + myUser.name +
		"\nage: " + myUser.age +
		"\nemail: " + myUser.email
	);
	return (0);
}

main(process.argv);