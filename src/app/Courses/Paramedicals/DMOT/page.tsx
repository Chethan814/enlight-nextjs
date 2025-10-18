import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'Diploma in Medical Laboratory Technology', image: '/assets/img/service/facility-16.jpg', link: '/Courses/Paramedicals/DMLT' },
  { title: 'Diploma in Medical Anesthesia Technology', image: '/assets/img/service/facility-9.jpg', link: '/Courses/Paramedicals/DiplomaInMedicalAnesthesia' },
  { title: 'Diploma in Medical Imaging/X-ray Technology', image: '/assets/img/courses/dmxt.jpg', link: '/Courses/Paramedicals/DMXT' },
];

export default function DMOT() {
  return (
    <CourseLayout
      breadcrumbBg="/assets/img/infobanner/infobanner-5.jpg"
      pageName="Diploma in Medical Operation Technology (DMOT)"
      mainImage="/assets/img/courses/dmot.jpg"
      mainImageAlt="Diploma in Medical Operation Technology"
      prospectusLink="javascript:void(0);" // Replace with actual prospectus link
      lastUpdate="May 19, 2024"
      heading="About this course"
      description="DMOT is a two-year diploma program designed to create trained and qualified professionals who assist medical professionals in operation theatres, intensive care units, and emergency departments. The safety and success of surgical procedures rely heavily on the expertise of these technicians."
      eligibility="Candidates must have passed 10+2 with Physics, Chemistry, and Biology (PCB) with a minimum of 45% aggregate marks from a recognized board."
      approvals="Paramedical Board, Karnataka"
      duration="2 Years"
      applyLink="https://enlight-admission-form.vercel.app"
      enquiryLink="https://enlight-enquiry-form.vercel.app"
      documents={['10th / 12th Marksheet', '10th / 12th Admit Card', 'Aadhar Copy', 'Migration Certificate' ,'12 Pic Colour Passport size Photo']}
      otherCourses={otherCourses}
    />
  );
}
