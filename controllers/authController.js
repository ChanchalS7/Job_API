import userModel from "../models/userModel.js";
export const registerController = async (req, res, next) => {

	const { name, email, password } = req.body; //
	if (!name) {
		next("name is required")
	}

	if (!email) {
		next("email is required")
	}
	if (!password) {
		next("password is required and must be greater than 6 characters")
	}


	//check if user exists already 

	const existingUser = await userModel.findOne({ email })
	if (existingUser) {
		next("User already exists, Please login")
	}

	// create new user for register 
	const user = await userModel.create({ name, email, password })
	//TOKEN 
	const token = user.createJWT();


	res.status(201).send({
		success: true,
		message: "User created successfully",
		user,
		token
	});

};




// export const registerController = async (req, res, next) => {

// 	try {
// 		const { name, email, password } = req.body; //
// 		if (!name) {
// 			next("name is required")
// 		}

// 		if (!email) {
// 			next("email is required")
// 		}
// 		if (!password) {
// 			next("password is required and must be greater than 6 characters")
// 		}


// 		//check if user exists already

// 		const existingUser = await userModel.findOne({ email })
// 		if (existingUser) {
// 			next("User already exists, Please login")
// 		}

// 		// create new user for register
// 		const user = await userModel.create({ name, email, password })
// 		res.status(201).send({ success: true, message: "User created successfully" });

// 	}

// 	catch (error) {
// 		// console.log(error);
// 		// res.status(400).send({

// 		// 	message: "Error in Register Controller",
// 		// 	success: false, error
// 		// })
// 		next(error);
// 	}

// };


