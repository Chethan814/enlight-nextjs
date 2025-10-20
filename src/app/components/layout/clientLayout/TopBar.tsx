"use client";
import React from 'react';
// import { FaPhone, FaEnvelope, FaUserAlt, FaFileAlt } from 'react-icons/fa';
// import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

const TopBar: React.FC = () => {
  return (
    <div className="topbararea">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="topbar__left">
                <ul>
                  <li>
                    <i className="icofont-phone"></i> +91-8029556773
                  </li>
                  <li>
                    <i className="icofont-email ms-2"></i> infoenlightnursing@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="topbar__right">
                <div className="topbar__text">
                  <div className="row justify-content-end">
                    <div className="col-sm-auto">
                      <div className="login-buttons">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://enlight.eduwego.in/student-login"
                          className="default__small__button__white mb-0 rounded p-1"
                        >
                          <i className="icofont-user-alt-1"></i>Student Login
                        </a>
                        <span className="text-white ms-1">|</span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                          className="default__small__button__white mb-0 rounded p-1 ms-1"
                        >
                          <i className="icofont-file-document me-1"></i>Online Admission
                        </a>
                        <span className="text-white ms-1">|</span>
                        <a
                          href="https://enlight-enquiry-form.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="default__small__button__white mb-0 rounded p-1 ms-1"
                        >
                          Enquiry Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topbar__list">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/sovamjamatiaofficial" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/of_enlight?t=IIT52UV_BZ1hzOkmeuhHGQ&s=08" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/enlightgroupofinstitutions2024/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@enlightgroupofinstitutions8290" target="_blank" rel="noopener noreferrer" title="Youtube">
                        <i className="icofont-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopBar;