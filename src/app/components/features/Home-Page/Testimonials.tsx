"use client";
import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

// Import Swiper components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mousumita Das",
      location: "Assam",
      image: "/assets/img/testimonial/student-1.jpg",
      content:
        "At Enlight Group Of Institutions' pharmacy college, students benefit from innovative teaching methods and industry-relevant curriculum, ensuring their readiness for the pharmaceutical field.",
    },
    {
      id: 2,
      name: "Megha Dey",
      location: "Tripura",
      image: "/assets/img/testimonial/student-2.jpg",
      content:
        "Enlight Group of Institutions excels in nursing education, offering comprehensive programs and expert faculty for aspiring healthcare professionals.",
    },
    {
      id: 3,
      name: "Mitan Das",
      location: "Tripura",
      image: "/assets/img/testimonial/student-3.jpg",
      content:
        "Pharmacy education at ELGI is top-notch, with modern facilities and dedicated faculty fostering future pharmacists' growth.",
    },
    {
      id: 4,
      name: "Susmita Roy",
      location: "Tripura",
      image: "/assets/img/testimonial/student-4.jpg",
      content:
        "Enlight Group of Institutions' nursing college provides rigorous training, preparing students with hands-on experience and valuable skills for their healthcare careers.",
    },
    {
      id: 5,
      name: "Susmita Singha",
      location: "Assam",
      image: "/assets/img/testimonial/student-5.jpg",
      content:
        "Enlight Group Of Institutions sets the standard for excellence in nursing and pharmacy education, with a supportive environment and career-focused programs propelling students toward success.",
    },
  ];

  const truncateContent = (text: string, length = 150) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div className="testmonialarea sp_top_70 sp_bottom_80">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="section__title text-center">
            <div className="section__title__button">
              <div className="default__small__button">Testimonials</div>
            </div>
            <div className="section__title__heading heading__underline">
              <h2>What Students Say About Us</h2>
            </div>
          </div>
        </div>

        {/* Swiper Slider with navigation outside */}
        <div data-aos="fade-up" className="relative mt-8 flex items-center">
          {/* Left Button */}
          <div className="swiper-button-prev-custom text-3xl cursor-pointer text-black mr-4">
            &#8592;
          </div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="flex-1"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="single__testimonial__wraper flex flex-col h-full">
                  <div className="single__testimonial__inner">
                    <div className="testimonial__img">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-circle"
                        loading="lazy"
                      />
                      <div className="testimonial__name">
                        <h6>{testimonial.name}</h6>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="testimonial__icon">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icofont-star"></i>
                      ))}
                    </div>
                  </div>

                  {/* Truncated content for equal length */}
                  <div className="testimonial__content mt-4 flex-grow">
                    <p>{truncateContent(testimonial.content, 150)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Button */}
          <div className="swiper-button-next-custom text-3xl cursor-pointer text-black ml-4">
            &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
