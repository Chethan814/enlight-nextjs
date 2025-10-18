// app/nursing/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: "Nursing Programs - Enlight Group of Institutions",
  description: "Explore our comprehensive nursing programs including GNM, B.Sc, M.Sc, and PB BSc Nursing at Enlight Group of Institutions.",
};

const nursingPrograms = [
  {
    id: 1,
    title: "GNM Nursing",
    duration: "3 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-6.jpg",
    description: "GNM referred to as General Nursing and Midwifery deals with the education of nurses in general health care, nursing, and...",
    link: "/Courses/Nursing/GNMNursing"
  },
  {
    id: 2,
    title: "B.SC Nursing",
    duration: "4 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-1.jpg",
    description: "The course of study shall extend over 4 academic years from the date of commencement of his/ her study of...",
    link: "/Courses/Nursing/bScNursing"
  },
  {
    id: 3,
    title: "M.SC Nursing",
    duration: "2 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-2.jpg",
    description: "MSc Nursing will prepare Nurses, to improve the quality of nursing education and practice, in India. It will build upon...",
    link: "/Courses/Nursing/MSCNursing"
  },
  {
    id: 4,
    title: "PBBSc Nursing",
    duration: "2 Years",
    seats: "20 seats left",
    image: "/assets/img/courses/course-5.jpg",
    description: "The B.Sc Nursing (Post certificate) course of study shall extend over a period of 2 academic years from the date...",
    link: "/Courses/Nursing/PBBSCNursing" 
  }
];

const Nursing = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-7.jpg' pageName='Nursing Programs' />
     

      {/* Nursing Programs Grid */}
      <div className="gridarea sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {nursingPrograms.map((program) => (
              <div key={program.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                <div className="gridarea__wraper h-100" style={{ 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}>
                  <div className="gridarea__img" style={{ position: 'relative', height: '250px' }}>
                    <Link href={program.link}>
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </Link>
                    <div className="gridarea__small__button" style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      right: '20px' 
                    }}>
                      <div className="grid__badge" style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        Nursing
                      </div>
                    </div>
                  </div>
                  <div className="gridarea__content p-4" style={{ height: 'calc(100% - 250px)', display: 'flex', flexDirection: 'column' }}>
                    <div className="gridarea__list mb-3">
                      <ul className="d-flex justify-content-between" style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: 0,
                        borderBottom: '1px solid #eee',
                        paddingBottom: '15px'
                      }}>
                        <li className="d-flex align-items-center">
                          <i className="icofont-chair me-2"></i> {program.seats}
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="icofont-clock-time me-2"></i> {program.duration}
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading mb-3">
                      <h3 style={{ 
                        fontSize: '22px', 
                        marginBottom: '10px' 
                      }}>
                        <Link href={program.link} style={{ 
                          color: '#333', 
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}>
                          {program.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="mb-4" style={{ flex: 1 }}>
                      <p style={{ 
                        color: '#666', 
                        lineHeight: '1.6',
                        marginBottom: '0'
                      }}>
                        {program.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link href={program.link} className="d-inline-flex align-items-center" style={{ 
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}>
                        Apply Now <i className="icofont-long-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nursing;