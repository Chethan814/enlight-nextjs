import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Institute {
  img: string
  name: string
  link: string
  description?: string
}

const institutes: Institute[] = [
  {
    img: "/assets/img/courses/course-5.jpg",
    name: "Sowrabha Institute of Nursing Sciences",
    link: "/sowrabhaIns",
  },
  {
    img: "/assets/img/courses/course-6.jpg",
    name: "Enlight Institute of Para Medical Sciences",
    link: "/englightIns",
  },
  {
    img: "/assets/img/courses/course-7.jpg",
    name: "Enlight School of Nursing",
    link: "/enlightSchool",
  },
  {
    img: "/assets/img/courses/course-8.jpg",
    name: "Sri Shantidhama School of Nursing",
    link: "/enlightSchool",
  },
]

export default function Institutes({ isClient }: { isClient: boolean }) {
  return (
    <div className="blogarea__2 sp_top_40 sp_bottom_70">
      <div className="container-fluid full__width__padding">
        <div className="row">
          <div className="col-xl-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="section__title__2 text-center teamarea__margin">
              <div className="section__small__title">
                <span>Institutes</span>
              </div>
              <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                <h2>Our Best Institutes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {institutes.map((inst, idx) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
              {...(isClient ? { 'data-aos': 'fade-up' } : {})}
              key={idx}
            >
              <div className="single__blog__wraper">
                <div className="single__blog__img">
                  <div style={{ width: '20vw', height: '30vh' }} >
                    <Image
                      src={inst.img}
                      alt={`${inst.name} Institute`}
                      fill
                      sizes=""
                      className='object-contain w-full h-full'
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        padding:'10px'
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="single__blog__content">
                  <p>Enlight Group of Institutions</p>
                  <h4>
                    <Link href={inst.link}>
                     {inst.name}
                    </Link>
                  </h4>
                  <div className="single__blog__bottom__button">
                    <a href={inst.link}>
                      Explore More <i className="icofont-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}