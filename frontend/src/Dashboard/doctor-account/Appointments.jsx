import React, { useContext, useEffect, useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const Appointments = ({ appointments }) => {
  const [data, setData] = useState([]);

  const { user } = useContext(authContext);

  useEffect(() => {
    const useFetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings/`);

        const result = await res.json();
        //console.log(result);
        setData(result.data);

        if (!res.ok) {
          throw new Error(result.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    useFetchData();
  }, []);

  console.log(data);
  return (
    <table className="w-full text-left text-sm text-gray-50">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Booked on
          </th>
        </tr>
      </thead>

      <tbody>
        {data.filter((item) => item.doctor._id === user._id)
        .map((item) => (
          <tr key={item._id}>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img
                src={item.user.photo}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name}</div>
                <div className="text-normal text-gray-500">
                  {item.user.email}
                </div>
              </div>
            </th>

            <td className="px-6 py-4 text-black">{item.user.gender.charAt(0).toUpperCase() + item.user.gender.slice(1)}</td>
            <td className="px-6 py-4">
              {item.isPaid && (
                <div className="flex items-center ">
                  <div className=" bg-green-500 rounded p-1">
                    Paid
                  </div>
                </div>
              )}

              {!item.isPaid && (
                <div className="flex items-center">
                  <div className="rounded p-1 bg-red-500">
                    Unpaid
                  </div>
                </div>
              )}
            </td>
            <td className="px-6 py-4 text-black">{item.ticketPrice}</td>
            {console.log(item.createdAt.split("T")[0])}
            <td className="px-6 py-4 text-black">{item.createdAt.split("T")[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;
