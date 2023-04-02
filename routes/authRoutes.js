import express from "express";
import {

	registerController
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routes

// REGISTER || POPST
router.post("/register", registerController);

// LOGIN || POST


//export
export default router;
