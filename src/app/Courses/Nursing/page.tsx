// app/nursing/page.tsx
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import CourseCard from '@/app/components/features/Courses-Page/CourseCard';

export const metadata: Metadata = {
  title: "Nursing Programs - Enlight Group of Institutions",
  description: "Explore our comprehensive nursing programs including GNM, B.Sc, M.Sc, and PB BSc Nursing at Enlight Group of Institutions.",
};

const nursingPrograms = [
  {
    id: 1,
    title: "GNM Nursing",
    duration: "3 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-6.jpg",
    description: "GNM referred to as General Nursing and Midwifery deals with the education of nurses in general health care, nursing, and...",
    link: "/Courses/Nursing/GNMNursing"
  },
  {
    id: 2,
    title: "B.SC Nursing",
    duration: "4 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-1.jpg",
    description: "The course of study shall extend over 4 academic years from the date of commencement of his/ her study of...",
    link: "/Courses/Nursing/BSCNursing"
  },
  {
    id: 3,
    title: "M.SC Nursing",
    duration: "2 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-2.jpg",
    description: "MSc Nursing will prepare Nurses, to improve the quality of nursing education and practice, in India. It will build upon...",
    link: "/Courses/Nursing/MSCNursing"
  },
  {
    id: 4,
    title: "PBBSc Nursing",
    duration: "2 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-5.jpg",
    description: "The B.Sc Nursing (Post certificate) course of study shall extend over a period of 2 academic years from the date...",
    link: "/Courses/Nursing/PBBSCNursing"
  }
];

const Nursing = () => {
  return (
    <>
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-7.jpg' pageName='Nursing Programs' />

      <div className="gridarea sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {nursingPrograms.map((program) => (
              <CourseCard key={program.id} course={program} badgeText="Nursing"  />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nursing;
