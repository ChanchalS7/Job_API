import express from "express";
import {

	registerController, loginController
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routes

// REGISTER || POPST
router.post("/register", registerController);
router.post('/login', loginController);

// LOGIN || POST


//export
export default router;
