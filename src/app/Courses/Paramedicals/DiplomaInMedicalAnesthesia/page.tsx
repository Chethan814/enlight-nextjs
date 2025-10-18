import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'Diploma in Medical Lab Technology', image: '/assets/img/service/facility-16.jpg', link: '/Courses/Paramedicals/DMLT' },
  { title: 'Diploma in Radio Imaging Technology', image: '/assets/img/courses/dmxt.jpg', link: '/Courses/Paramedicals/DMXT' },
  { title: 'Diploma in Cardiac Care Technology', image: '/assets/img/courses/dmot.jpg', link: '/Courses/Paramedicals/DMOT' },
];

export default function DiplomaInMedicalAnesthesia() {
  return (
    <CourseLayout
      breadcrumbBg="/assets/img/infobanner/infobanner-2.jpg"
      pageName="Diploma in Medical Anesthesia Technology (DOT/DAT)"
      mainImage="/assets/img/service/facility-9.jpg"
      mainImageAlt="Diploma in Medical Anesthesia Technology"
      prospectusLink="javascript:void(0);" // Replace with actual download link
      lastUpdate="May 19, 2024"
      heading="About this course"
      description="The Diploma in Operation Theatre Technology (DOT) and Diploma in Anesthesia Technology (DAT) is a comprehensive program that trains students to assist medical professionals in operation theaters and anesthesia procedures. The course combines theoretical knowledge with practical training in handling anesthesia equipment and maintaining operation theater environments."
      eligibility="Candidates must have passed 10+2 with Physics, Chemistry, and Biology (PCB) with a minimum of 45% aggregate marks from a recognized board."
      approvals="Paramedical Board, Karnataka"
      duration="2 Years"
      applyLink="https://enlight-admission-form.vercel.app"
      enquiryLink="https://enlight-enquiry-form.vercel.app"
      documents={['10th / 12th Marksheet', '10th / 12th Admit Card', 'Aadhar Copy', 'Migration Certificate']}
      otherCourses={otherCourses}
    />
  );
}
