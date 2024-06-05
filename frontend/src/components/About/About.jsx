import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} className="rounded-[30px]" alt="About Us" />
            <div className="absolute z-20 bottom-4 w-[250px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="About Card" />
            </div>
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be One of the Nation's Best</h2>
            <p className="text_para">
              Our clinic is committed to providing exceptional healthcare services, combining state-of-the-art technology with a compassionate approach. We prioritize patient well-being and strive to deliver the highest quality care.
            </p>

            <p className="text_para mt-[30px]">
              With a team of experienced professionals, we offer a wide range of medical services to meet the diverse needs of our patients. Whether it's preventive care, diagnostics, or advanced treatments, we are here to support your health journey.
            </p>

            <Link to="/about">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
