export function	sum()
{
	let	result = 0;

	for (let i = 0; i < arguments.length; i++)
	{
		if (typeof arguments[i] !== 'number')
			throw new TypeError("Invalid type of argument.");
		result += arguments[i];
	}
	
	return (result);
}

export function	mult()
{
	let	result = 1;

	for (let i = 0; i < arguments.length; i++)
	{
		if (typeof arguments[i] !== 'number')
			throw new TypeError("Invalid type of argument.");
		result *= arguments[i];
	}
	return (result);
}
