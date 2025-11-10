import express from "express";
import { addBook,getAllBooks } from "../controller/book.controller.js";
import {upload} from "../middleware/upload.middleware.js"

const router = express.Router();

router.post("/addbook",upload.single("image"),addBook)
router.get("/",getAllBooks)

export default router;
