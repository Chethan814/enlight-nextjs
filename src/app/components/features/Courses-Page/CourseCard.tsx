// app/components/courses/CourseCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  duration: string;
  seats: string;
  image: string;
  description: string;
  link: string;
}

interface CourseCardProps {
  course: Course;
  badgeText?: string;  // "Paramedical" or "Nursing"
  colClass?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, badgeText = "Course", colClass = "col-xl-4" }) => {

  // Define colors based on badgeText
  const badgeColor = badgeText === "Nursing" ? " " : "blue__color";

  return (
    <div className={`${colClass} col-lg-4 col-md-6 col-sm-6 col-12 mb-4`}>
      <div className="gridarea__wraper h-100">
        <div className="gridarea__img">
          <Link href={course.link}>
            <Image
              src={course.image}
              alt={course.title}
              width={370}
              height={250}
              className="img-fluid"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
          </Link>
          <div className="gridarea__small__button">
            <div className={`grid__badge ${badgeColor}`}>
              {badgeText}
            </div>
          </div>
         
        </div>
        <div className="gridarea__content p-4">
          <div className="gridarea__list mb-3">
            <ul className="d-flex justify-content-between" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li className="d-flex align-items-center"><i className="icofont-chair me-2"></i> {course.seats}</li>
              <li className="d-flex align-items-center"><i className="icofont-clock-time me-2"></i> {course.duration}</li>
            </ul>
          </div>
          <div className="gridarea__heading mb-3">
            <h3>
              <Link href={course.link} className="text-decoration-none" style={{ fontSize: '18px' }}>
                {course.title}
              </Link>
            </h3>
          </div>
          <div className="mb-4" style={{ minHeight: '60px' }}>
            <p className="mb-0">{course.description}</p>
          </div>
          <div className="gridarea__bottom">
            <Link href={course.link} className="text-decoration-none">
              <div className="gridarea__small__img">
                <div className="gridarea__small__content ms-0">
                  <h6>Apply Now <i className="icofont-long-arrow-right"></i></h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
