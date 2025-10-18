import { Metadata } from "next";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import CourseLayout from "@/app/components/features/Institutions-Page/InstitutionsLayout";

export const metadata: Metadata = {
  title: "Enlight School of Nursing - Enlight Group of Institutions",
  description:
    "Explore our nursing programs at Enlight School of Nursing, offering B.Sc, M.Sc, PBBSc, and GNM Nursing courses with experienced faculty and excellent placement opportunities.",
};

// Courses Offered
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

export default function EnlightSchoolPage() {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        bgImage="/assets/img/infobanner/infobanner-1.jpg"
        pageName="Enlight School of Nursing"
      />

      {/* Course Layout Section */}
      <CourseLayout
        imageSrc="/assets/img/courses/bsc-nursing.jpg"
        imageAlt="Enlight School of Nursing"
        prospectusLink="/Sowrabha-Prospectus.pdf"
        lastUpdate="May 19, 2024"
        heading="About Enlight School of Nursing"
        description="The Enlight Education Trust started in November 2015 with the broad objective of imparting high-quality education to improve individuals and society at large. Through well-structured programs, we have been successful in providing standard education to our students. Offering reliable services with minimal expense has always been our hallmark. We work to enlighten our students' lives by supporting their academic and personal growth, helping them secure better placements, and nurturing them to become valuable citizens of the nation. This success is made possible through coordinated efforts, experienced faculty, and complete dedication to our mission — we believe that together, we can succeed."
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        courses={courses}
      />
    </>
  );
}
