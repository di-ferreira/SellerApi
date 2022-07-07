import {Router} from 'express';
import {generateToken, verifyToken} from '../auth';
import sellerRepository from '../repositories/Seller';

const authRoutes = Router();

authRoutes.post('/', async (req, res) => {
	try {
		const {email, password} = req.body;
		let message: any;

		const seller = await sellerRepository.find({
			where: {email: email, password: password},
		});

		if (seller) {
			message = {token: generateToken(seller[0].id, seller[0].name)};
		} else {
			message = {error: 'Password or e-mail incorrect'};
		}

		return res.status(200).json(message);
	} catch (err) {
		return res.status(400).json({error: err});
	}
});

export default authRoutes;
