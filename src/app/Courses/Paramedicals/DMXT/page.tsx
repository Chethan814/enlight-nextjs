import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'Diploma in Medical Lab Technology', image: '/assets/img/service/facility-16.jpg', link: '/Courses/Paramedicals/DMLT' },
  { title: 'Diploma in Medical Anesthesia Technology', image: '/assets/img/service/facility-9.jpg', link: '/Courses/Paramedicals/DiplomaInMedicalAnesthesia' },
  { title: 'Diploma in Cardiac Care Technology', image: '/assets/img/courses/dmot.jpg', link: '/Courses/Paramedicals/DMOT' },
];

export default function DMXT() {
  return (
    <CourseLayout
      breadcrumbBg="/assets/img/infobanner/infobanner-3.jpg"
      pageName="Diploma in Medical Imaging/X-ray Technology (DMXT)"
      mainImage="/assets/img/courses/dmxt.jpg"
      mainImageAlt="Diploma in Medical Imaging/X-ray Technology"
      prospectusLink="javascript:void(0);" // Replace with actual download link
      lastUpdate="May 19, 2024"
      heading="About this course"
      description="The Diploma in Medical Imaging/X-ray Technology (DMXT) is designed to train students in diagnostic imaging techniques. The course provides both theoretical knowledge and practical training in X-ray and imaging procedures, ensuring proficiency in handling imaging equipment and assisting radiologists."
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
