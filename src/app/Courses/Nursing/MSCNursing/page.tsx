import React from 'react';
import Head from 'next/head';
import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'B.Sc. Nursing', image: '/assets/img/courses/course-1.jpg', link: '/Courses/Nursing/BSCNursing' },
  { title: 'GNM Nursing', image: '/assets/img/courses/course-6.jpg', link: '/Courses/Nursing/GNMNursing' },
  { title: 'PBBSc Nursing', image: '/assets/img/courses/course-5.jpg', link: '/Courses/Nursing/PBBSCNursing' },
];

const documents = [
  '10th / 12th Marksheet',
  '10th / 12th Admit Card',
  'Aadhaar Card',
  'Migration Certificate',
  'Passport Size Photographs',
];

export default function MSCNursing() {
  return (
    <>
      <Head>
        <title>M.Sc. Nursing | Enlight Group of Institutions</title>
        <meta 
          name="description" 
          content="Master of Science in Nursing (M.Sc. Nursing) course details, eligibility, and admission process at Enlight Group of Institutions" 
        />
      </Head>

      <CourseLayout
        breadcrumbBg="/assets/img/infobanner/infobanner-6.jpg"
        pageName="M.Sc. Nursing"
        mainImage="/assets/img/courses/course-2.jpg"
        mainImageAlt="M.Sc. Nursing Course"
        prospectusLink="javascript:void(0);" // replace with actual PDF link
        lastUpdate="May 19, 2024"
        heading="About this course"
        description="The Master of Science in Nursing (M.Sc. Nursing) is a postgraduate program that prepares nurses for leadership positions in nursing education, administration, and specialized clinical practice. The program focuses on advanced nursing concepts, research methodology, and evidence-based practice."
        eligibility="The Minimum education requirement shall be the passing of B.Sc. Nursing/Post Basic B.Sc. Nursing with a minimum of 55% aggregate marks. Minimum one year of work experience after Basic B.Sc. Nursing. Minimum one year of work experience before or after Post Basic B.Sc. Nursing."
        approvals="Indian Nursing Council (INC), Karnataka Nursing Council (KNC)"
        duration="2 Years"
        applyLink="https://enlight-admission-form.vercel.app"
        enquiryLink="https://enlight-enquiry-form.vercel.app"
        documents={documents}
        otherCourses={otherCourses}
      />
    </>
  );
}
