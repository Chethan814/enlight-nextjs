import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../common/Breadcrumb'; 

interface CourseLayoutProps {
  breadcrumbBg: string;
  pageName: string;
  mainImage: string;
  mainImageAlt: string;
  prospectusLink: string;
  lastUpdate: string;
  heading: string;
  description: string;
  eligibility?: string;
  approvals: string;
  duration?: string;
  applyLink: string;
  enquiryLink: string;
  documents?: string[];
  otherCourses: { title: string; image: string; link: string }[];
}

const CourseLayout: React.FC<CourseLayoutProps> = ({
  breadcrumbBg,
  pageName,
  mainImage,
  mainImageAlt,
  prospectusLink,
  lastUpdate,
  heading,
  description,
  eligibility,
  approvals,
  duration,
  applyLink,
  enquiryLink,
  documents,
  otherCourses,
}) => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb bgImage={breadcrumbBg} pageName={pageName} />

      <div className="blogarea__2 sp_top_100 sp_bottom_100">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="blogarae__img__2 course__details__img__2" data-aos="fade-up">
                <Image
                  src={mainImage}
                  alt={mainImageAlt}
                  width={800}
                  height={450}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>

              <div className="blog__details__content__wraper">
                <div className="course__button__wraper" data-aos="fade-up">
                  <div className="course__button">
                    <a href={prospectusLink} target="_blank" rel="noopener noreferrer">
                      <i className="icofont-file-document"></i> Download Prospectus
                    </a>
                  </div>
                  <div className="course__date">
                    <p>
                      Last Update: <span>{lastUpdate}</span>
                    </p>
                  </div>
                </div>

                <div className="course__details__heading" data-aos="fade-up">
                  <h3>{heading}</h3>
                </div>

                <div className="course__details__paragraph text-justify" data-aos="fade-up">
                  <p>{description}</p>
                </div>

                {eligibility && (
                  <>
                    <h4 className="sidebar__title" data-aos="fade-up">
                      Eligibility
                    </h4>
                    <p className="text-justify">{eligibility}</p>
                  </>
                )}

                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="course__details__wraper" data-aos="fade-up">
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge">
                          <i className="icofont-check-circled"></i>
                        </div>
                        <div>
                          <h5 className="text-primary mb-0">Approvals</h5>
                          <p className="lh-1-5 mb-0">{approvals}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {duration && (
                    <div className="col-sm-12 col-md-4">
                      <div className="course__details__wraper" data-aos="fade-up">
                        <div className="d-flex align-items-center gap-3">
                          <div className="icon-badge">
                            <i className="icofont-clock-time"></i>
                          </div>
                          <div>
                            <h5 className="text-primary mb-0">Duration</h5>
                            <p className="mb-0">{duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-sm-12 mt-3" data-aos="fade-up">
                    <a className="default__button me-2" target="_blank" rel="noopener noreferrer" href={applyLink}>
                      Apply Now
                    </a>
                    <a className="default__button" target="_blank" rel="noopener noreferrer" href={enquiryLink}>
                      Enquiry Now
                    </a>
                  </div>
                </div>

                {documents && documents.length > 0 && (
                  <div className="course__list__wraper" data-aos="fade-up">
                    <div className="blog__details__heading__2">
                      <h5>Documents Required For Admission</h5>
                    </div>
                    <div className="aboutarea__list__2 blog__details__list__2">
                      <ul>
                        {documents.map((doc, idx) => (
                          <li key={idx}>
                            <i className="icofont-check"></i>
                            <p>{doc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="course__details__sidebar">
                <div className="blogsidebar__content__wraper__2" data-aos="fade-up">
                  <h4 className="sidebar__title">Other Courses</h4>
                  <ul className="course__details__populer__list list-unstyled">
                    {otherCourses.map((course, idx) => (
                      <li key={idx}>
                        <div className="course__details__populer__img">
                          <Image src={course.image} alt={course.title} width={90} height={70} />
                        </div>
                        <div className="course__details__populer__content">
                          <h6>
                            <Link href={course.link}>{course.title}</Link>
                          </h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="course__summery__button mt-4">
                    <p>Need any help in Admission ?</p>
                    <a className="default__button default__button--3" href="tel:+91 9916073632">
                      <i className="icofont-phone"></i> +91 9916073632
                    </a>
                  </div>
                </div>

                <div className="blogsidebar__content__wraper__2 mt-4" data-aos="fade-up">
                  <h4 className="sidebar__title">Get in Touch</h4>
                  <form className="get__touch__input">
                    <input type="text" placeholder="Enter name*" required />
                    <input type="email" placeholder="Enter your mail*" required />
                    <textarea placeholder="Message*" rows={4} required></textarea>
                    <button type="submit" className="default__button">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLayout;
