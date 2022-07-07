import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {SECRET_PASS} from '../auth';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
	const token: string = req.headers['authorization'].split(' ')[1];
	let jwtPayload;
	console.log('headers ->', req.headers['authorization'].split(' ')[1]);

	try {
		jwtPayload = jwt.verify(token, SECRET_PASS);
		console.info('Payload ->', jwtPayload);
	} catch (error) {
		res.status(401).json({error: 'User unauthorized!'});
		return;
	}
	next();
};
