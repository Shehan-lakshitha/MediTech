import React from "react";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments}`);
  return (
    <div>
      {loading && !error && <Loader />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => {
            <DoctorCard doctor={doctor} key={doctor._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
