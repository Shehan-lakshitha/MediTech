import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 h-screen md:mx-auto content-center">
        <svg
          className="text-green-600 w-16 h-16 mx-auto my-6"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 40 40"
        >
          <path
            fill="#bae0bd"
            d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"
          ></path>
          <path
            fill="#5e9c76"
            d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"
          ></path>
          <polyline
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="3"
            points="11.2,20.1 17,25.9 30.2,12.7"
          ></polyline>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Success
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for making your payment
          </p>
          <p className="py-10 text-center">Stay Safe and Have great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 bg-primaryColor text-white font-semibold py-3 rounded-[10px]"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
