import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { addData, addDataadmin } from "../Servicecalls";
import { imgUrl } from "../Baceurl";
import toast, { Toaster } from "react-hot-toast"

function About() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
      const [banner, setbanner] = useState([]);

      const getAllbanners = async () => {
        const resonse = await addData("banner/getallabout");
        var _data = resonse;
        setbanner(_data.data.horizontal[0]);
      };

      useEffect(() => {
        getAllbanners()
        scrollToTop();
      }, []);
    
      const [forms, setforms] = useState(
        {
          name:"",
          email:"",
          mobile:"",
          service:"",
          type:"",
          values : "",
          message:"",
        }
      );
      console.log(forms)
    
      const handlechange = (e) => {
        const myForm = { ...forms };
        myForm[e.target.name] = e.target.value;
        setforms(myForm);
      };
    
    
      const getyourquote = async (e) => {
        e.preventDefault()
        const bodydata = {
          name:forms.name,
          email:forms.email,
          mobile:forms.mobile,
          service:forms.service,
          type:forms.type,
          values : forms.values,
          message:forms.message,
        };
        try {
          const resonse = await addDataadmin("quotes/add", bodydata);
          var _data = resonse;
          console.log(_data)
          toast.success(_data.data.message)
          setforms({
            name:"",
            email:"",
            mobile:"",
            service:"",
            type:"",
            values : "",
            message:"",
          })
          closeModal()
    
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            toast.error(error.response.data.message)
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
            <h3 className='mt-5 mb-4'>About Us</h3>
          <Link to="/">Home</Link> / <span>About Us</span>
          </div>
          </section>
 {/* About */}
 <section className="about-bg-2 pad-tb" id="about">
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
        </section>
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
<Toaster/>
        <Footer/>
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
                  onSubmit={(e)=>{getyourquote(e)}}
                >
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={forms.name}
                        onChange={(e)=>{handlechange(e)}}
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
                        onChange={(e)=>{handlechange(e)}}
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
                        onChange={(e)=>{handlechange(e)}}
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
                        onChange={(e)=>{handlechange(e)}}
                        className="form-control"
                        required
                      >
                        <option value>Select Services</option>
                        <option value="Loan">Loan</option>
                        <option value="Insurances">Insurances</option>
                        <option value="Realestate">Realestate & Constraction</option>
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

    </div>
  )
}

export default About