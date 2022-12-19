import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { FaRupeeSign, FaCity, FaSmile, FaUserPlus, FaUserTie, FaCalendarAlt, FaComment, FaGooglePlay, FaApple, FaSuitcase, FaPlus } from "react-icons/fa";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Video from 'react-responsive-video';
import dateFormat from 'dateformat';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function Home() {
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    document.querySelector('.css-a6be9g').loop = false;
  })

  useEffect(() => {
    Axios.get('https://bfccapital.com/blog/wp-json/wp/v2/posts?per_page=3').then(res => {
      console.log("hello", res.data)
      setBlogs(res.data)
    })

  }, [])




  return (
    <>
      {/* ====================  Slider  Section Start ================== */}
      <section className="home-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch header-content-wrapper">
              <div className="align-self-center">
                <div className="header-content">
                  <h1 className="header-title">Delivering Peace of Mind  <span className="sub-title"><br /> Since 2 Decades </span></h1>
                  <div className="header-description mb-24">
                    <p className="pb-3">Building investor trust is one thing, maintaining it is another. We strive for both, and that's why today, we are the biggest mutual fund distributor in Uttar Pradesh.</p>
                  </div>
                </div>
                <div className="pb-4">
                <a href='https://bfccapital.com/prodigypro/' target={"_blank"}> <Button className="btn3" variant="outline-primary"> Get Started</Button></a> 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Carousel interval={6000} controls={false} className="home-slider">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assets/img/usp.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assets/img/bfc-in-number.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Slider Section End ================== */}
      {/* ====================  Bfc Advantage Section  Start ================== */}
      <section className="bfc-advantage pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6  text-center">
              <h4 className="bfc-advantage-top-text mb-2">BFC Advantage</h4>
              <p className="pb-4 ">Invest smart! Give your investments the BFC Advantage </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"> <img src="../assets/img/icon/businessman.png" className="img-fluid bfc-adv-img" /></span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Periodic Portfolio Review <br /></span>
                          Nothing's a certainty, not even the returns you earn. That's why, twice a year, we give your portfolio a much-needed health checkup and fish out the bad investments</a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/puzzle.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Tailormade Solutions<br /></span>
                          The one size fits all approach doesn't usually work in investing. Make informed financial decisions based on the solutions tailored to complement your priorities. </a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/select-all.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Algorithm-based Scheme Selection <br /></span>
                          Invest in schemes shortlisted by our superior AI-driven algorithm after factoring in mandatory quality, industry parameters, and investor priorities.</a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <hr />
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/wealth.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Competent Wealth Managers <br /></span>
                          We pick the best of talent from the industry as that's what we want to offer each and every one of our clients - The Best ! </a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/inflation.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Regular Profit Booking  <br /></span>
                          We don't let market volatility erode our client's profit - By using internal parameters we book profits regularly </a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-md-4 col-lg-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/apps.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">App with 3 S Benefits<br /></span>
                          Buy, Track & Sell Mutual Funds on the go with Prodigy Pro - BFC's Mobile App with 3 S benefits : Speed | Safety | Simplicity</a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <hr />
            <div className="col-lg-4 col-md-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/interest-rate.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Capital Gain Immunization <br /></span>
                          Not all profits are taxable. With access to the right advice and the will to act on it, you can save more on taxes than you initially thought. </a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-lg-4 col-md-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/management.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Market Savvy Research Team <br /></span>
                          A team that follows the markets with relentless diligence and is alert to every spike and drop in the charts, so you stay ahead of the curb at all times.</a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-lg-4 col-md-4">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="bfc-adv-section">
                  <div className="bfc-advantage-info">
                    <span className="bfc-adv-content">
                      <span className="bfc-adv-icon"><img src="../assets/img/icon/gain.png" className="img-fluid bfc-adv-img" /> </span>
                      <span className="bfc-adv-text">
                        <a href="#"><span className="font-5 pb-3">Tactical Calls  <br /></span>
                          Gain access to the short-term calls our research team offers and maximise your returns by investing in sectors that are likely to attract profits in the near future.</a>
                      </span>
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* ====================  Bfc Advantage Section End ================== */}
      {/* ====================  investing-process Section Start ================== */}
      <section className="investing-process text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h4 className="circle-program-top-text mb-2">A Seamless & User-Friendly Investor Experience</h4>
              <p className="text-center"></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Video loop={false} mp4={`../assets/img/inventment.mp4`} preload="false" />
             
            </div>
          </div>
          <Button className="btn3" variant="outline-primary"> Get Started</Button>{' '}
        </div>
      </section>
      {/* ====================  investing-process Section End ================== */}
      {/* ====================  Mobile App Section Start ================== */}
      <section id="download-app" className="download-app section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="download-inner">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="text-content animate__animated animate__fadeIn animate__delay-200ms">
                      <h2>Prodigy Pro</h2>
                      <h4 className="pb-3">A Quick, Simple & Paperless Investing Experience </h4>
                      
                      <p>The quickest and safest way to invest in Mutual Funds. </p>
                      <p>Invest, manage and monitor your money from the comfort of your home.</p>
                      <p>Hit the icon below to download.</p>
                    </div>
                    <div className="button mt-sm-5">
                      <a href="#!" className="btn  animate__animated animate__zoomIn animate__delay-200ms" ><FaGooglePlay className='i' />Google Play</a>
                      <a href="#!" className="btn  animate__animated animate__zoomIn animate__delay-200ms" ><FaApple className='i' />App Store</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 ">
                    <div className="app-mockup">
                      <AnimationOnScroll animateIn="animate__zoomIn" animateOut='animate__zoomIn'>
                        <img src="../assets/img/phone.png" alt="#" className='app-img img-fluid' />
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================  Mobile App Section End ================== */}
      {/* ====================  Sticky Section  Start ================== */}
      <section className='stiky'>
        <article>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title-section">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="sidebar-section show-bg-image">
                  <div className="sidebar-item sticky-top">
                    <div className="sidebar-content">
                      <img src="../assets/img/logo.png" className="img-fluid" />
                      <h2 className='sidebar-heading pb-4'>Why choose us?</h2>
                      <a href='/contact-us'><Button className="btn2" variant="outline-primary"> Contact Us</Button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="content-section">
                  <div className="row justify-content-end">
                    <div className="col-md-12">
                      <h3>01</h3>
                      <h2>BFC in Numbers!</h2>
                      <p>We haven't come this far to only come this far </p>
                    </div>
                  </div>
                  <div className="row pb-50">
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaRupeeSign /></span>
                          </div>
                          <div className='content'>
                            <h2>7 Billion </h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Assets Under Management</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaCity /></span>
                          </div>
                          <div className='content'>
                            <h2>80</h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Cities</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaRupeeSign /></span>
                          </div>
                          <div className='content'>
                            <h2>300 Million</h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Assets in PMS</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaSmile /></span>
                          </div>
                          <div className='content'>
                            <h2>100</h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Institutional Client Base</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaUserPlus /></span>
                          </div>
                          <div className='content'>
                            <h2>12,000</h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Retail Client Base</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <div className="col-md-6">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className='content d-flex'>
                          <div className='icon'>
                            <span><FaUserTie /></span>
                          </div>
                          <div className='content'>
                            <h2>22</h2><span className="bfc-number-pluse-icon"><FaPlus /></span>
                            <p>Managers</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                  </div>
                  <hr></hr>
                  {/* ====================  Bfc Credentials Section End ================== */}
                  <div className="content-section-2 pt-80">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>02</h3>
                        <h2>Our Credentials!</h2>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-12">
                        <AnimationOnScroll animateIn="animate__zoomIn">
                          <div className='cred-content d-flex'>
                            <div className='cred-img '>
                              <img src="../assets/img/credential/credential-1.jpg" className="img-fluid" />
                            </div>
                            <div className='cred-text pt-2'>
                              <h5>AMFI Registered Mutual Fund Distributor</h5>
                              <p>ARN : 21399</p>
                            </div>
                          </div>
                        </AnimationOnScroll>
                      </div>
                      <hr />
                      <div className="col-md-12 ">
                        <AnimationOnScroll animateIn="animate__zoomIn">
                          <div className='cred-content d-flex'>
                            <div className='cred-img '>
                              <img src="../assets/img/credential/credential-2.jpg" className="img-fluid" />
                            </div>
                            <div className='cred-text pt-2'>
                              <h5>BSE Registered Mutual Fund Distributor</h5>
                              <p> No : 39180</p>
                            </div>
                          </div>
                        </AnimationOnScroll>
                      </div>
                      <hr />
                      <div className="col-md-12">
                        <AnimationOnScroll animateIn="animate__zoomIn">
                          <div className='cred-content d-flex'>
                            <div className='cred-img '>
                              <img src="../assets/img/credential/credential-3.png" className="img-fluid" />
                            </div>
                            <div className='cred-text pt-2'>
                              <h5>NSE Registered Mutual Fund Distributor</h5>
                              <p>No : MFS21399</p>
                            </div>
                          </div>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* ====================  Credential Section End ================== */}
                  <div className="content-section-2 pt-80">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>03</h3>
                        <h2>Testimonials</h2>
                        <p>Here’s what our clients have to say about us</p>
                      </div>
                    </div>
                    <Carousel controls={false} className="testimonial">
                      <Carousel.Item>
                        <div className="testimonial pb-5">
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <div className="testi-card">
                                <p className="post">
                                  <span><img className="quote-img" src="../assets/img/i06xx2I.png" /></span>
                                  <span className="post-txt">I have been a client of BFC Capital since 2011. Before this, I was into equity trading and faced huge losses due to the lack of proper advice. Also, I did not have any specific goal for investing. There were times when my portfolio was churned just for brokerage.At BFC Capital, my Wealth Manager understood my needs and guided me to invest as per my goals.  </span>
                                  <span><img className="nice-img" src="https://i.imgur.com/l5AkSHd.png" /></span>
                                </p>
                              </div>
                              <div className="arrow-down"></div>
                              <div className="row d-flex justify-content-center">
                                <div className="">
                                  <img className="profile-pic fit-image" src="../assets/img/Anand-Murti-Srivastava.webp" />
                                  <span className="profile-name">Mr. AnandMurti Srivastava</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testimonial pb-5">
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <div className="testi-card">
                                <p className="post">
                                  <span><img className="quote-img" src="../assets/img/i06xx2I.png" /></span>
                                  <span className="post-txt">I have been a client of BFC Capital since 2011. Before this, I was into equity trading and faced huge losses due to the lack of proper advice. Also, I did not have any specific goal for investing. There were times when my portfolio was churned just for brokerage.At BFC Capital, my Wealth Manager understood my needs and guided me to invest as per my goals.  </span>
                                  <span><img className="nice-img" src="https://i.imgur.com/l5AkSHd.png" /></span>
                                </p>
                              </div>
                              <div className="arrow-down"></div>
                              <div className="row d-flex justify-content-center">
                                <div className="">
                                  <img className="profile-pic fit-image" src="../assets/img/Virendra-Chandra-Singhal.webp" />
                                  <span className="profile-name">Virendra Chandra Singhal </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testimonial pb-5">
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <div className="testi-card">
                                <p className="post">
                                  <span><img className="quote-img" src="../assets/img/i06xx2I.png" /></span>
                                  <span className="post-txt">I have been a client of BFC Capital since 2011. Before this, I was into equity trading and faced huge losses due to the lack of proper advice. Also, I did not have any specific goal for investing. There were times when my portfolio was churned just for brokerage.At BFC Capital, my Wealth Manager understood my needs and guided me to invest as per my goals.</span>
                                  <span><img className="nice-img" src="https://i.imgur.com/l5AkSHd.png" /></span>
                                </p>
                              </div>
                              <div className="arrow-down"></div>
                              <div className="row d-flex justify-content-center">
                                <div className="">
                                  <img className="profile-pic fit-image" src="../assets/img/Neerja-Singh.webp" />
                                  <span className="profile-name">Dr. Neerja Singh </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* ====================  Sticky Section End ================== */}
      {/* ====================  Circle Program Section Start ================== */}
      <section className="circle-program-bg pb-50 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="circle-program-top-text mb-3">Quality Circle Programmes</h4>
              <p className="mb-4 text-center">An honest attempt to educate investors on the Dos and Don'ts of investing. </p>
            </div>
          </div>
        </div>
        <div className="circle-program">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel interval={4000} controls={false}>
                  <Carousel.Item className="pt-3 pb-2">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="circle-program-item d-md-flex">
                          <div className="circle-program-img" style={{ backgroundImage: `url("../assets/img/NTPC.png")` }}></div>
                          <div className="circle-program-content  p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                            <div className="circle-program-desc w-100">
                              <h2 className="pb-4">Best mutual funds - Reality or Myth</h2>
                              <p>Is there a thing called 'The Best Mutual Fund Scheme' ? Can an investor identify it once and then returns are guaranteed year after year ?  or does the 'Best Mutual Fund' changes every year ? These and several other myths were busted when we had a session with employees of NTPC.
                              </p>
                              <p className="pb-2"><span className="circle-program-p">Venue: </span> NTPC</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="pt-3 pb-2 animate__fadeOutDown">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="circle-program-item d-md-flex">
                          <div className="circle-program-img" style={{ backgroundImage: `url("../assets/img/PWD.png")` }}></div>
                          <div className="circle-program-content p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                            <div className="circle-program-desc w-100">
                              <h2 className="pb-4">Retirement Planning - Sar Utha Ke Jiyo</h2>
                              <p>Most people start planning for retirement either too late or they plan less than what they would actually need. Loan can be availed for child education or marriage but no entity offers a loan for retirement. These and a lot more key aspects were covered when we sat down with the employees of PWD.
                              </p>
                              <p className="pb-2"><span className="circle-program-p">Venue: </span> PWD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="pt-3 pb-2 animate__fadeOutDown">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="circle-program-item d-md-flex">
                          <div className="circle-program-img" style={{ backgroundImage: `url("../assets/img/LMRC.png")` }}></div>
                          <div className="circle-program-content p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                            <div className="circle-program-desc w-100">
                              <h2 className="pb-4">SIP - Kari Nahi To Pachtaoge</h2>
                              <p>In this session we briefed the participants of Lucknow Metro Rail Corporation on what is SIP, why they need to start it, when should one start and stop it, where to invest and how to start. We also explained how even a small SIP can turn into a huge corpus due to power of compounding.
                              </p>
                              <p className="pb-2"><span className="circle-program-p">Venue: </span> LMRC</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================  Circle Program Section End ================== */}
      {/* ==================== Bogs Section Start ================== */}
      <section className="bogs pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="blog-program-top-text mb-4">Our Blogs</h4>
            </div>
          </div>
          <div className="row">

            {
              blogs.map((val) => {
                return <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
                  <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="blog-item ">
                      <div className="blog-img">
                        <img src={val.yoast_head_json.og_image[0].url} className="img-fluid" />
                      </div>
                      <div className="blog-brief">
                        <h4 className="blog-title">
                          <a href={val.yoast_head_json.canonical}>{val.title.rendered}</a>
                        </h4>
                        <span className="blog-title-line"><hr></hr></span>
                        <div className="blog-date d-flex justify-content-between">
                          <p className="blog-date"> <FaCalendarAlt /> &nbsp; {dateFormat(val.date, "mmmm dS, yyyy")}</p>
                          <p className="blog-comment"> <FaComment />21</p>
                        </div>
                        <p>{val.excerpt.rendered.replace('<p>', '').replace('&#8217;', "'").split(" ").slice(0, 14).join(" ").replace(/(<([^>]+)>)/ig, '')}...</p>
                        <div className="blog-btn">
                          <a href={val.yoast_head_json.canonical}>READ MORE</a>
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </div>
              })
            }
          </div>
        </div>
      </section>
      {/* ====================  Bogs Section End ================== */}
      {/* ==================== Eaq Section Start ================== */}
      <section className="fqa pt-50 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-4">
              <h4 className="fqa-top-text mb-4 pt-3">Frequently Asked Questions</h4>
              {/* <p className="mb-5">We have conducted 200+ presentations on Financial Planning. Check out some prominent ones here</p> */}
            </div>
          </div>
          <div className="row">
            <div className=" col-md-7">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <Accordion>
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header> Why should I associate with BFC and not with a Leading Bank or Mutual Fund Distributor ? </Accordion.Header>
                    <Accordion.Body>
                      Promoting Mutual Funds or any other third party financial produt is an extended task for a  bank.Banks usually leverage investor confidence they enjoy and make extra revenue by selling these products. BFC Capital, work on its philosophy of providing customised financial solutions instead of selling a finacial product for the want of revenue. On this basis of this we, over last 20-odd years, have built more than twelve thousand-strong retail client base.  We try to provide our clients insights to protect investors from any probable financial harm and give them nesessary incight to take an informed investment decision. We understand that money matters are sensitive and give our investors the personal care they deserve, from periodic portfolio reviews to financial solutions tailored to match investor obligations. This is why today, we are one of the leading wealth management companies in North India and the biggest in Uttar Pradesh.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header> BFC does not have an office in my city. How will things function smoothly ? </Accordion.Header>
                    <Accordion.Body>
                      Recent era of pandemic has evolved a new world which is more comfortable in doing things from one's home. Investments has no exception from this. BFC Capital believes in moving with the times, and thanks to this belief, we are presently servicing clients in more than 25 cities in India and abroad through PRODIGY PRO, a versatile digital platform designed for facilitating investments over the internet. The app has multifaceted encryption to secure all investor transactions and data. Also, we have at our disposal a team of competent technicians, coders and programmers to ensure a hassle-free experience for our investors. Besides, Prodigy Pro comprises features and services aimed at investor ease, such as one-click redemption and real-time monitoring of transactions and portfolios. In addtion to this there is a support team available just at the distance of a call/e-mail.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>  If I invest with BFC would my fund go to them or some other company ? </Accordion.Header>
                    <Accordion.Body>
                      BFC Capital is an  intermediary facilitating investment-related transactions. Although we help monitor and manage our clients' investments, we do not have access to the money they invest. The   Industry structure does not leaves any scope for mismanagement of funds, i.e. the money dierectly invested from investor's bank account to the fund/scheme's account and Vice-versa .
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </AnimationOnScroll>
            </div>
            <div className="col-md-5 ">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <Accordion defaultActiveKey="">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header> Who all can invest with BFC ? </Accordion.Header>
                    <Accordion.Body>
                      BFC Capital offers client-centric services and insights to each of its  clients, from a housewife looking to invest the savings she pockets to a young professional planning his first car. Long story short, we have something for people from all walks of life. The only things you need to start investing are a valid ID (Aadhar & PAN) and a functional bank account.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>How would my service requests and issues get resolved ? </Accordion.Header>
                    <Accordion.Body>
                      Clients at BFC Capital are assigned qualified relationship  managers to provide all trype of support. For investor ease, we have designed a twin-layer response funnel, wherein the investors can reach out to their RM through WhatsApp or over call to resolve their issues. Additionally, they can report the issue by shooting a mail to customersupport@bfccapital.com. Usually, there is a response time of 24 working hours .
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header> How can I check my Portfolio ? </Accordion.Header>
                    <Accordion.Body>
                      Investors can check the real-time status of their entire household's accounts by accessing the "Portfolio" option on Prodigy Pro. Additionally, they can contact their relationship manager over a call or via WhatsApp and demand a detailed account statement.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* ====================  Eaq Section End ================== */}
      {/* ====================  Talk to Our Experts Section Start ================== */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7" id='mobile'>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="contact-image desktop-contact">
                  <img src="../assets/img/talk-to-expert.png" className="img-fluid" />
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-12 col-md-5 d-flex align-items-stretch contact-content-wrapper">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="align-self-center">
                  <div className="contact-content">
                    <h1 className="contact-title">
                      Talk to  Our Experts
                    </h1>
                    <p className="contact-description"> <a href="" className="number">+91-522-3514141</a> </p>
                    <p className="contact-whatapps"> <a href="https://wa.me/+917347700888"> <img src="../assets/img/whatsapp.png" className="img-fluid" /> &nbsp; +91-7347700888 </a> </p>
                    <p className="contact-whatapps"> <a href="https://mail.google.com/mail/u/0/?fs=1&to=customersupport@bfccapital.com&body=BODY&tf=cm"> <img src="../assets/img/gmail.png" className="img-fluid" /> &nbsp;  customersupport@bfccapital.com </a>
                    </p>
                    <p className="contact-description pb-3">Money matters are serious business.
                      <br />
                      Don’t take them lightly. Reach out to our <br />experts and make informed financial decisions.</p>
                  </div>
                  <div className="pt-2 pb-2">
                    <a href='https://bfccapital.com/prodigypro/registration' target={"_blank"}><Button className="btn3" variant="outline-primary"> Create an account</Button></a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-12 col-md-7" id='desktop'>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="contact-image desktop-contact">
                  <img src="../assets/img/talk-to-expert.png" className="img-fluid" />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Talk to Our Experts Section End ================== */}
    </>
  );
}
export default Home;