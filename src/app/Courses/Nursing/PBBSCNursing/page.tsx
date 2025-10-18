import React from "react";
import Head from "next/head";
import CourseLayout from "@/app/components/features/Courses-Page/CourseLayout";

export default function PBBScNursing() {
  const courseData = {
    pageName: "PBBSc Nursing",
    breadcrumbBg: "/assets/img/infobanner/infobanner-1.jpg",
    mainImage: "/assets/img/courses/course-5.jpg",
    mainImageAlt: "PBBSc Nursing Course",
    heading: "Post Basic B.Sc. Nursing (PBBSc)",
    prospectusLink: "javascript:void(0);", // Replace with actual download link
    applyLink: "/admissions/apply-now",
    enquiryLink: "/contact-us",
    lastUpdate: "May 19, 2024",
    description: "The Post Basic B.Sc. Nursing (PBBSc) is a 2-year undergraduate program designed for GNM (General Nursing and Midwifery) passed students who wish to upgrade their qualifications to a degree level. The program enhances the knowledge and skills of working nurses.",
    eligibility: "Candidates should have passed GNM (General Nursing & Midwifery) with a minimum of 50% aggregate marks from any recognized institution. Should be a Registered Nurse and Registered Midwife or equivalent with any State Nursing Registration Council.",
    approvals: "Indian Nursing Council (INC), Karnataka Nursing Council (KNC)",
    duration: "2 Years",
    highlights: [
      "Upgrade from diploma to degree level",
      "Enhance clinical and managerial skills",
      "Better career prospects",
      "Eligibility for higher studies (M.Sc. Nursing)"
    ],
    careerOpportunities: [
      "Staff Nurse in Hospitals",
      "Nursing Tutor (after PG qualification)",
      "Nursing Supervisor",
      "Community Health Nurse",
      "Industrial Nurse",
      "Military Nurse",
      "Nursing Service Administrators"
    ],
    otherCourses: [
      { title: "B.Sc. Nursing", image: "/assets/img/courses/course-1.jpg", link: "/Courses/Nursing/BSCNursing" },
      { title: "M.Sc. Nursing", image: "/assets/img/courses/course-2.jpg", link: "/Courses/Nursing/MSCNursing" },
      { title: "GNM Nursing", image: "/assets/img/courses/course-6.jpg", link: "/Courses/Nursing/GNMNursing" },
    ]
  };

  return (
    <>
      <Head>
        <title>PBBSc Nursing | Enlight Group of Institutions</title>
        <meta
          name="description"
          content="Post Basic B.Sc. Nursing (PBBSc) course details, eligibility, and admission process at Enlight Group of Institutions"
        />
      </Head>

      <CourseLayout {...courseData} />
    </>
  );
}
