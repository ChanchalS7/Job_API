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
		user: {
			name: user.name,
			email: user.email,
			lastName: user.lastName,
			location: user.location,
		},
		token,
	});

};

export const loginController = async (req, res, next) => {
	const { email, password } = req.body;
	//validation
	if (!email || !password) {
		next("Please Provide All Fields");
	}
	//find user by email
	const user = await userModel.findOne({ email }).select("+password");
	if (!user) {
		next("Invalid Useraname or password");
	}
	//compare password
	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		next("Invalid Useraname or password");
	}
	user.password = undefined;
	const token = user.createJWT();
	res.status(200).json({
		success: true,
		message: "Login SUccessfully",
		user,
		token,
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


