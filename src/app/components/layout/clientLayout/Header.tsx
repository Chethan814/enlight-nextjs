// components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isAccountMenuOpen) setIsAccountMenuOpen(false);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  // Define navigation item type
  type NavItem = {
    name: string;
    path: string;
    external?: boolean;
    download?: boolean;
    submenu?: NavItem[];
  };

  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '#',
      submenu: [
        { name: 'About ELGI', path: '/About/AboutElgi' },
        { name: "Director's Message", path: '/About/DirectorMessage' },
        { name: "Chairman's Message", path: '/About/ChairmanMessage' },
        { name: 'Principal Desk', path: '/About/PrincipalDesk' }
      ]
    },
    {
      name: 'Courses',
      path: '#',
      submenu: [
        { name: 'Nursing', path: '/Courses/Nursing' },
        { name: 'Paramedical', path: '/Courses/Paramedicals' }
      ]
    },
    {
      name: 'Admission',
      path: '#',
      submenu: [
        { name: 'Enquiry Now', path: '/Forms/Enquiry-Form', external: true },
        { name: 'Online Admission', path: '/Forms/Enlight-Admission', external: true },
        { name: 'Prospectus Download', path: '/assets/Sowrabha-Prospectus.pdf', external: true, download: true },
        { name: 'Application Form', path: '/assets/PDF/Enlight Final 2025.pdf', external: true, download: true }
      ]
    },
    {
      name: 'Institutions',
      path: '#',
      submenu: [
        { name: 'Sowrabha Institute of Nursing Sciences', path: '/Institutions/SowrabhaInstitute' },
        { name: 'Enlight Institute of Para Medical Sciences', path: '/Institutions/EnlightInstitute' },
        { name: 'Enlight School of Nursing', path: '/Institutions/EnlightSchool' },
        { name: 'Sri Shantidhama School of Nursing', path: '/Institutions/SantidhamaSchool' }
      ]
    },
    {
      name: 'Campus',
      path: '#',
      submenu: [
        { name: 'Hostel', path: '/Campus/Hostel' },
        { name: 'Gallery', path: '/Campus/Gallery' }
      ]
    },
    { name: 'Facilities', path: '/Facilities' },
    { name: 'Contacts', path: '/Contacts' }
  ];

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <header>
        <div className={`headerarea headerarea__3 header__sticky header__area`}>
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo ">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/enlight-group-logo.png"
                        alt="Enlight Group of Institutions"
                        fill
                        className='main-logo !w-[320px] !h-[90px] !object-contain '
                        priority
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-10 col-lg-10 main_menu_wrap">
                <div className="headerarea__main__menu">
                  <nav>
                    <ul className="d-flex align-items-center justify-content-end">
                      {navItems.map((item) => (
                        <li key={item.name} className={item.submenu ? 'has-dropdown' : ''}>
                          {item.submenu ? (
                            <>
                              <a className="headerarea__has__dropdown">
                                {item.name} <i className="icofont-rounded-down"></i>
                              </a>
                              <ul className="headerarea__submenu">
                                {item.submenu.map((subItem) => (
                                  <li key={subItem.name}>
                                    {subItem.external ? (
                                      <a
                                        href={subItem.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {subItem.name}
                                      </a>
                                    ) : (
                                      <Link href={subItem.path}>{subItem.name}</Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link href={item.path} className={pathname === item.path ? 'active' : ''}>
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="container-fluid mob_menu_wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/enlight-group-logo.png"
                      alt="Enlight Group"
                      fill
                      className='main-logo !w-[19rem] !h-[19rem] !translate-y-[9px] !translate-x-[16px] !object-contain '
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <div className="mobile-off-canvas">
                    <button
                      className="mobile-aside-button"
                      onClick={toggleMobileMenu}
                      aria-label="Toggle menu"
                    >
                      <i className="icofont-navigation-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-off-canvas-active ${isMobileMenuOpen ? 'inside' : ''}`}>
        <button
          className="mobile-aside-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <i className="icofont-close-line"></i>
        </button>
        <div className="header-mobile-aside-wrap">
          <div className="mobile-menu-wrap headerarea">
            <div className="mobile-navigation">
              <nav>
                <ul className="mobile-menu">
                  {navItems.map((item, index) => (
                    <li
                      key={`mobile-${item.name}`}
                      className={item.submenu ? 'menu-item-has-children' : ''}
                    >
                      {item.submenu ? (
                        <>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const allDropdowns = document.querySelectorAll<HTMLUListElement>('.mobile-menu .dropdown');

                              // Close all other dropdowns
                              allDropdowns.forEach((dropdown) => {
                                if (dropdown !== e.currentTarget.nextElementSibling) {
                                  dropdown.style.display = 'none';
                                }
                              });

                              // Toggle only this dropdown
                              const submenu = e.currentTarget.nextElementSibling as HTMLElement | null;
                              if (submenu) {
                                submenu.style.display =
                                  submenu.style.display === 'block' ? 'none' : 'block';
                              }
                            }}
                          >
                            {item.name} <i className="icofont-thin-down"></i>
                          </a>

                          <ul className="dropdown" style={{ display: 'none' }}>
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                {subItem.external ? (
                                  <a
                                    href={subItem.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={subItem.download}
                                  >
                                    {subItem.name}
                                  </a>
                                ) : (
                                  <Link href={subItem.path}>{subItem.name}</Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={item.path}>{item.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>

              </nav>
            </div>

            <div className="mobile-curr-lang-wrap">
              <div className="single-mobile-curr-lang">
                <a
                  className={`mobile-account-active ${isAccountMenuOpen ? 'active' : ''}`}
                  onClick={toggleAccountMenu}
                >
                  Logins <i className="icofont-thin-down"></i>
                </a>
                <div className={`lang-curr-dropdown ${isAccountMenuOpen ? 'account-dropdown-active' : ''}`}>
                  <ul>
                    <li>
                      <a
                        href="https://enlight.eduwego.in/student-login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Student Login
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Online Admission
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://enlight-enquiry-form.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquiry Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mobile-social-wrap">
              <a
                href="https://www.facebook.com/enlightgroup2020"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="icofont-facebook"></i>
              </a>
              <a
                href="https://x.com/of_enlight?t=IIT52UV_BZ1hzOkmeuhHGQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <i className="icofont-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/enlight_group?igsh=Z2Foc3c4b2hhOTkz"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="icofont-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Shadow */}
      <div>
        <div className="theme__shadow__circle"></div>
        <div className="theme__shadow__circle shadow__right"></div>
      </div>


    </>
  );
};

export default Header;