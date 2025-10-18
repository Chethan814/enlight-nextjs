// app/paramedicals/page.tsx
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import CourseCard from '@/app/components/features/Courses-Page/CourseCard';

export const metadata: Metadata = {
  title: "Paramedical Courses - Enlight Group of Institutions",
  description: "Explore our paramedical courses including DMLT, DMXT, DMOT, DAT, and more at Enlight Group of Institutions.",
};

const paramedicalCourses = [
  {
    id: 1,
    title: "Diploma in Medical Laboratory Technology (DMLT)",
    duration: "2 Years",
    seats: "40 seats",
    image: "/assets/img/service/facility-16.jpg",
    description: "DMLT is a two years course. A professional with DMLT examines and analyzes different body...",
    link: "/diploma-in-medical-laboratory-technology-dmlt",
  },
  {
    id: 2,
    title: "Diploma in Medical Imaging/X-Ray Technology (DMXT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/courses/dmxt.jpg",
    description: "DMXT is an undergraduate radiology course and is all about how electromagnetic...",
    link: "/diploma-in-medical-imaging-x-ray-technology-dmxt",
  },
  {
    id: 3,
    title: "Diploma in Medical Operation Technology (DMOT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/courses/dmot.jpg",
    description: "DMOT is a two-year diploma program designed to create trained and qualified professionals...",
    link: "/diploma-in-medical-operation-technology-dmot",
  },
  {
    id: 4,
    title: "Diploma in Medical Anesthesia Technology (DOT/DAT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/service/facility-9.jpg",
    description: "DOT/DAT leads the students to a comprehensive study of the field of...",
    link: "/diploma-in-medical-anesthesia-technology-dot-dat",
  }
];

const Paramedicals = () => {
  return (
    <>
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-6.jpg' pageName='Paramedical Courses' />

      <div className="gridarea sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {paramedicalCourses.map((course) => (
              <CourseCard key={course.id} course={course} badgeText="Paramedical" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Paramedicals;
