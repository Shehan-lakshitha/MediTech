import express from "express";
import {getSingleDoctor, deleteDoctor, updateDoctor, getAllDoctor} from "../Controllers/doctorController.js";

const router = express.Router();

router.get('/:id',getSingleDoctor);
router.get('/',getAllDoctor);
router.put('/:id',updateDoctor);
router.delete('/:id',deleteDoctor);

export default router;