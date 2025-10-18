import { Metadata } from "next";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import CourseLayout from "@/app/components/features/Institutions-Page/InstitutionsLayout";

export const metadata: Metadata = {
  title: "Sri Shantidhama School of Nursing - Enlight Group of Institutions",
  description:
    "Explore professional nursing programs at Sri Shantidhama School of Nursing, offering diploma, bachelor's, and postgraduate degrees in nursing. Affiliated with RGUHS and approved by KNC & INC.",
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

export default function SantidhamaSchoolPage() {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        bgImage="/assets/img/infobanner/infobanner-3.jpg"
        pageName="Sri Shantidhama School Of Nursing"
      />

      {/* Reusable Course Layout */}
      <CourseLayout
        imageSrc="/assets/img/courses/bsc-nursing.jpg"
        imageAlt="Sri Shantidhama School of Nursing"
        prospectusLink="/Sowrabha-Prospectus.pdf"
        lastUpdate="May 19, 2024"
        heading="About Sri Shantidhama School Of Nursing"
        description="Welcome to Shantidhama College of Nursing. In an era of stiff competition, success can only be achieved if one makes the right kind of endeavor at the right time and in the right direction. Shantidhama College of Nursing has been established with a view to produce qualified and efficient nurses for a new tomorrow in the ever-changing competitive world of today. Given the paradigm shift which the healthcare sector is experiencing, nursing science probably represents the most ideal field for healthcare to innovate for it is a domain where there is a constant need to change with the times and continuously review, analyze and upgrade competencies in the profession. Our primary goal is to offer the best EDUCATION AND CLINICAL TRAINING possible in Nursing. Affiliated to RGUHS and approved by KNC, INC New Delhi & Govt. of Karnataka."
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        courses={courses}
      />
    </>
  );
}
