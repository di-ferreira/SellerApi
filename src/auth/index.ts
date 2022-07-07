import jwt from 'jsonwebtoken';

const SECRET_PASS = 's3cr3tp@ss';

const generateToken = (id: number, user: string) => {
	const payload = {
		id: id,
		user: user,
		exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
	};

	const TOKEN = jwt.sign(payload, SECRET_PASS);

	return TOKEN;
};

const verifyToken = (token: string) => {
	try {
		const tokenVerified = jwt.verify(token, SECRET_PASS);
		return tokenVerified;
	} catch (error) {
		return 'Invalid token!';
	}
};

export {generateToken, verifyToken, SECRET_PASS};
