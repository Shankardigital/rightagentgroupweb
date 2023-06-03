import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Details() {
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
      <Header />

      <body
        data-spy="scroll"
        data-target=".navbar"
        data-offset="100"
        className="ct1280"
      >
          <section className="hero-section-1  agency-bg" id="home">
          <div className="blur-bg-blocks">
            <aside className="blur-bg-set">
              <div className="blur-bg blur-bg-a" />
              <div className="blur-bg blur-bg-b" />
              <div className="blur-bg blur-bg-c" />
            </aside>
          </div>
        <section className="about-bg-2 pad-tb" id="about">
          <div className="container">
            <h2 className="text-center mb-5">Family Health Insurance</h2>
            <div className="row m-text-c">
              <div className="col-lg-6 v-center">
                <div className="about-company">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    <em>Family Health Insurance</em>
                    <br />
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
              <div className="col-lg-6 v-center text-center">
                <div className="m-mt30" data-aos="fade-up" data-aos-delay={500}>
                  <img
                    src="images/icons/service.png"
                    alt="feature-image"
                    className="img-fluid"
                    style={{ width: "450px" }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="row m-text-c mt-5 pt-5">
                <div className="col-lg-6 ">
                  <div className="about-company">
                    <h2
                      className="mb20"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <span className="fw3">What’s Covered</span>
                    </h2>

                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" /> Sum Insured
                      payable to the employees’ family (nominee / legal heir) at
                      the time of death of the employee enrolled under the
                      membership.
                    </p>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-3"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" /> Sum Insured
                      payable to the employees’ family (nominee / legal heir) at
                      the time of death of the employee enrolled under the
                      membership.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="about-company">
                    <h2
                      className="mb20"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <span className="fw3">Terms and Conditions</span>
                    </h2>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-2"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" />
                      Lives between the ages 18 to 59 are only eligible.
                    </p>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-3"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" />
                      Medical Questionnaire needs to be filled for life aged
                      above 45 or if where the membership plan has Sum Insured
                      under the membership exceeding INR 5,00,000
                    </p>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-3"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" /> One-year
                      suicide waiting period is applicable
                    </p>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-3"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" />
                      The Group Term Life under the membership plan will cease
                      at the earliest of
                    </p>
                    <p
                      style={{ fontWeight: "600" }}
                      className="text-dark mt-3"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="fa fa-check text-success" />
                      The Group Term Life under the membership plan will cease
                      at the earliest of
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
      </body>
      {/* Contact */}
      <div
        id="modal_aside_right"
        className="modal fixed-left fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-aside" role="document">
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
                >
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
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
                        placeholder="Enter mobile"
                        required
                        data-error="Please fill Out"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-sm-12">
                      <select
                        name="Dtype"
                        id="Dtype"
                        className="form-control"
                        required
                      >
                        <option value>Select Requirement</option>
                        <option value="op1">Option 1</option>
                        <option value="op2">Option 2</option>
                        <option value="op3">Option 3</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      className="form-control"
                      rows={5}
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
                >
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
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
                        placeholder="Enter mobile"
                        required
                        data-error="Please fill Out"
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-sm-12">
                      <select
                        name="Dtype"
                        id="Dtype"
                        className="form-control"
                        required
                      >
                        <option value>Select Requirement</option>
                        <option value="op1">Option 1</option>
                        <option value="op2">Option 2</option>
                        <option value="op3">Option 3</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      className="form-control"
                      rows={5}
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
      <Footer />
    </div>
  );
}

export default Details;
