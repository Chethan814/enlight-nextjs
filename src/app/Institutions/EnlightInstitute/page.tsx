import { Metadata } from "next";
import CourseLayout from "@/app/components/features/Institutions-Page/InstitutionsLayout";
import Breadcrumb from "@/app/components/common/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Enlight Institute of Para Medical Sciences - Enlight Group of Institutions",
  description:
    "Learn about Enlight Institute of Para Medical Sciences, offering quality education in nursing and paramedical sciences with experienced faculty and excellent facilities.",
};

const courses = [
  {
    id: 1,
    title: "B.Sc. Nursing",
    image: "/assets/img/courses/bsc-nursing.jpg",
    link: "/bScNursing",
  },
  {
    id: 2,
    title: "M.Sc. Nursing",
    image: "/assets/img/courses/msc-nursing.jpg",
    link: "/msc-nursing",
  },
  {
    id: 3,
    title: "PBBSc Nursing",
    image: "/assets/img/courses/course-7.jpg",
    link: "/pbbsc-nursing",
  },
  {
    id: 4,
    title: "GNM Nursing",
    image: "/assets/img/courses/course-8.jpg",
    link: "/gnm-nursing",
  },
];

export default function EnlightInstitutePage() {
  return (
    <>
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-7.jpg' pageName='Enlight Institute of Para Medical Sciences' />
      <CourseLayout
        imageSrc="/assets/img/courses/bsc-nursing.jpg"
        imageAlt="Enlight Institute of Para Medical Sciences"
        prospectusLink="/Sowrabha-Prospectus.pdf"
        lastUpdate="May 19, 2024"
        heading="About Enlight Institute of Para Medical Sciences"
        description="The Enlight Education Trust started in the year of Nov 2015 by keeping a broad objective of imparting high-quality education through improving oneself and the nation at large. Through well-organized packages, we are successful in providing standard education to the students. Providing trustworthy services with minimum expense was always our trademark. We worked to enlighten our students' lives by making valuable contributions to their academic and non-academic side by providing assistance in their studies, getting better placements, and overall bringing them as useful citizens to the nation. All this we made real only by the coordinated practices, having experienced faculties, and putting 100% loyalty into work... that's why we believe together we can succeed."
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        courses={courses}
      /></>
  );
}
