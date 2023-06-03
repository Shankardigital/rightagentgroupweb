import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Banksdetails() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      useEffect(() => {
        scrollToTop();
      });
    
      const [data, setdata] = useState([]);
      console.log(data);
    
      const handlechange = (e) => {
        const myForm = { ...data };
        myForm[e.target.name] = e.target.value;
        setdata(myForm);
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
            <h3 className="mt-5 mb-4">Citibank Home Loan</h3>
            <Link to="/">Home</Link> / <span>Citibank Home Loan</span>
          </div>
        </section>

        {/* Contact */}
        <div className="enquire-form pad-tb step-bg text-dark" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-heading text-center">
                  <span
                    className="subhead bg-secondary text-white"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    Highlights
                  </span>
                  <h3 data-aos="fade-up" data-aos-delay={300}>
                    Turn to Citibank Home Loan for attractive rates & a unique
                    facility designed to help you save on interest.
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
                    <h5>Rate of interest</h5>
                    <a>8.5% - 8.9% p.a.</a>
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
                    <h5>Tenure</h5>
                    <a>5 - 25 years</a>
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
                    <h5>Processing fee</h5>
                    <a>Nil*</a>
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
                    <h5>Loan amount</h5>
                    <a>Rs.75 lakh - Rs.10 crore</a>
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
                    <h5>Prepayment Charges</h5>
                    <a>Nil*</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="about-bg-2 pad-tb" id="about">
          <div className="container">
            <div className="row m-text-c">
              <div className="col-lg-6 v-center">
                <div className="about-company">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    <em>Are you eligible?</em>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    You should meet the following criteria to apply for this
                    loan:
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Resident type: Indian
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Applicant's age: 21 - 65 years
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Min. monthly income for primary applicant: Rs 70,000
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Min. monthly income for primary applicant: Rs 1,70,000
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Min. monthly income for primary applicant: Rs 2,70,000
                    </label>
                  </div>
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
                <div
                  className="img-box1 m-mt20"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    style={{ width: "400px" }}
                    src="images/common/agent.png"
                    alt="feature-image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-bg-2 pad-tb" id="about">
          <div className="container">
            <div className="row m-text-c">
              <div className="col-lg-6 v-center text-center">
                <div
                  className="img-box1 m-mt20"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <img
                    //   style={{width:"400px"}}
                    src="images/common/img3.jpg"
                    alt="feature-image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 v-center">
                <div className="about-company">
                  <h2 className="mb20" data-aos="fade-up" data-aos-delay={100}>
                    <em>Key features of Citibank Home Loan</em>
                  </h2>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    You should meet the following criteria to apply for this
                    loan:
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Home Credit facility that helps you save on interest &
                      repay loan faster
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Attractive interest rates, starting from just 8% p.a.
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Zero penalty on part closure and foreclosure (only on
                      variable rate loans)
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      Get maximum loan against the value of the property
                    </label>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={300}
                    class="form-group form-check mt-2"
                  >
                    <i className="fa fa-check text-success mr-2" />
                    <label class="form-check-label" for="exampleCheck1">
                      World-class service platform with 24*7 access to loan
                      account
                    </label>
                  </div>
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
            </div>
          </div>
        </section>

        <section className="mb-5 pb-5">
          <div className="container">
          <div className="container">
            <div>
              <h3 className="text-center mb-5">
                Loan Features & Documents Required
              </h3>
              <div>
                <div className="d-flex justify-content-center">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active border border-primary"
                        id="pills-home-tab"
                        data-toggle="pill"
                        data-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Loan Features & Benefits
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border border-primary"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        data-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Documents Required
                      </button>
                    </li>
                    {/* <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
          </li> */}
                  </ul>
                </div>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active mt-5"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <p className="mt-3">
                      Citibank gives home loans for an amount up to Rs. 10
                      crores. The interest rate on loans offered by the bank
                      starts from 6.75% p.a. At Citibank, customers have the
                      flexibility of extending the loan tenure for ease of
                      repayments up to 25 years. With its schemes of home
                      financing, Citibank allows funding up to 80% of the total
                      cost of the property.
                    </p>
                    <p className="mt-3">
                      <b>1. Loan Amount:</b> Offering a home loan amount of as
                      high as Rs. 10 crores, Citi Bank caters to the housing
                      needs of people coming from different sections of society
                    </p>
                    <p className="mt-3">
                      <b>2. Affordable Interest Rate: </b>Starting from as low
                      as $$City Bank -home-Loan-for-salaried-self-employed$$,
                      the interest rate of Citi Bank makes home loans affordable
                      to all
                    </p>
                    <p className="mt-3">
                      <b>3. Prepayment/Foreclosure Charges: </b> For both
                      floating as well as the fixed interest rates on a home
                      loan, Citi Bank takes no additional charges if you plan to
                      prepay/foreclose your home loan
                    </p>
                    <p className="mt-3">
                      <b>4. Processing Fee: </b> The processing fee charged by
                      Citi Bank on a home loan goes up to Rs. 5,000
                    </p>
                    <p className="mt-3">
                      <b> 5. Digital Application Process: </b> To make the life
                      of all the home loan borrowers easy, Citi Bank offers the
                      feature of applying for a home loan online (at its
                      official website)
                    </p>
                    <p className="mt-3">
                      <b>6. Flexible Tenure: </b>Ranging up to 25 years, the
                      tenure offered by Citi Bank on a home loan is flexible and
                      ensures affordable EMIs
                    </p>
                    <p className="mt-3">
                      <b>7. Balance Transfer Facility: </b> You are free to
                      transfer your home loan from other banks or NBFCs to Citi
                      Bank by just paying the minimal processing fee
                    </p>
                    <p className="mt-3">
                      <b>8. Documentation: </b>To avail Citi Bank home loan all
                      you need to do is to submit minimum documentation
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                      <h5 className="mt-5">For Indian residents </h5>
                        <ul>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Passport-size photos{" "}
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Copy of passport
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Copy of identity proof
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Copy of residential address proof
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Salary slips of last 3 months
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Documents related to the property{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5 className="mt-5">For NRIs </h5>
                        <ul>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Identity proof
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Residential address proof
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Passport-size photos x 2
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Salary slips of last 3 months
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Bank statements of last 6 months
                          </li>
                          <li className="mt-3">
                            <i
                              class="fa fa-long-arrow-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Documents related to the property{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">test13</div> */}
                </div>
              </div>
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
                          {/* <option value>Select Services</option> */}
                          <option value="op1">Loans</option>
                          {/* <option value="op2">Insurances</option>
                          <option value="op3">Realestate & Constraction</option> */}
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
                            name="inlineRadioOptions"
                            id="inlineRadio12"
                            defaultValue="option2"
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
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
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
                      {data.inlineRadioOptions == "option2" ? (
                        <div className="row mt-3">
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio12s"
                                style={{width:"20px"}}
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
                                name="inlineRadioOptions"
                                id="inlineRadio12k"
                                defaultValue="option2"
                              style={{width:"20px"}}
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
                                name="inlineRadioOptions"
                                id="inlineRadio12q"
                                defaultValue="option2"
                              style={{width:"20px"}}
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
                      {data.inlineRadioOptions == "option1" ? (
                        <div className="row mt-3">
                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio123"
                                style={{width:"20px"}}
                               
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio123"
                              >
                              6 Monts Payslips
                              </label>
                            </div>
                            {/* <div className="help-block with-errors" /> */}
                          </div>

                          <div className=" col-sm-12">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio120"
                                defaultValue="option2"
                              style={{width:"20px"}}
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
                                name="inlineRadioOptions"
                                id="inlineRadio121"
                                defaultValue="option2"
                              style={{width:"20px"}}
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
      </body>

      <Footer />
    </div>
  );
}

export default Banksdetails;
