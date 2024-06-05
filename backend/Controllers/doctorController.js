import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Fail to update: " + err });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Fail to deleted: " + err });
  }
};
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor found: " + doctor,
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No User found: " + err });
  }
};
export const getAllDoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find({})
      .populate("reviews")
      .select("-password");

    res
      .status(200)
      .json({ success: true, message: "Doctors found", data: doctors });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found: " + err });
  }
};
export const getDoctorProlfile = async (req, res) => {
  const doctorId = req.doctorId;

  console.log(doctorId);

  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({ success: true, message: "Doctor found", data:{...rest, appointments} });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
