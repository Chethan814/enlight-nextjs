"use client";
import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

const BrandArea: React.FC = () => {
  // List of partner images
  const partners = Array.from({ length: 15 }, (_, i) => `/assets/img/brand/partner-${i + 1}.png`);

  return (
    <div className="brandarea sp_bottom_60" >
      <div className="container" style={{translate:"2rem 0" }}>
        <div className="row">
          <div className="col-xl-12" data-aos="fade-up">
            <div className="section__title text-center">
              <div className="section__title__heading heading__underline">
                <h2>Placement In Associated With</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="brandarea__wraper" data-aos="fade-up">
            {partners.map((src, index) => (
              <div className="brandarea__img" key={index}>
                <a href="#" className="pe-none">
                  <Image
                    src={src}
                    alt={`partner-${index + 1}`}
                    height={90}
                    width={150} // Adjust width as needed
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
