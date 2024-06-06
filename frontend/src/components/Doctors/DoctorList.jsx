import React from "react";
import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";

const DoctorList = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {data
            .filter((doctor) => doctor.isApproved == "approved")
            .map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
