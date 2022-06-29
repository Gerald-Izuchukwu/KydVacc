const User = require('../models/User');
exports.signUpUser = async (req, res, next) => {
	try {
		// const { name, email, role, password } = req.body;
		// const user = await User.create({ name, email, role, password });
		const user = await User.create(req.body);

		await user.save();

		res.status(201).json({
			msg: 'data Created ',
			data: user,
		});
	} catch (error) {
		console.log(error);
	}
};
