import React, {useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function Services() {
 
      const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      var settings1 = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      useEffect(() => {
        scrollToTop();
      });

  return (
    <div>
                        <body
        data-spy="scroll"
        data-target=".navbar"
        data-offset="100"
        className="ct1280"
      >
        <Header/>
        <section className="hero-section-1  agency-bg" id="home">
          <div className="blur-bg-blocks">
            <aside className="blur-bg-set">
              <div className="blur-bg blur-bg-a" />
              <div className="blur-bg blur-bg-b" />
              <div className="blur-bg blur-bg-c" />
            </aside>
          </div>
          <div className='text-center mb-5'>
            <h3 className='mt-5 mb-4'>Services</h3>
          <Link to="/">Home</Link> / <span>Services</span>
          </div>
          </section>

          {/* service */}

          <section className='mt-5 pt-5'>
          <div className="container">

            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="common-heading">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                  Provided Loans
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-5 mt-5">
              <div className="col-12">
                <div className="">
                  <Slider {...settings1}>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/homeloan.png" alt="icon" />
                        </div>
                        <p>
                          Home
                          <br /> Loans{" "}
                        </p>
                      </Link>
                    </div>

                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/umbrella.png" alt="icon" />
                        </div>
                        <p>
                          Credit
                          <br /> Loan
                        </p>
                      </Link>
                    </div>

                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/team.png" alt="icon" />
                        </div>
                        <p>
                          Personal
                          <br /> Loan
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/globe.png" alt="icon" />
                        </div>
                        <p>
                          Business
                          <br /> Loan
                        </p>
                      </Link>
                    </div>

                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/invest.png" alt="icon" />
                        </div>
                        <p>
                          Gold
                          <br /> Loan
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/piggy-bank.png" alt="icon" />
                        </div>
                        <p>
                          General
                          <br /> Loan
                        </p>
                      </Link>
                    </div>

                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/building.png" alt="icon" />
                        </div>
                        <p>
                          Education
                          <br /> Loan{" "}
                        </p>
                      </Link>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

        
            <div className="row justify-content-center text-center mt-5 pt-3 mb-5">
              <div className="col-lg-6">
                <div className="common-heading">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                   Provided Insurances
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col-12">
                <div className="">
                  <Slider {...settings1}>
                    <div className="servicecard text-center  up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/family.png" alt="icon" />
                        </div>
                        <p>
                          Family Health
                          <br /> Insurance
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/heart.png" alt="icon" />
                        </div>
                        <p>
                          Health
                          <br /> Insurance
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/health-care.png" alt="icon" />
                        </div>
                        <p>
                          Life
                          <br /> Insurance{" "}
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/bycicle.png" alt="icon" />
                        </div>
                        <p>
                          2 Wheeler
                          <br /> Insurance
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/car.png" alt="icon" />
                        </div>
                        <p>
                          Car
                          <br /> Insurance
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/invest.png" alt="icon" />
                        </div>
                        <p>
                          General
                          <br /> Insurance
                        </p>
                      </Link>
                    </div>
                    <div className="servicecard up-hor">
                      <Link to="/banks">
                        <div className="d-flex justify-content-center">
                          <img src="images/icons/homeloan.png" alt="icon" />
                        </div>
                        <p>
                          Home
                          <br /> Insurance{" "}
                        </p>
                      </Link>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="reviews-section pad-tb review-bg" id="review">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="common-heading">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Real Estate & Constraction
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt60">
              <div className="col-lg-12">
                <div className="owl-review-rtl owl-carousel mt45">
                  <Slider {...settings2}>
                    <div className="reviews-card up-hor">
                      <img
                        src="images/common/plot1.jpg"
                        style={{ width: "100%" }}
                        alt="review"
                      />
                      <a>
                        <h5 className="text-left ml-4 mt-4">
                          Sterling Heights{" "}
                        </h5>
                      </a>
                      <a className="text-left text-dark mt-3">
                        Trishala Infrastructure Pvt Ltd. Satamrai, Shamshabad,
                        Karmanghates, Hyderabad ...
                      </a>
                      <hr />
                      <div className="row p-0">
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                            <i class="fa fa-bed text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              3Beds
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-bath text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i><br/>
                         
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1">
                              2Bathrooms
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-cube text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              5x7 m2
                            </a>
                          </div>
                        </div>
                      </div><hr/>
                      <button
                        className="btn-rd123 mb-3"
                        style={{ width: "80%" }}
                      >
                        View More
                      </button>
                    </div>
                    <div className="reviews-card up-hor">
                      <img
                        src="images/common/plot2.jpg"
                        style={{ width: "100%" }}
                        alt="review"
                      />
                       <a>
                        <h5 className="text-left ml-4 mt-4">
                          Sterling Heights{" "}
                        </h5>
                      </a>
                      <a className="text-left text-dark mt-3">
                        Trishala Infrastructure Pvt Ltd. Satamrai, Shamshabad,
                        Karmanghates, Hyderabad ...
                      </a>
                      <hr />
                      <div className="row p-0">
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                            <i class="fa fa-bed text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              3Beds
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-bath text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i><br/>
                         
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1">
                              2Bathrooms
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-cube text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              5x7 m2
                            </a>
                          </div>
                        </div>
                      </div><hr/>
                      <button
                        className="btn-rd123 mb-3"
                        style={{ width: "80%" }}
                      >
                        View More
                      </button>
                    </div>
                    <div className="reviews-card up-hor">
                      <img
                        src="images/common/plot3.jpg"
                        style={{ width: "100%" }}
                        alt="review"
                      />
                        <a>
                        <h5 className="text-left ml-4 mt-4">
                          Sterling Heights{" "}
                        </h5>
                      </a>
                      <a className="text-left text-dark mt-3">
                        Trishala Infrastructure Pvt Ltd. Satamrai, Shamshabad,
                        Karmanghates, Hyderabad ...
                      </a>
                      <hr />
                      <div className="row p-0">
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                            <i class="fa fa-bed text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              3Beds
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-bath text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i><br/>
                         
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1">
                              2Bathrooms
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-cube text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              5x7 m2
                            </a>
                          </div>
                        </div>
                      </div><hr/>
                      <button
                        className="btn-rd123 mb-3"
                        style={{ width: "80%" }}
                      >
                        View More
                      </button>
                    </div>
                    <div className="reviews-card up-hor">
                      <img
                        src="images/common/plot4.jpg"
                        style={{ width: "100%" }}
                        alt="review"
                      />
                        <a>
                        <h5 className="text-left ml-4 mt-4">
                          Sterling Heights{" "}
                        </h5>
                      </a>
                      <a className="text-left text-dark mt-3">
                        Trishala Infrastructure Pvt Ltd. Satamrai, Shamshabad,
                        Karmanghates, Hyderabad ...
                      </a>
                      <hr />
                      <div className="row p-0">
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                            <i class="fa fa-bed text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              3Beds
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-bath text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i><br/>
                         
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1">
                              2Bathrooms
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-cube text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              5x7 m2
                            </a>
                          </div>
                        </div>
                      </div><hr/>
                      <button
                        className="btn-rd123 mb-3"
                        style={{ width: "80%" }}
                      >
                        View More
                      </button>
                    </div>
                    <div className="reviews-card up-hor">
                      <img
                        src="images/common/plot1.jpg"
                        style={{ width: "100%" }}
                        alt="review"
                      />
                      <a>
                        <h5 className="text-left ml-4 mt-4">
                          Sterling Heights{" "}
                        </h5>
                      </a>
                      <a className="text-left text-dark mt-3">
                        Trishala Infrastructure Pvt Ltd. Satamrai, Shamshabad,
                        Karmanghates, Hyderabad ...
                      </a>
                      <hr />
                      <div className="row p-0">
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                            <i class="fa fa-bed text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              3Beds
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-bath text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i><br/>
                         
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1">
                              2Bathrooms
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-group form-check p-0 m-0">
                          <i class="fa fa-cube text-warning" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                            <a style={{fontSize:"12px"}} class="form-check-label text-dark p-1" for="exampleCheck1"><br/>
                              5x7 m2
                            </a>
                          </div>
                        </div>
                      </div><hr/>
                      <button
                        className="btn-rd123 mb-3"
                        style={{ width: "80%" }}
                      >
                        View More
                      </button>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>


          {/* service end */}

<Footer/>
          </body>
    </div>
  )
}

export default Services