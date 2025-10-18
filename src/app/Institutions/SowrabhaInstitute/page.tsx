import { Metadata } from "next";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import CourseLayout from "@/app/components/features/Institutions-Page/InstitutionsLayout";

export const metadata: Metadata = {
  title: "Sowrabha Institute of Nursing Sciences - Enlight Group of Institutions",
  description:
    "Sowrabha Institute of Nursing Sciences offers GNM, B.Sc, P.B.B.Sc, and M.Sc Nursing courses, affiliated with RGUHS and approved by KNC & INC.",
};

const courses = [
  {
    id: 1,
    title: "B.Sc. Nursing",
    image: "/assets/img/courses/course-1.jpg",
    link: "/bScNursing",
  },
  {
    id: 2,
    title: "M.Sc. Nursing",
    image: "/assets/img/courses/msc-nursing.jpg",
    link: "/MSCNursing",
  },
  {
    id: 3,
    title: "PBBSc Nursing",
    image: "/assets/img/courses/course-7.jpg",
    link: "/PbbscNursing",
  },
  {
    id: 4,
    title: "GNM Nursing",
    image: "/assets/img/courses/course-8.jpg",
    link: "/GnmNursing",
  },
];

export default function SowrabhaInstitutePage() {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        bgImage="/assets/img/infobanner/infobanner-2.jpg"
        pageName="Sowrabha Institute of Nursing Sciences"
      />

      {/* Course Layout Section */}
      <CourseLayout
        imageSrc="/assets/img/courses/bsc-nursing.jpg"
        imageAlt="Sowrabha Institute of Nursing Sciences"
        prospectusLink="/Sowrabha-Prospectus.pdf"
        lastUpdate="May 19, 2024"
        heading="About Sowrabha Institute of Nursing Sciences"
        description="Sowrabha Institute of Nursing Sciences was established in the year 2019. The College is Affiliated to RGUHS, Recognized by Govt of Karnataka and approved by Karnataka Nursing Council and Indian Nursing Council. The Institution has set new standards of excellence in Nursing Education and practice by offering GNM Course under School of Nursing & by offering B.Sc, P.B.B.Sc under College of Nursing."
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        courses={courses}
      />
    </>
  );
}
