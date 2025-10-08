'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Default gallery images
export const defaultGalleryImages = [
  { id: 1, src: '/assets/img/gallery/gallery-1.jpg', alt: 'Gallery Image 1', width: 370, height: 300 },
  { id: 2, src: '/assets/img/gallery/gallery-2.jpg', alt: 'Gallery Image 2', width: 370, height: 300 },
  { id: 3, src: '/assets/img/gallery/gallery-3.jpg', alt: 'Gallery Image 3', width: 370, height: 300 },
  { id: 4, src: '/assets/img/gallery/gallery-4.jpg', alt: 'Gallery Image 4', width: 370, height: 300 },
  { id: 5, src: '/assets/img/gallery/gallery-5.jpg', alt: 'Gallery Image 5', width: 370, height: 300 },
  { id: 6, src: '/assets/img/gallery/gallery-6.jpg', alt: 'Gallery Image 6', width: 370, height: 300 },
  { id: 7, src: '/assets/img/gallery/gallery-7.jpg', alt: 'Gallery Image 7', width: 370, height: 300 },
  { id: 8, src: '/assets/img/gallery/gallery-8.jpg', alt: 'Gallery Image 8', width: 370, height: 300 },
];

export interface GalleryItem {
  id: number | string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryGridProps {
  images?: GalleryItem[]; // Make images optional
  className?: string;
  imageClassName?: string;
  modalClassName?: string;
}

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentImage: GalleryItem;
}

const GalleryImage = ({ src, alt, width, height, onClick }: GalleryImageProps) => (
  <div className="single__gallery__img">
    <div className="gallery__image__wrapper" onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
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
);

const GalleryModal = ({
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentImage,
}: GalleryModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <button className="modal-prev" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          style={{
            maxWidth: '90vw',
            maxHeight: '80vh',
            objectFit: 'contain',
          }}
        />
        <button className="modal-next" onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export const GalleryGrid = ({
  images = defaultGalleryImages, // Use default images if none provided
  className = '',
  imageClassName = '',
  modalClassName = '',
}: GalleryGridProps = {}) => {
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
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={`gallery ${className}`}>
      <div className="container-fluid full__width__padding sp_top_100 sp_bottom_100">
        <div className="blogsidebar__content__wraper__2">
          <div className="photo__gallery__img">
            {images.map((img, idx) => (
              <div key={img.id} className={imageClassName}>
                <GalleryImage
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  onClick={() => openModal(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={modalClassName}>
          <GalleryModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onPrev={showPrev}
            onNext={showNext}
            currentImage={images[currentIndex]}
          />
        </div>
      )}
    </div>
  );
};
