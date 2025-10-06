import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import '../../public/assets/css/style.css'
import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/aos.min.css'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/icofont.min.css'
import '../../public/assets/css/magnific-popup.css'
import '../../public/assets/css/slick.css'
import '../../public/assets/css/swiper-bundle.min.css'
import '../../public/css/app.css'
import Wrapper from './components/layout/mainLayout/wrapper'    

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
  description: 'Enlight Group of Institutions - Leading provider of Nursing and Paramedical education with direct admission opportunities.',
  keywords: 'nursing admission, paramedical courses, BSc nursing, GNM, medical laboratory technology, medical imaging, medical anesthesia technology, direct admission, healthcare education',
  authors: [{ name: 'Enlight Group of Institutions' }],
  metadataBase: new URL('https://enlight.eduwego.in'),
  openGraph: {
    title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
    description: 'Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://enlight.eduwego.in/',
    images: ['/assets/img/logo/enlight-group-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
    description: 'Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more.',
    images: ['/assets/img/logo/enlight-group-logo.png'],
  },
  icons: {
    icon: [
      { url: '/cropped-Logo-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/cropped-Logo-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/cropped-Logo-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/cropped-Logo-192x192.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Wrapper>
          {children}
        </Wrapper>

        {/* Core JavaScript Dependencies - Load in order */}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" />
        <Script src="/assets/js/popper.min.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/js/swiper-bundle.min.js" />
        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/waypoints.min.js" />
        <Script src="/assets/js/jquery.counterup.min.js" />
        <Script src="/assets/js/jquery.meanmenu.min.js" />
        <Script src="/assets/js/jquery.scrollUp.min.js" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" />
        <Script src="/assets/js/isotope.pkgd.min.js" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" />
        <Script src="/assets/js/slick.min.js" />
        <Script src="/assets/js/plugin_plyr.js" />
        <Script src="/assets/js/plugins.js" />
        <Script src="/assets/js/ajax-form.js" />

        {/* Main JavaScript - Load last */}
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}
