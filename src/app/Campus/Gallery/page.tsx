'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './GalleryStyle.css';
import Breadcrumb from '@/app/components/common/Breadcrumb';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryItem[] = [
  { id: 1, src: '/assets/img/gallery/gallery-1.jpg', alt: 'Gallery Image 1', width: 370, height: 300 },
  { id: 2, src: '/assets/img/gallery/gallery-2.jpg', alt: 'Gallery Image 2', width: 370, height: 300 },
  { id: 3, src: '/assets/img/gallery/gallery-3.jpg', alt: 'Gallery Image 3', width: 370, height: 300 },
  { id: 4, src: '/assets/img/gallery/gallery-4.jpg', alt: 'Gallery Image 4', width: 370, height: 300 },
  { id: 5, src: '/assets/img/gallery/gallery-5.jpg', alt: 'Gallery Image 5', width: 370, height: 300 },
  { id: 6, src: '/assets/img/gallery/gallery-6.jpg', alt: 'Gallery Image 6', width: 370, height: 300 },
  { id: 7, src: '/assets/img/gallery/gallery-7.jpg', alt: 'Gallery Image 7', width: 370, height: 300 },
  { id: 8, src: '/assets/img/gallery/gallery-8.jpg', alt: 'Gallery Image 8', width: 370, height: 300 },
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* Breadcrumb Section (same as before) */}
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-3.jpg' pageName='Gallery' />
      

      {/* Gallery grid */}
      <div className="gallery">
        <div className="container-fluid full__width__padding sp_top_100 sp_bottom_100">
          <div className="blogsidebar__content__wraper__2">
            <div className="photo__gallery__img">
              {galleryImages.map((img, idx) => (
                <div key={img.id} className="single__gallery__img">
                  <div
                    className="gallery__image__wrapper"
                    onClick={() => openModal(idx)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <div className="gallery__icon">
                      <FaEye className="gallery__icon__eye" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <button className="modal-prev" onClick={showPrev}>
              <FaChevronLeft />
            </button>
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={galleryImages[currentIndex].width}
              height={galleryImages[currentIndex].height}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
            <button className="modal-next" onClick={showNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

    </>
  );
}
