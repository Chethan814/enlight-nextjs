import CourseLayout from '@/app/components/features/Courses-Page/CourseLayout';

const otherCourses = [
  { title: 'Diploma in Medical Anesthesia Technology', image: '/assets/img/service/facility-9.jpg', link: '/Courses/Paramedicals/DiplomaInMedicalAnesthesia' },
  { title: 'Diploma in Medical Imaging/X-ray Technology', image: '/assets/img/courses/dmxt.jpg', link: '/Courses/Paramedicals/DMXT' },
  { title: 'Diploma in Cardiac Care Technology', image: '/assets/img/courses/dmot.jpg', link: '/Courses/Paramedicals/DMOT' },
];

export default function DMLT() {
  return (
    <CourseLayout
      breadcrumbBg="/assets/img/infobanner/infobanner-4.jpg"
      pageName="Diploma in Medical Laboratory Technology (DMLT)"
      mainImage="/assets/img/service/facility-16.jpg"
      mainImageAlt="Diploma in Medical Laboratory Technology"
      prospectusLink="javascript:void(0);" // Replace with actual prospectus link
      lastUpdate="May 19, 2024"
      heading="About this course"
      description="The Diploma in Medical Laboratory Technology (DMLT) provides students with the knowledge and practical skills required to perform laboratory tests, analyze results, and assist in medical diagnostics. The course prepares professionals for a variety of roles in hospitals, research laboratories, and diagnostic centers."
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
