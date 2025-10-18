import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const CourseLayout = ({
  imageSrc,
  imageAlt,
  prospectusLink,
  lastUpdate,
  heading,
  description,
  approvals,
  enquiryLink,
  courses,
}) => {
  return (
    <div className="blogarea__2 sp_top_100 sp_bottom_100">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-xl-8 col-lg-8">
            <div
              className="blogarae__img__2 course__details__img__2"
              data-aos="fade-up"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={450}
                className="img-fluid w-100"
                style={{ borderRadius: "8px" }}
              />
            </div>

            <div className="blog__details__content__wraper">
              <div className="course__button__wraper" data-aos="fade-up">
                <div className="course__button">
                  <a
                    href={prospectusLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center"
                  >
                    <i className="icofont-file-document me-2"></i> View Prospectus
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

              <div
                className="course__details__paragraph text-justify"
                data-aos="fade-up"
              >
                <p>{description}</p>
              </div>

              <div className="row align-items-center mt-4">
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
                <div className="col-sm-12 col-md-4">
                  <div data-aos="fade-up">
                    <a
                      href={enquiryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="default__button"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
