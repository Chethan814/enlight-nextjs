'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import HeroBanner from './components/features/Home-Page/HeroBanner'
import NewsNotices from './components/features/Home-Page/NewsNotices'
import Institutes from './components/features/Home-Page/Institutes'
import CoursesSlider from './components/features/Home-Page/CoursesSlider'
import Facilities from './components/features/Home-Page/Facilities'
import BrandArea from './components/features/Home-Page/BrandArea'
import AboutArea from './components/features/Home-Page/AboutArea'
import AnimatedContent from './components/features/Home-Page/AnimatedContent'
import Testimonials from './components/features/Home-Page/Testimonials'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)
  const swiperRef = useRef(null)
  const swiperThumbsRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    setIsClient(true)

    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true,
          offset: 100
        })
      })

      // Initialize Swiper after component mounts
      const initSwiper = async () => {
        try {
          const Swiper = (await import('swiper')).default
          const { Navigation, Pagination, Thumbs, Autoplay } = await import('swiper/modules')

          // Initialize thumbs slider first
          let thumbsSwiper = null
          if (swiperThumbsRef.current) {
            thumbsSwiper = new Swiper(swiperThumbsRef.current, {
              modules: [Navigation, Thumbs],
              spaceBetween: 10,
              slidesPerView: 3,
              freeMode: true,
              watchSlidesProgress: true,
              breakpoints: {
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              },
            })
          }

          // Initialize main slider with thumbs
          if (swiperRef.current) {
            new Swiper(swiperRef.current, {
              modules: [Navigation, Pagination, Autoplay, Thumbs],
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              thumbs: {
                swiper: thumbsSwiper,
              },
            })
          }
        } catch (error) {
          console.error('Swiper initialization error:', error)
          console.log('Swiper not available, using fallback slider')
        }
      }

      initSwiper()
    }
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* herobannerarea__section__start */}
      <HeroBanner />
      {/* herobannerarea__section__end */}

      {/* animate content start (not split yet) */}
      <AnimatedContent />
      {/* Animate Content End */}

      {/* About Area Section Start (not split yet) */}
      <AboutArea isClient={isClient} />
      {/* About Area Section End */}

      <NewsNotices isClient={isClient} />
      <Institutes isClient={isClient} />
      <CoursesSlider isClient={isClient} />
      <Facilities isClient={isClient} />
      <Testimonials />
      <BrandArea />

    </>
  )
}
