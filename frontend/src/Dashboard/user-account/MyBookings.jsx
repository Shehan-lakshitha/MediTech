import React, { useContext, useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const MyBookings = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const { user } = useContext(authContext);


  useEffect(() => {
    const useFetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/bookings/`);

        const result = await res.json();
        //console.log(result);
        setData(result.data);
        setLoading(false);

        if (!res.ok) {
          throw new Error(result.message);
        }
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    };
    useFetchData();
  }, []);

  //console.log(data);
  return (
    <div>
      {loading && !error && <Loader />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.map((doctor, index) => {
            <DoctorCard doctor={doctor.doctor} key={doctor.doctor._id} />;
          })}
        </div>
      )}

      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        {data.filter((item) => item.user._id === user._id)
        .map((item,index) => (
          <li key={index} className="p-4 rounded-[10px] bg-[#fff9ea]">
          <div className="grid grid-cols-2">
            <span className="text-yellowColor text-[18px] leading-6 font-semibold">
              Dr. {item.doctor.name}
            </span>
            <span className="text-[18px] leading-6 font-bold ml-20">
              {item.isPaid ? <span className=" text-green-600">Paid</span> : <span className=" text-red-600">Not Paid</span>}
            </span>
          </div>
          <p className="text-[16px] leading-6 font-medium text-textColor">
            Amount: Rs. {item.ticketPrice}.00
          </p>

          <p className="text-[14px] leading-5 font-medium text-textColor">
            Booked on: {item.createdAt.split("T")[0]}
          </p>
        </li>
        ))}
        
      </ul>

      {!loading && !error && data.filter((item) => item.user._id === user._id).length === 0 && (
        <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold">
          {" "}
          You have no bookings yet
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
