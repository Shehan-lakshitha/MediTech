import React from "react";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Kamal Perera
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          nulla, autem quibusdam accusantium vel, esse eveniet repudiandae
          consequatur cumque voluptatibus maiores. Aspernatur distinctio ipsam
          soluta necessitatibus optio. Harum cupiditate cumque reprehenderit,
          quidem ex molestiae officia repellendus numquam neque blanditiis illum
          dicta explicabo rerum perferendis, veritatis ratione rem molestias
          libero dolor.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                23 June, 2005
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD Surgeaon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, Colombo.
              </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                23 June, 2005
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD Surgeaon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, Colombo.
              </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;
