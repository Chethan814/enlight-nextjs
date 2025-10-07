// app/about/director-message/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: "Director&apos;s Message - Enlight Group of Institutions",
  description: "Read the Director&apos;s message from Enlight Group of Institutions about our vision for education and student development.",
};

const DirectorMessage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-6.jpg' pageName='Director&apos;s Message' />

      {/* Director's Message Section */}
      <div className="aboutarea__5 sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <Image
                  src="/assets/img/about/director.jpg"
                  alt="Director - Enlight Group of Institutions"
                  width={600}
                  height={700}
                  className="img-fluid"
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__content__wraper__5 ps-lg-5">
                <div className="aboutarea__para__5">
                  <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    Greeting from ENLIGHT GROUP OF INSTITUTIONS. The Courses offered at EGI not only enable the students 
                    to gain knowledge but also develop their overall skills and personal attitude that shall empower them 
                    to achieve global recognition in their respective professional specialization. In keeping with our 
                    mission centered on academic excellence, our programs are designed with a good blend of classroom 
                    and Clinical learning, through our comprehensive suite of professional resources and wide range of 
                    clinical exposure.
                  </p>

                  <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    It is a challenge to the society to provide a sound foundation to students community by comprehensive 
                    technical education in our Modern society.
                  </p>

                  <div className="mt-5 pt-3">
                    <p className="mb-0" style={{ fontSize: '20px', fontWeight: '600' }}>Director</p>
                    <p className="text-muted" style={{ fontStyle: 'italic' }}>
                      Enlight Group Of Institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorMessage;