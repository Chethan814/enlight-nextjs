import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';


const otherCourses = [
  { title: 'M.Sc. Nursing', image: '/assets/img/courses/course-2.jpg', link: '/Courses/Nursing/MSCNursing' },
  { title: 'PBBSc Nursing', image: '/assets/img/courses/course-5.jpg', link: '/Courses/Nursing/PBBSCNursing' },
  { title: 'GNM Nursing', image: '/assets/img/courses/course-6.jpg', link: '/Courses/Nursing/GNMNursing' },
];

export default function BSCNursing() {
  return (
    <CourseLayout
      breadcrumbBg="/assets/img/infobanner/infobanner-4.jpg"
      pageName="B.Sc. Nursing"
      mainImage="/assets/img/courses/course-1.jpg"
      mainImageAlt="B.Sc. Nursing Course"
      prospectusLink="/Sowrabha-Prospectus.pdf"
      lastUpdate="May 19, 2024"
      heading="About this course"
      description="The course of study shall extend over 4 academic years from the date of commencement of his/her study of the subjects comprising the nursing curriculum to the date of completion of the examination. Terms and vacations shall be as notified by the university from time to time."
      eligibility="The Minimum education requirement shall be the passing of a B.Sc. Nursing/Post Basic B.Sc. Nursing with a minimum of 55% aggregate marks. Minimum one year of work experience after Basic B.Sc. Nursing. Minimum one year of work experience before or after Post Basic B.Sc. Nursing"
      approvals="Indian Nursing Council ( INC ), Karnataka Nursing Council ( KNC )"
      duration="4 Years"
      applyLink="https://enlight-admission-form.vercel.app"
      enquiryLink="https://enlight-enquiry-form.vercel.app"
      documents={['10th / 12th Marksheet', '10th / 12th Admit Card', 'Aadhhar Copy', 'Migration']}
      otherCourses={otherCourses}
    />
  );
}
