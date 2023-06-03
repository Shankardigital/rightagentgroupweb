import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addData, addDataadmin } from "../Servicecalls";
import { baseurl } from "../Baceurl";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/images/logo/raglogo.png";

function Header() {
  const navigate = useNavigate();
  const [navStyles, setNavStyles] = useState({
    backgroundColor: "transparent",
    boxShadow: "none",
  });
  const [form, setform] = useState([]);
  const [form1, setform1] = useState([]);
  const [form2, setform2] = useState([]);
  const [form3, setform3] = useState([]);
  const [form4, setform4] = useState([]);
  console.log(form4);
  const [form5, setform5] = useState([]);
  const [form6, setform6] = useState([]);

  const getAllLoans = async () => {
    const bodydata = {
      productId: "64720173d0f054719b9b2880", //Loan
    };
    const resonse = await addData("allproduct/getallinsuranceloan", bodydata);
    var _data = resonse;
    setform1(_data.data.allProducts);
  };

  const getAllInsurance = async () => {
    const bodydata = {
      productId: "64720193d0f054719b9b2888", //Insurance
    };
    const resonse = await addData("allproduct/getallinsuranceloan", bodydata);
    var _data = resonse;
    setform2(_data.data.allProducts);
  };

  const getAllrealestate = async () => {
    const bodydata = {
      productId: "6474557f4e900cde632eea93", //Real Estate
    };
    const resonse = await addData("allproduct/getallrealestate", bodydata);
    var _data = resonse;
    setform3(_data.data.allProducts);
  };

  // const getSubLoans = async (data) => {
  //   const bodydata = {
  //     subProductId: data._id,
  //   };
  //   const resonse = await addData("allproduct/allsubnext", bodydata);
  //   var _data = resonse;
  //   setform4(_data.data.subProduct);
  // };

  const getSubrealestate = async (data) => {
    const bodydata = {
      subProductId: data._id, //sub loans
    };
    const resonse = await addData("allproduct/allrealestate", bodydata);
    var _data = resonse;
    setform5(_data.data.realestate);
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
    const modalElement = document.getElementById("modal_aside_right");
    const closeButton = modalElement.querySelector(".close");
    modalElement.classList.remove("show");
    modalElement.setAttribute("aria-modal", "false");
    modalElement.setAttribute("style", "display: none");
    document.body.classList.remove("modal-open");
    closeButton.click(); // Simulate a click event on the close button to remove the modal from the DOM
  };

  useEffect(() => {
    getAllLoans();
    getAllInsurance();
    getAllrealestate();
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setNavStyles({
          backgroundColor: "#fff",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        });
      } else {
        setNavStyles({ backgroundColor: "transparent", boxShadow: "none" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const redirectLoan = (data) => {
  //   sessionStorage.setItem("loanid", data._id);
  //   navigate(`/loans/${data.name}`);
  // };

  // const redirectinsurance = (data) => {
  //   sessionStorage.setItem("insuranceid", data._id);
  //   navigate(`/insurance/${data.name}`);
  // };

  // const redirectrealsate = (data) => {
  //   sessionStorage.setItem("realestateid", data._id);
  //   navigate(`/realestatedetils/${data.title}`);
  // };

  const redirectLoan = (data) => {
    sessionStorage.setItem("loanid", data._id);
    const slug = data.name.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/loans/${slug}`;
  };
  const redirectinsurance = (data) => {
    sessionStorage.setItem("insuranceid", data._id);
    const slug = data.name.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/insurance/${slug}`;
  };
  
  const redirectrealsate = (data) => {
    if (data && data.title) {
      sessionStorage.setItem("realestateid", data._id);
      const slug = data.title.toLowerCase().replace(/\s+/g, '-');
      window.location.href = `/realestatedetils/${slug}`;
    }
  };

  return (
    <div>
      <header className="top-header th2">
        <nav
          style={navStyles}
          className="navbar navbar-expand-lg justify-content-between navbar-mobile fixed-top"
        >
          <div className="container">
            <a className="navbar-brand">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "180px" }}
                  className="white-logo"
                />
              </Link>
            </a>
            <div className="hide-desk">
              <a className="mobile-btn btn-call" href="tel:8333992233">
                <i className="fa fa-phone" />{" "}
                <span>
                  <span className="clltxt" />
                </span>
              </a>
            </div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbar4"
              aria-controls="navbar4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>

            <div className="navbar-collapse collapse clearfix" id="navbar4">
              <ul className="mr-auto" />
              <ul className="navbar-nav v-center  navigation clearfix">
                <li className="nav-item ">
                  {" "}
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/about">
                    About{" "}
                  </Link>
                </li>

                {/* Lons  */}

                <li>
                  <a className="nav-link" href="#">
                    Loans
                  </a>
                  <ul>
                    {form1.map((data) => (
                      <>
                        <li class="dropdown">
                          <a  type="button">
                            {data.subProduct}
                          </a>

                          <ul>
                            {data.subNext.map((data) => (
                              <li>
                                <a
                                  type="button"
                                  onClick={() => {
                                    redirectLoan(data);
                                  }}
                                >
                                  {data.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </>
                    ))}
                  </ul>
                </li>
                {/* Real Estate */}

                <li>
                  <a className="nav-link" href="#">
                    Real Estate
                  </a>

                  <ul>
                    {form3.map((data) => (
                      <li class="dropdown">
                        <a
                          type="button"
                        >
                          {data.subProduct}
                        </a>
                        <ul>
                          {data.subNext.map((data) => (
                            <li>
                              <a
                               type="button"
                               onClick={() => {
                                redirectrealsate(data);
                               }}
                              >
                                {data.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Insurances */}

                <li>
                  <a className="nav-link" href="#">
                    Insurances
                  </a>

                  <ul>
                    <>
                      {form2.map((data) => (
                        <li class="dropdown">
                          <a  type="button">
                            {data.subProduct}
                          </a>

                          <ul>
                            {data.subNext.map((data) => (
                              <li>
                                <a
                                  type="button"
                                  onClick={() => {
                                    redirectinsurance(data);
                                  }}
                                >
                                  {data.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </>
                  </ul>
                </li>

                {/* <li>
                  <a className="nav-link" href="#">
                    Real Estate
                  </a>
                  <ul>
                    <li class="dropdown">
                      <a href="#">Real Estate Products</a>
                      <ul>
                        <li>
                          <Link to="/realestatedetils">Flats / Apartments</Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">
                            Inpipendent House / Villas
                          </Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">
                            Residental Plots / Land
                          </Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">
                            Commercial Plots / Land
                          </Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">
                            Agriculture / Farm House
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#">Real Estate Projects</a>
                      <ul>
                        <li>
                          <Link to="/realestatedetils">New Launching </Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">Under Constraction</Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">Ready to Move</Link>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#">Builder Developments</a>
                      <ul>
                        <li>
                          <Link to="/realestatedetils">Indipendent Houses</Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">Villas</Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">Flats / Apartments</Link>
                        </li>
                        <li>
                          <Link to="/realestatedetils">
                            Commercial Buildings
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="nav-link" href="#">
                    Insurance
                  </a>
                  <ul>
                    <li class="dropdown">
                      <a href="#">Life Insurance</a>
                      <ul>
                        <li>
                          <Link to="/banks">Term Life Insurance</Link>
                        </li>
                        <li>
                          <Link to="/banks">
                            Unit-Linked Insurance Plans(ULIP)
                          </Link>
                        </li>
                        <li>
                          <Link to="/banks">Whole Life Insurance</Link>
                        </li>
                        <li>
                          <Link to="/banks">Endowment Plans</Link>
                        </li>
                        <li>
                          <Link to="/banks">Child Plans for Education</Link>
                        </li>
                        <li>
                          <Link to="/banks">Retirment Plans</Link>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#">General Insurance</a>
                      <ul>
                        <li>
                          <Link to="/banks">Health Insurance </Link>
                        </li>
                        <li>
                          <Link to="/banks">Automobile Insurance</Link>
                        </li>
                        <li>
                          <Link to="/banks">Homeowner's Insurance</Link>
                        </li>
                        <li>
                          <Link to="/banks">Insurance Against Fire</Link>
                        </li>
                        <li>
                          <Link to="/banks">Insurance for Travel</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/banks">
                    {" "}
                    Service
                  </Link>
                </li> */}

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#modal"
                    data-toggle="modal"
                    data-target="#modal_aside_right"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-call hide-mob"
                    href="tel:8333992233"
                  >
                    <i className="fa fa-phone" />
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link btn-call hide-mob"
                    href="tel:8333992233"
                  >
                    <span>
                      <span className="clltxt">Happy to Help you</span> +91
                      8333992233{" "}
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

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
    </div>
  );
}

export default Header;
