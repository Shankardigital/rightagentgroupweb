import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { addData, addDataadmin } from "../Servicecalls";
import { imgUrl } from "../Baceurl";
import toast, { Toaster } from "react-hot-toast";

function Realestatedetils() {
  const navigate = useNavigate();

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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [form, setform] = useState([]);
  const [form2, setform2] = useState([]);
  console.log(form2);
  const [form3, setform3] = useState([]);
  const [form4, setform4] = useState([]);
  const [form5, setform5] = useState([]);
  const [features, setfeatures] = useState([]);

  const getAlldata = async () => {
    const resonse = await addData("dashboard");
    var _data = resonse;
    setform5(_data.data.realestate);
  };

  const getOnedata = async () => {
    const bodydata = {
      id: sessionStorage.getItem("realestateid"),
    };
    const resonse = await addData("allproduct/realestatebyid", bodydata);
    var _data = resonse;
    setform(_data.data.realestate);
    setform2(_data.data.realestate.flatImages);
    setform3(_data.data.realestate.highlights);
    setform4(_data.data.realestate.amenities);
    setfeatures(_data.data.realestate.features);
  };

  const [banner, setbanner] = useState([]);
  const [banner2, setbanner2] = useState([]);
  const [banner3, setbanner3] = useState([]);

  const getAllbanners = async () => {
    const resonse = await addData("banner/getallrealestate");
    var _data = resonse;
    setbanner(_data.data.horizontal[0]);
    setbanner3(_data.data.horizontal[1]);
    setbanner2(_data.data.vertical[0]);
  };

  useEffect(() => {
    getOnedata();
    getAlldata();
    getAllbanners();
    scrollToTop();
  }, []);


  const redirectrealsate = (data) => {
    sessionStorage.setItem("realestateid", data._id);
    const slug = data.title.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/realestatedetils/${slug}`;
    // getOnedata();
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
      service: "Realestate",
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
        <section className="hero-section-1  agency-bg" id="home">
          <div className="blur-bg-blocks">
            <aside className="blur-bg-set">
              <div className="blur-bg blur-bg-a" />
              <div className="blur-bg blur-bg-b" />
              <div className="blur-bg blur-bg-c" />
            </aside>
          </div>
          <div className="text-center mb-5">
            <h3 className="mt-5 mb-4">{form.title}</h3>
            <Link to="/">Home</Link> / <span>{form.title}</span>
          </div>
        </section>

        <section>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-9 text-center">
                <div>
                  <img
                    style={{ borderRadius: "20px", width: "100%" }}
                    src={imgUrl + form2[0]}
                    alt="review"
                  />
                </div>
                <div>
                  <Slider {...settings1}>
                    {form2.map((data) => (
                      <div className="text-center ">
                        <img
                          type="button"
                          src={imgUrl + data}
                          className="p-4 rounded"
                          style={{ width: "190px" }}
                          alt="review"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="row divrightbdr mt-3">
                  <div className="col-md-12">
                    <div
                      className="steps-div p-3"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="row">
                        {features.map((data) => (
                          <div className="col-4 col-sm">
                            <div class="form-group form-check p-0 m-0">
                              <img
                                style={{ width: "28px" }}
                                src={imgUrl + data.image}
                              />
                              <a
                                style={{ fontSize: "12px" }}
                                class="form-check-label text-dark p-1"
                                for="exampleCheck1"
                              >
                                <br />
                                {data.title}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

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
              </div>

              <div className="col-lg-3">
                <div className="row divrightbdr mt-3">
                  <div className="col-md-12">
                    <div
                      className="steps-div p-3"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div>
                        <h5 className="mt-4"> {form.title}</h5>
                        <p className="mt-3">
                          {form &&
                          form.description &&
                          form.description.length > 70
                            ? `${form.description.substring(0, 70)}...`
                            : form && form.description}
                        </p>
                        <h5 className="mt-3">₹ {form.amount} / month </h5>

                        <button
                          className="btn-rd123 mb-3 mt-3"
                          style={{ width: "80%" }}
                          href="#modal"
                          data-toggle="modal"
                          data-target="#modal_aside"
                        >
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row divrightbdr mt-3">
                  <div className="col-md-12">
                    <div
                      className="steps-div p-3"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src={imgUrl + form.siteImage}
                          alt="review"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row divrightbdr mt-3">
                  <div className="col-md-12">
                    <div
                      className="steps-div p-3"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src={imgUrl + form.image3d}
                          alt="review"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className=" mt-5">
                  <h5 className="mt-3">{form.title}</h5>
                  <p className="mt-3">{form.description}</p>
                  <div className="row ">
                    {form4.map((data) => (
                      <div className="col-6 col-sm-4 mt-5">
                        <p>{data.title}</p>
                        <h5>{data.value}</h5>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 mb-5">
                  <h5>Highlights</h5>
                  {form3.map((data) => (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={300}
                      class="form-group form-check mt-4"
                    >
                      <i className="fa fa-check text-success mr-2" />
                      <label class="form-check-label" for="exampleCheck1">
                        {data.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-3">
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
            </div>

            <div>
              <h5>Related Flats</h5>

              <section>
                <div className="container">
                  <div className="row mt40">
                    <div className="col-lg-12">
                      <div className="owl-review-rtl owl-carousel mt45">
                        <Slider {...settings2}>
                          {form5.map((data) => (
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
                                <hr style={{ marginTop: "0px" }} />

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
            </div>
          </div>
        </section>
        <section>
          <div className="container p-3">
            <a href={banner3.link} target="_blank">
              <img
                style={{ width: "100%" }}
                src={imgUrl + banner3.image}
                alt="banner"
              />
            </a>
          </div>
        </section>
        <Toaster />
        <Footer />
      </body>

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
    </div>
  );
}

export default Realestatedetils;
