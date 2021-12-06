// when user login, login element will change to true
const users = [
	{
		_id: '1001',
		name: 'Jame',
		password: 'jamePas',
		login: true,
	},
	{
		_id: '1002',
		name: 'John',
		password: 'johnPas',
		login: false,
	},
];

export function getUsers() {
	return users;
}
