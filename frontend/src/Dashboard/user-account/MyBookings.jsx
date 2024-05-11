import React from "react";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";

const MyBookings = () => {
  const {
    data,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments}`);

  console.log(data);

  return (
    <div>
      {loading && !error && <Loader />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.map((doctor) => {
            <DoctorCard doctor={doctor} key={doctor._id} />;
          })}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold"> You have no bookings yet</h2>}
    </div>
  );
};

export default MyBookings;
