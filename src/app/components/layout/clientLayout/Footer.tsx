import Link from "next/link"

export default function Footer() {
    return (
        <div className="footerarea">
          <div className="container">
            <div className="footerarea__newsletter__wraper">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12" data-aos="fade-up">
                  <div className="footerarea__text">
                    <h3>Looking For Best Place To Admission In <span>Nursing Courses</span> !</h3>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12" data-aos="fade-up">
                  <div className="footerarea__newsletter">
                    <div className="footerarea__newsletter__input">
                      <form action="#">
                        <div className="footerarea__newsletter__button text-sm-end text-start">
                          <Link href="/apply" className="subscribe__btn">Apply Now</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerarea__wrapper footerarea__wrapper__2">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                  <div className="footerarea__inner footerarea__about__us">
                    <div className="footerarea__heading">
                      <h3>About us</h3>
                    </div>
                    <div className="footerarea__content">
                      <p>ENLIGHTGROUP OF INSTITUTIONS is one of the best nursing college in Bangalore.
                        It&apos;s recognized by INC & KNC, PCI, Affiliated to RGUHS, Bangalore, Karnataka</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                  <div className="footerarea__inner">
                    <div className="footerarea__heading">
                      <h3>Our Institutes</h3>
                    </div>
                    <div className="footerarea__list">
                      <ul>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="/sowrabha-institute-of-nursing-sciences">Sowrabha Institute of Nursing Sciencess</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="/enlight-institute-of-paramedical-sciences">Enlight Institute of Para Medical Sciences</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="/enlight-school-of-nursing">Enlight school of Nursing </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="/sri-shantidhama-school-of-nursing">Sri Shantidhama School of Nursing</a>
                        </li>
                      </ul>
                      <hr className="hr-border" />
                      <ul>
                        <li>
                          <i className="icofont-file-document"></i>
                          <a target="_blank" href="https://enlight-admission-form.vercel.app">Online Admission</a>
                        </li><br />
                        <li>
                          <i className="icofont-ui-user"></i>
                          <a target="_blank" href="javascript:void(0);"> Employee Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6" data-aos="fade-up">
                  <div className="footerarea__inner">
                    <div className="footerarea__heading">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="footerarea__list">
                      <ul>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">Online Application</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a target="_blank" href="https://apps.eduwego.in/student-enquiry/enlight-group-of-institutions">Online Enquirey</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">Contact Us</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a target="_blank" href="https://enlight-admission-form.vercel.app">Online Admission</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">Login Partners</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">Login College Admin</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">Login Employee</a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right"></i>
                          <a href="javascript:void(0);">WEBMAIL login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                  <div className="footerarea__right__wraper footerarea__inner">
                    <div className="footerarea__heading">
                      <h3>Get In Touch</h3>
                    </div>
                    <div className="footerarea__right__list">
                      <ul>
                        <li>
                          <a href="#">
                            <div className="footerarea__right__img">
                              <i className="fs-5 icofont-phone"></i>
                            </div>
                            <div className="footerarea__right__content">
                              <span>+91-9916073632</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="footerarea__right__img">
                              <i className="fs-5 icofont-mobile-phone"></i>
                            </div>
                            <div className="footerarea__right__content">
                              <span>+91-8029556773</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="footerarea__right__img">
                              <i className="fs-5 icofont-email"></i>
                            </div>
                            <div className="footerarea__right__content">
                              <span>infoenlightnursing@gmail.com</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="footerarea__right__img">
                              <i className="fs-5 icofont-location-pin"></i>
                            </div>
                            <div className="footerarea__right__content">
                              <span>82/17, Tavarekere Village Bangalore South Taluk, Karnataka -562130</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
              <div className="row">
                <div className="col-xl-9 col-lg-9">
                  <div className="footerarea__copyright__content footerarea__copyright__content__2">
                    <p>Copyright &copy; <span>2024</span> || All Right Reserved Enlight Group of Institutions | Design & Developed by EDUWEGO</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="footerarea__icon footerarea__icon__2">
                    <ul>
                      <li><a title="Facebook" href="https://www.facebook.com/sovamjamatiaofficial" target="_blank"><i className="icofont-facebook"></i></a></li>
                      <li><a title="Twitter" href="https://x.com/of_enlight?t=IIT52UV_BZ1hzOkmeuhHGQ&s=08"><i className="icofont-twitter"></i></a></li>
                      <li><a title="Instagram" href="https://www.instagram.com/enlightgroupofinstitutions2024/"><i className="icofont-instagram"></i></a></li>
                      <li><a title="Youtube" href="https://www.youtube.com/@enlightgroupofinstitutions8290"><i className="icofont-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}