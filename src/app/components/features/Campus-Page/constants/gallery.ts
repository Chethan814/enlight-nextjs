export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryItem[] = [
  { id: 1, src: '/assets/img/gallery/gallery-1.jpg', alt: 'Gallery Image 1', width: 370, height: 300 },
  { id: 2, src: '/assets/img/gallery/gallery-2.jpg', alt: 'Gallery Image 2', width: 370, height: 300 },
  { id: 3, src: '/assets/img/gallery/gallery-3.jpg', alt: 'Gallery Image 3', width: 370, height: 300 },
  { id: 4, src: '/assets/img/gallery/gallery-4.jpg', alt: 'Gallery Image 4', width: 370, height: 300 },
  { id: 5, src: '/assets/img/gallery/gallery-5.jpg', alt: 'Gallery Image 5', width: 370, height: 300 },
  { id: 6, src: '/assets/img/gallery/gallery-6.jpg', alt: 'Gallery Image 6', width: 370, height: 300 },
  { id: 7, src: '/assets/img/gallery/gallery-7.jpg', alt: 'Gallery Image 7', width: 370, height: 300 },
  { id: 8, src: '/assets/img/gallery/gallery-8.jpg', alt: 'Gallery Image 8', width: 370, height: 300 },
];
