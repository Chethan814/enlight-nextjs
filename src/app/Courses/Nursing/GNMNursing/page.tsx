import React from 'react';
import Head from 'next/head';
import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'B.Sc. Nursing', image: '/assets/img/courses/course-1.jpg', link: '/Courses/Nursing/BSCNursing' },
  { title: 'M.Sc. Nursing', image: '/assets/img/courses/course-2.jpg', link: '/Courses/Nursing/MSCNursing' },
  { title: 'PBBSc Nursing', image: '/assets/img/courses/course-5.jpg', link: '/Courses/Nursing/PBBSCNursing' },
];

const documents = [
  '10th / 12th Marksheet',
  '10th / 12th Admit Card',
  'Aadhaar Card',
  'Transfer Certificate',
  'Migration Certificate',
  'Passport Size Photographs',
];

export default function GNMNursing() {
  return (
    <>
      <Head>
        <title>GNM Nursing | Enlight Group of Institutions</title>
        <meta 
          name="description" 
          content="General Nursing and Midwifery (GNM) course details, eligibility, and admission process at Enlight Group of Institutions" 
        />
      </Head>

      <CourseLayout
        breadcrumbBg="/assets/img/infobanner/infobanner-5.jpg"
        pageName="GNM Nursing"
        mainImage="/assets/img/courses/course-6.jpg"
        mainImageAlt="GNM Nursing Course"
        prospectusLink="javascript:void(0);" // replace with actual PDF link
        lastUpdate="May 19, 2024"
        heading="About this course"
        description="The General Nursing and Midwifery (GNM) course is a comprehensive program that prepares students to work as registered nurses and midwives. The course curriculum is designed to provide both theoretical knowledge and practical training in nursing care."
        eligibility="Candidate has to be 10+2 Science from a recognized board"
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        duration="3.5 Years"
        applyLink="https://enlight-admission-form.vercel.app"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        documents={documents}
        otherCourses={otherCourses}
      />
    </>
  );
}
