import React, { useEffect, useState } from "react";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data//doctors";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");


  const handleSearch = () => {
    setQuery(query.trim());

    console.log(query);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceQuery(query);
    },3000)

    return () => clearTimeout(timeOut)
  },[query])
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors?query=${debounceQuery}`
  );

  return (
    <>
      <section className="bg-[#fff9EA]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#446ca92c] rounded-md flex items-center justify-between">
            <input
              type="Search"
              className="py-4 pl-4 pr-2 bg:transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {data
                .filter((doctor) => doctor.isApproved == "approved")
                .map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              adipisicing elitnobis.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
