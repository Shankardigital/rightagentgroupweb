import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { addData, addDataadmin } from "../Servicecalls";
import { imgUrl } from "../Baceurl";
import toast, { Toaster } from "react-hot-toast";

// import beautiful from "../assets/images/hero/beautiful-curly-girl.png";

function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
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
          slidesToShow: 4,
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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
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
  const [form, setform] = useState([]);
  const [form2, setform2] = useState([]);
  const [form3, setform3] = useState([]);
  const [reviews, setreviews] = useState([]);
  const [faqs, setfaqs] = useState([]);
  const [banner, setbanner] = useState([]);
  const [banner1, setbanner1] = useState([]);
  const [banner2, setbanner2] = useState([]);
  const [banner3, setbanner3] = useState([]);

  const getAlldata = async () => {
    const resonse = await addData("dashboard");
    var _data = resonse;
    setform(_data.data.loans);
    setform2(_data.data.insurance);
    setform3(_data.data.realestate);
  };

  const getAllbanners = async () => {
    const resonse = await addData("banner/getallhome");
    var _data = resonse;
    setbanner(_data.data.horizontal[0]);
    setbanner1(_data.data.horizontal[1]);
    setbanner2(_data.data.vertical[0]);
    setbanner3(_data.data.vertical[1]);
  };

  const getreviewDetails = async () => {
    const resonse = await addDataadmin("review/getallactive");
    var _data = resonse;
    setreviews(_data.data.review);
  };
  const getfaqDetails = async () => {
    const resonse = await addDataadmin("faq/getallactive");
    var _data = resonse;
    setfaqs(_data.data.faq);
  };

  useEffect(() => {
    getAlldata();
    getreviewDetails();
    getfaqDetails();
    getAllbanners();
    scrollToTop();
  }, []);

  const redirectLoan = (data) => {
    sessionStorage.setItem("loanid", data._id);
    const slug = data.name.toLowerCase().replace(/\s+/g, "-");
    window.location.href = `/loans/${slug}`;
  };
  const redirectinsurance = (data) => {
    sessionStorage.setItem("insuranceid", data._id);
    const slug = data.name.toLowerCase().replace(/\s+/g, "-");
    window.location.href = `/insurance/${slug}`;
  };
  const redirectrealsate = (data) => {
    sessionStorage.setItem("realestateid", data._id);
    const slug = data.title.toLowerCase().replace(/\s+/g, "-");
    window.location.href = `/realestatedetils/${slug}`;
  };

  const [forms, setforms] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    type: "",
    values: "",
    message: "",
  });
  console.log(forms);

  const handlechange = (e) => {
    const myForm = { ...forms };
    myForm[e.target.name] = e.target.value;
    setforms(myForm);
  };

  const getyourquote = async (e) => {
    e.preventDefault();
    const bodydata = {
      name: forms.name,
      email: forms.email,
      mobile: forms.mobile,
      service: forms.service,
      type: forms.type,
      values: forms.values,
      message: forms.message,
    };
    try {
      const resonse = await addDataadmin("quotes/add", bodydata);
      var _data = resonse;
      console.log(_data);
      toast.success(_data.data.message);
      setforms({
        name: "",
        email: "",
        mobile: "",
        service: "",
        type: "",
        values: "",
        message: "",
      });
      closeModal();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        // toast.error("An error occurred. Please try again.")
      }
    }
  };

  const closeModal = () => {
    const modalElement = document.getElementById("modal_aside");
    const closeButton = modalElement.querySelector(".close");
    modalElement.classList.remove("show");
    modalElement.setAttribute("aria-modal", "false");
    modalElement.setAttribute("style", "display: none");
    document.body.classList.remove("modal-open");
    closeButton.click(); // Simulate a click event on the close button to remove the modal from the DOM
  };

  return (
    <div>
      <body
        data-spy="scroll"
        data-target=".navbar"
        data-offset="100"
        className="ct1280"
      >
        <Header />
        {/* home page */}
        <section className="hero-section-1  agency-bg" id="home">
          <div className="blur-bg-blocks">
            <aside className="blur-bg-set">
              <div className="blur-bg blur-bg-a" />
              <div className="blur-bg blur-bg-b" />
              <div className="blur-bg blur-bg-c" />
            </aside>
          </div>
          <div className="container">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item" data-interval={4000}>
                  <div className="row justify-content-between mb-5 pb-5">
                    <div className="col-lg-6 v-center">
                      <div className="header-heading-1 mt-5">
                        <h1 className="mb30" data-aos="zoom-out-up">
                          Buy Insurance, <br />{" "}
                          <span className="fw3">The Smart Way.</span>
                        </h1>
                        <p data-aos="zoom-out-up" data-aos-delay={400}>
                          Some of the comprehensive home loan insurance plans
                          offers cover for the applicant, the house, and all its
                          contents. The premium that is paid towards home loan
                          insurance is applicable for tax benefits.
                        </p>
                        <a
                          href="#modal"
                          data-toggle="modal"
                          data-target="#modal_aside"
                          className="btnpora btn-rd2 mt30"
                          data-aos="zoom-out-up"
                          data-aos-delay={600}
                        >
                          Get your Quote
                        </a>
                      </div>
                      <div
                        className="hero-feature"
                        data-aos="zoom-out-up"
                        data-aos-delay={800}
                      >
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/fast-time.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">
                            Quick, Easy &amp; Hassle Free
                          </div>
                        </div>
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/customer-services.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">100% Claims Support</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="img-box m-mt60 text-center mt-5"
                        data-aos="fade-In"
                        data-aos-delay={400}
                        data-aos-duration={3000}
                      >
                        <img
                          src="images/hero/beautiful-curly-girl1.png"
                          alt="car"
                          className="img-fluid displayst  "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval={4000}>
                  <div className="row justify-content-between mb-5 pb-5">
                    <div className="col-lg-6 v-center">
                      <div className="header-heading-1 mt-5">
                        <h1 className="mb30" data-aos="zoom-out-up">
                          Buy Insurance, <br />{" "}
                          <span className="fw3">The Smart Way.</span>
                        </h1>
                        <p data-aos="zoom-out-up" data-aos-delay={400}>
                          Some of the comprehensive home loan insurance plans
                          offers cover for the applicant, the house, and all its
                          contents. The premium that is paid towards home loan
                          insurance is applicable for tax benefits.
                        </p>
                        <a
                          href="#modal"
                          data-toggle="modal"
                          data-target="#modal_aside"
                          className="btnpora btn-rd2 mt30"
                          data-aos="zoom-out-up"
                          data-aos-delay={600}
                        >
                          Get your Quote
                        </a>
                      </div>
                      <div
                        className="hero-feature"
                        data-aos="zoom-out-up"
                        data-aos-delay={800}
                      >
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/fast-time.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">
                            Quick, Easy &amp; Hassle Free
                          </div>
                        </div>
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/customer-services.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">100% Claims Support</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="img-box m-mt60 text-center mt-5"
                        data-aos="fade-In"
                        data-aos-delay={400}
                        data-aos-duration={3000}
                      >
                        <img
                          src="images/hero/rent-house.png"
                          alt="car"
                          style={{ width: "450px" }}
                          className="img-fluid displayst  "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item active" data-interval={4000}>
                  <div className="row justify-content-between mb-5 pb-5">
                    <div className="col-lg-6 v-center">
                      <div className="header-heading-1 mt-5">
                        <h1 className="mb30" data-aos="zoom-out-up">
                          Buy Insurance, <br />{" "}
                          <span className="fw3">The Smart Way.</span>
                        </h1>
                        <p data-aos="zoom-out-up" data-aos-delay={400}>
                          Some of the comprehensive home loan insurance plans
                          offers cover for the applicant, the house, and all its
                          contents. The premium that is paid towards home loan
                          insurance is applicable for tax benefits.
                        </p>
                        <a
                          href="#modal"
                          data-toggle="modal"
                          data-target="#modal_aside"
                          className="btnpora btn-rd2 mt30"
                          data-aos="zoom-out-up"
                          data-aos-delay={600}
                        >
                          Get your Quote
                        </a>
                      </div>
                      <div
                        className="hero-feature"
                        data-aos="zoom-out-up"
                        data-aos-delay={800}
                      >
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/fast-time.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">
                            Quick, Easy &amp; Hassle Free
                          </div>
                        </div>
                        <div className="media v-center">
                          <div className="icon-pora">
                            <img
                              src="images/icons/customer-services.png"
                              alt="icon"
                              className="w-100"
                            />
                          </div>
                          <div className="media-body">100% Claims Support</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="img-box m-mt60 text-center mt-3"
                        data-aos="fade-In"
                        data-aos-delay={400}
                        data-aos-duration={3000}
                      >
                        <img
                          src="images/hero/insurance-agent.png"
                          alt="car"
                          className="img-fluid displayst"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5" style={{ overflow: "hidden" }}>
          <div>
            <div className=" text-center ">
              <span
                className="subhead bg-primary text-white"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Provided Loans
              </span>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="">
                  <Slider {...settings1}>
                    {form.map((data) => (
                      <div className="servicecard up-hor">
                        <a
                          onClick={() => {
                            redirectLoan(data);
                          }}
                          type="button"
                          style={{ height: "130px" }}
                        >
                          <div className="d-flex justify-content-center">
                            <img src={imgUrl + data.image} alt="icon" />
                          </div>
                          <p style={{ color: "#000000" }}>{data.name}</p>
                          <br />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className=" text-center mt-5 pt-3">
              <span
                className="subhead bg-primary text-white"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Provided Insurances
              </span>
            </div>

            <div className="row  mb-5">
              <div className="col-12">
                <div className="">
                  <Slider {...settings1}>
                    {form2.map((data) => (
                      <div className="servicecard up-hor">
                        <a
                          type="button"
                          style={{ height: "130px" }}
                          onClick={() => {
                            redirectinsurance(data);
                          }}
                        >
                          <div className="d-flex justify-content-center">
                            <img src={imgUrl + data.image} alt="icon" />
                          </div>
                          <p style={{ color: "#000000" }}>{data.name}</p>
                        </a>
                      </div>
                    ))}

                    {/* <div className="servicecard text-center  up-hor">
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
                    </div> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="container p-3">
            <a href={banner.link} target="_blank">
              <img
                style={{ width: "100%" }}
                src={imgUrl + banner.image}
                alt="banner"
              />
            </a>
          </div>
        </section>

        <div className="enquire-form pad-tb pora-bg1 text-white" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-heading text-center">
                  <span
                    className="subhead"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Why Choose Right Agent Group
                  </span>
                  <h3 data-aos="fade-up" data-aos-delay={300}>
                    Live Your Best Life Today, Your Tomorrow Is Secured With Us
                  </h3>
                </div>
                <div className="whyus mt60">
                  <div
                    className="whyusbox"
                    data-aos="fade-In"
                    data-aos-delay={100}
                  >
                    <div className="imgbdr shadows">
                      {" "}
                      <img src="images/icons/student.png" alt="icon" />{" "}
                    </div>
                    <p>Child's Education</p>
                  </div>
                  <div
                    className="whyusbox"
                    data-aos="fade-In"
                    data-aos-delay={200}
                  >
                    <div className="imgbdr shadows">
                      {" "}
                      <img src="images/icons/oldman.png" alt="icon" />{" "}
                    </div>
                    <p>Care-free Retirement</p>
                  </div>
                  <div
                    className="whyusbox"
                    data-aos="fade-In"
                    data-aos-delay={300}
                  >
                    <div className="imgbdr shadows">
                      {" "}
                      <img src="images/icons/security.png" alt="icon" />{" "}
                    </div>
                    <p>Financial Security</p>
                  </div>
                  <div
                    className="whyusbox"
                    data-aos="fade-In"
                    data-aos-delay={400}
                  >
                    <div className="imgbdr shadows">
                      {" "}
                      <img src="images/icons/insurance.png" alt="icon" />{" "}
                    </div>
                    <p>Family’s Protection</p>
                  </div>
                  <div
                    className="whyusbox"
                    data-aos="fade-In"
                    data-aos-delay={500}
                  >
                    <div className="imgbdr shadows">
                      {" "}
                      <img src="images/icons/wealth.png" alt="icon" />{" "}
                    </div>
                    <p>Wealth Creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        {/* <section className="about-bg-2 pad-tb" id="about">
          <div className="container">
            <div className="row m-text-c">
              <div className="col-lg-6 v-center">
                <div className="about-company">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Save <em>Upto 90%</em> with Best{" "}
                    <span className="fw3">
                      Insurance Plans offered by insurers
                    </span>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                  <a
                    href="#"
                    className="btnpora btn-rd2 mt40"
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-toggle="modal"
                    data-target="#modal_aside"
                  >
                    Get your Quote
                  </a>
                </div>
              </div>
              <div className="col-lg-6 v-center">
                <div
                  className="img-box1 m-mt60"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    src="images/common/agent.png"
                    alt="feature-image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Realestate and Constraction */}

        <section className="reviews-section pad-tb review-bg" id="review">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="common-heading">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Real Estate & Constraction
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    The real estate and construction industry is under pressure
                    to change on many fronts: urbanisation and re-urbanisation
                    are constantly changing the rules investment cycles and
                    capital market movements.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt60">
              <div className="col-lg-12">
                <div className="owl-review-rtl owl-carousel mt45">
                  <Slider {...settings2}>
                    {form3.map((data) => (
                      <div className="reviews-card up-hor">
                        <img
                          src={imgUrl + data.flatImages[0]}
                          style={{ width: "100%" }}
                          alt="review"
                        />
                        <div className="p-4">
                          <h5 className="text-left">{data.title} </h5>
                          <p className="text-left text-dark mt-2">
                            {data.description.length > 70
                              ? `${data.description.substring(0, 70)}...`
                              : data.description}
                          </p>
                        </div>
                        <hr className="p-0 m-0" />
                        <div className="row p-0">
                          {data.features.slice(0, 3).map((data) => (
                            <div className="col-4">
                              <div class="form-group form-checkp-0 m-0">
                                <div className="d-flex justify-content-center">
                                  <img
                                    src={imgUrl + data.image}
                                    style={{ width: "30px" }}
                                  />
                                </div>
                                <p
                                  class="realestatefeatures"
                                  for="exampleCheck1"
                                >
                                  <br />
                                  {data.title}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <hr style={{ marginTop: "0p" }} />

                        <button
                          onClick={() => {
                            redirectrealsate(data);
                          }}
                          className="btn-rd123 mb-3"
                          style={{ width: "80%" }}
                        >
                          View More
                        </button>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container p-3">
            <a href={banner1.link} target="_blank">
              <img
                style={{ width: "100%" }}
                src={imgUrl + banner1.image}
                alt="banner"
              />
            </a>
          </div>
        </section>

        {/* Partners */}
        {/* <section className="about-bg pad-tb" id="partners">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 v-center">
                <div className="partner-company">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Our <em>Partners</em>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    We collaborate with the best and biggest in the banking
                    &amp; financial Lorem Ipsum has been the industry's standard
                    dummy text.
                  </p>
                </div>
                <div
                  className="partnerlogo mt40"
                  data-aos="fade-In"
                  data-aos-delay={500}
                >
                  <a href="#">
                    <img src="images/logo/uilogos-1.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-2.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-3.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-4.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-5.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-6.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-7.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-8.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-9.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-10.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-11.png" alt="brand logo" />{" "}
                  </a>
                  <a href="#">
                    <img src="images/logo/uilogos-12.png" alt="brand logo" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-5 v-center">
                <div
                  className="img-box1 m-mt60"
                  data-aos="fade-In"
                  data-aos-delay={100}
                >
                  <img
                    src="images/common/parntership.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="step-bg pt50 pb80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 v-center">
                <div className="common-heading m-text-c pr50">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Choose and Apply for <em>personal credit</em> products on{" "}
                    <span className="fw3">Right Agent Group</span>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 v-center m-mt60">
                <div className="row divrightbdr">
                  <div className="col-lg-6">
                    <div
                      className="steps-div  mt30"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="steps-icons-1">
                        {" "}
                        <img src="images/icons/choice.png" alt="steps" />{" "}
                      </div>
                      <h4 className="mb10">Wide Choice</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                    <div
                      className="steps-div mt30"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="steps-icons-1">
                        {" "}
                        <img
                          src="images/icons/credit-card.png"
                          alt="steps"
                        />{" "}
                      </div>
                      <h4 className="mb10">Easy Access to Credit</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mt60 m-m0">
                    <div
                      className="steps-div mt30"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="steps-icons-1">
                        {" "}
                        <img src="images/icons/easy.png" alt="steps" />{" "}
                      </div>
                      <h4 className="mb10">Safe &amp; Secure</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                    <div
                      className="steps-div mt30"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="steps-icons-1">
                        {" "}
                        <img
                          src="images/icons/customers.png"
                          alt="steps"
                        />{" "}
                      </div>
                      <h4 className="mb10">Customer First</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="cta-section pad-tb bg-fixed-img"
          data-parallax="scroll"
          data-speed="0.5"
          style={{ backgroundImage: `url("images/common/wideimg.png")` }}
          // data-image-src="images/common/wideimg.png"
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="cta-heading">
                  <h2
                    className="mb20 text-w"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Request a Free Consultation!
                  </h2>
                  <p className="text-w" data-aos="fade-up" data-aos-delay={300}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc aliquet ligula nec leo elementum semper.
                  </p>
                  <a
                    href="#modal"
                    data-toggle="modal"
                    data-target="#modal_aside"
                    className="btnpora btn-rd3 mt40 noshadow"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    {" "}
                    Get your Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="agent-section pad-tb" id="agent">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <div className="common-heading">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    Meet The <em>Agents</em>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt30">
              <div
                className="col-lg-3 col-6 mt30"
                data-aos="fade-In"
                data-aos-delay={100}
              >
                <div className="full-image-card hover-scale">
                  <div className="image-div">
                    <a href="#">
                      <img
                        src="images/agents/team-1.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="info-text-block">
                    <h5>
                      <a href="#">Shakita Daoust</a>
                    </h5>
                    <p>Insurance Agent</p>
                    <div className="social-links-">
                      <a href="#" target="blank">
                        <i className="fab fa-facebook-f" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-twitter" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-linkedin-in" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-6 mt30"
                data-aos="fade-In"
                data-aos-delay={300}
              >
                <div className="full-image-card hover-scale">
                  <div className="image-div">
                    <a href="#">
                      <img
                        src="images/agents/team-2.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="info-text-block">
                    <h5>
                      <a href="#">Gerard Licari</a>
                    </h5>
                    <p>Insurance Agent</p>
                    <div className="social-links-">
                      <a href="#" target="blank">
                        <i className="fab fa-facebook-f" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-twitter" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-linkedin-in" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-6 mt30"
                data-aos="fade-In"
                data-aos-delay={500}
              >
                <div className="full-image-card hover-scale">
                  <div className="image-div">
                    <a href="#">
                      <img
                        src="images/agents/team-3.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="info-text-block">
                    <h5>
                      <a href="#">Cary Montgomery</a>
                    </h5>
                    <p>Insurance Agent</p>
                    <div className="social-links-">
                      <a href="#" target="blank">
                        <i className="fab fa-facebook-f" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-twitter" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-linkedin-in" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-6 mt30"
                data-aos="fade-In"
                data-aos-delay={700}
              >
                <div className="full-image-card hover-scale">
                  <div className="image-div">
                    <a href="#">
                      <img
                        src="images/agents/team-4.jpg"
                        alt="team"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="info-text-block">
                    <h5>
                      <a href="#">Herman Running</a>
                    </h5>
                    <p>Insurance Agent</p>
                    <div className="social-links-">
                      <a href="#" target="blank">
                        <i className="fab fa-facebook-f" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-twitter" />{" "}
                      </a>
                      <a href="#" target="blank">
                        <i className="fab fa-linkedin-in" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Review */}
        <section className="reviews-section pad-tb review-bg2" id="review">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="comon-heading">
                  <h2 className="mb20">
                    Our <em>Happy</em> Customers
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <h5 className="mt40">
                  Thousands of unbiased reviews. Trusted by 10 Thousand+
                  customers.
                </h5>
                <ul className="overallrating mt20">
                  <li>
                    <a href="#" className="chked">
                      <i className="fa fa-star" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chked">
                      <i className="fa fa-star" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chked">
                      <i className="fa fa-star" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chked">
                      <i className="fa fa-star" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chked">
                      <i className="fa fa-star-half-o" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="reviews-block owl-carousel m-mt60">
                  <Slider {...settings}>
                    {reviews.map((data) => (
                      <div className="reviews-card p-4">
                        <div className="-client-details-">
                          <div className="-reviewr">
                            <img
                              src={imgUrl + data.image}
                              alt="Good Review"
                              className="img-fluid rounded-circle"
                            />
                          </div>
                          <div className="reviewer-text">
                            <h5>{data.customerName}</h5>
                            <p>{data.designation}</p>
                            <div className="star-rate">
                              <ul>
                                {data.rating === "1" ? (
                                  <li>
                                    {" "}
                                    <a href="#" className="chked">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                    </a>{" "}
                                  </li>
                                ) : (
                                  ""
                                )}
                                {data.rating === "1.5" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i className="fa fa-star-half-o" />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "2" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "2.5" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i className="fa fa-star-half-o" />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "3" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "3.5" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i className="fa fa-star-half-o" />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "4" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "4.5" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i className="fa fa-star-half-o" />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                {data.rating === "4.5" ? (
                                  <>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#" className="chked">
                                        <i
                                          className="fa fa-star"
                                          aria-hidden="true"
                                        />
                                      </a>{" "}
                                    </li>
                                  </>
                                ) : (
                                  ""
                                )}
                                <li>
                                  {" "}
                                  <a href="#">{data.rating}</a>{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="review-text pb0 pt30">
                          <p>
                            {data.review}
                            {/* Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. */}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-2">
                <section>
                  <div className=" p-3">
                    <a href={banner2.link} target="_blank">
                      <img
                        style={{ width: "100%" }}
                        src={imgUrl + banner2.image}
                        alt="banner"
                      />
                    </a>
                  </div>
                </section>
              </div>
              <div className="col-lg-8 justify-content-center mt30  pad-tb ">
                <div className="common-heading text-center mb-4">
                  <h2 data-aos="fade-up " data-aos-delay={100}>
                    Frequently Asked Questions
                  </h2>
                </div>

                <div id="accordion3" className="accordion">
                  {faqs.map((data, index) => (
                    <div key={index} className="card-2 mt10">
                      <div className="card-header" id="acc1">
                        <button
                          className="btn btn-link btn-block text-left acc-icon"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#collapse-${index}`}
                          aria-expanded="false"
                          aria-controls="collapse-1"
                        >
                          {data.question}
                        </button>
                      </div>
                      <div
                        id={`collapse-${index}`}
                        className="card-body p0 collapse show"
                        aria-labelledby="acc1"
                        data-parent="#accordion3"
                      >
                        <div className="data-reqs">
                          <p>{data.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-2">
                <section>
                  <div className=" p-3">
                    <a href={banner3.link} target="_blank">
                      <img
                        style={{ width: "100%" }}
                        src={imgUrl + banner3.image}
                        alt="banner"
                      />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <div
          id="modal_aside"
          className="modal fixed-center fade"
          tabIndex={-1}
          // role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Express Your Interest!</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-block border0 noshadow mt30">
                  <form
                    role="form"
                    id="contactForm"
                    data-toggle="validator"
                    className="shake"
                    onSubmit={(e) => {
                      getyourquote(e);
                    }}
                  >
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={forms.name}
                          onChange={(e) => {
                            handlechange(e);
                          }}
                          placeholder="Enter name"
                          required
                          data-error="Please fill Out"
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group col-sm-12">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={forms.email}
                          onChange={(e) => {
                            handlechange(e);
                          }}
                          placeholder="Enter email"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          name="mobile"
                          value={forms.mobile}
                          onChange={(e) => {
                            handlechange(e);
                          }}
                          placeholder="Enter mobile"
                          required
                          data-error="Please fill Out"
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group col-sm-12">
                        <select
                          id="Dtype"
                          name="service"
                          value={forms.service}
                          onChange={(e) => {
                            handlechange(e);
                          }}
                          className="form-control"
                          required
                        >
                          <option value>Select Services</option>
                          <option value="Loan">Loan</option>
                          <option value="Insurances">Insurances</option>
                          <option value="Realestate">
                            Realestate & Constraction
                          </option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-sm-6">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input mt-2"
                            type="radio"
                            name="type"
                            id="inlineRadio12"
                            defaultValue="Business"
                            onChange={(e) => {
                              handlechange(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio12"
                          >
                            Business
                          </label>
                        </div>
                        {/* <div className="help-block with-errors" /> */}
                      </div>
                      <div className=" col-sm-6">
                        <div className="form-check form-check-inline ">
                          <input
                            className="form-check-input mt-2"
                            type="radio"
                            name="type"
                            id="inlineRadio1"
                            defaultValue="Employee"
                            onChange={(e) => {
                              handlechange(e);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Employee
                          </label>
                        </div>
                        {/* <div className="help-block with-errors" /> */}
                      </div>
                    </div>

                    <div>
                      {forms.type == "Business" ? (
                        <div className="row mt-3">
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="3YearsITR"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio12s"
                                style={{ width: "20px" }}
                                defaultValue="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio12s"
                              >
                                3 Years ITR
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>

                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="BusinessProof"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio12k"
                                defaultValue="option2"
                                style={{ width: "20px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio12k"
                              >
                                Business Proof
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="AddressProof"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio12q"
                                defaultValue="option2"
                                style={{ width: "20px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio12q"
                              >
                                Address Proof
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {forms.type == "Employee" ? (
                        <div className="row mt-3">
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="6MonthsPayslips"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio123"
                                style={{ width: "20px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio123"
                              >
                                6 Months Payslips
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>

                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="IdentityProof"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio120"
                                defaultValue="option2"
                                style={{ width: "20px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio120"
                              >
                                Identity Proof
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="values"
                                value="AddressProof"
                                onChange={(e) => {
                                  handlechange(e);
                                }}
                                id="inlineRadio121"
                                defaultValue="option2"
                                style={{ width: "20px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio121"
                              >
                                Address Proof
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group mt-1">
                      <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        value={forms.message}
                        rows={5}
                        onChange={(e) => {
                          handlechange(e);
                        }}
                        placeholder="Enter your message"
                        required
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>

                    <button
                      type="submit"
                      id="form-submit"
                      className="btn-rd w-100"
                    >
                      Submit
                    </button>
                    <p className="trm">
                      <i className="fa fa-lock" />
                      We hate spam, and we respect your privacy.
                    </p>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </form>
                  <div className="form-btm-set">
                    <h5>We Deliver</h5>
                    <div className="icon-setss mt20">
                      <div className="icon-rows">
                        <div className="icon-imgg">
                          <img src="images/icons/money.svg" alt="#" />
                        </div>
                        <div className="icon-txt">
                          <p>Best Price</p>
                        </div>
                      </div>
                      <div className="icon-rows">
                        <div className="icon-imgg">
                          <img src="images/icons/quality.svg" alt="#" />
                        </div>
                        <div className="icon-txt">
                          <p>Quality Service</p>
                        </div>
                      </div>
                      <div className="icon-rows">
                        <div className="icon-imgg">
                          <img src="images/icons/call-agent.svg" alt="#" />
                        </div>
                        <div className="icon-txt">
                          <p>Good Support</p>
                        </div>
                      </div>
                      <div className="icon-rows">
                        <div className="icon-imgg">
                          <img src="images/icons/satisfaction.svg" alt="#" />
                        </div>
                        <div className="icon-txt">
                          <p>Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
        <Footer />
      </body>
    </div>
  );
}

export default Home;
