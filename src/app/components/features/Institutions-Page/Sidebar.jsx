import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Sidebar = ({ courses }) => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="course__details__sidebar">
        {/* Courses Offered */}
        <div className="blogsidebar__content__wraper__2" data-aos="fade-up">
          <h4 className="sidebar__title">Courses Offered</h4>
          <ul className="course__details__populer__list">
            {courses.map((course) => (
              <li key={course.id} className="mb-3">
                <Link
                  href={course.link}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <div className="course__details__populer__img me-3">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={90}
                      height={70}
                      className="rounded"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="course__details__populer__content">
                    <h6 className="mb-0">{course.title}</h6>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="course__summery__button mt-4">
            <p className="mb-2">Need any help in Admission?</p>
            <a
              href="tel:+919916073632"
              className="default__button default__button--3 d-inline-flex align-items-center"
            >
              <i className="icofont-phone me-2"></i> +91 9916073632
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Sidebar;
