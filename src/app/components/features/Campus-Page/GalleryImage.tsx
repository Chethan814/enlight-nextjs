import Image from 'next/image';
import { FaEye } from 'react-icons/fa';

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
}

export const GalleryImage = ({ src, alt, width, height, onClick }: GalleryImageProps) => (
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
