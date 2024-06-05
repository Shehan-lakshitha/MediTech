import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvator from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "The doctors and staff at this hospital provided exceptional care during my treatment. I am grateful for their expertise and compassion.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "The facilities were top-notch, and the medical team was incredibly supportive. I felt safe and well-cared for throughout my stay.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      review: "The personalized care and attention I received made a significant difference in my recovery. Highly recommend this hospital.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      review: "I was impressed by the advanced technology and the professionalism of the staff. They made a difficult time much more manageable.",
      rating: 5,
    },
  ];

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={patientAvator} alt={`${testimonial.name}`} />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                {testimonial.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
