'use client';

import './GalleryStyle.css';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import { GalleryGrid } from '@/app/components/features/Campus-Page/GalleryGrid';

export default function Gallery() {
  return (
    <>
      <Breadcrumb bgImage='/assets/img/infobanner/infobanner-3.jpg' pageName='Gallery' />
      <GalleryGrid />
    </>
  );
}
