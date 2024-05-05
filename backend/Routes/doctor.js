import express from "express";
import {
  getSingleDoctor,
  deleteDoctor,
  updateDoctor,
  getAllDoctor,
  getDoctorProlfile,
} from "../Controllers/doctorController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

router.get(
  "/profile/me",
  authenticate,
  restrict(["doctor"]),
  getDoctorProlfile
);

export default router;
