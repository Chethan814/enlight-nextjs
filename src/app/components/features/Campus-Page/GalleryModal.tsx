import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const GalleryModal = ({
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
