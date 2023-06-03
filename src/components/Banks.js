import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { addData, addDataadmin } from "../Servicecalls";
import { imgUrl } from "../Baceurl";
import toast, { Toaster } from "react-hot-toast"

import img1 from "../assets/images/icons/choice.png"
import img2 from "../assets/images/icons/customer-services.png"
import img3 from "../assets/images/icons/piggy-bank.png"
import img4 from "../assets/images/icons/credit-card.png"

function Banks() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [form, setform] = useState({});
  const [form1, setform1] = useState([]);

  const getOnedata = async () => {
    const bodydata = {
      id: sessionStorage.getItem("loanid"),
    };
    const resonse = await addData("allproduct/subnextbyid", bodydata);
    var _data = resonse;
    setform(_data.data.subProduct);
  };

  const getAllBanks = async () => {
    const bodydata = {
      productId: "64720173d0f054719b9b2880", //Loan
    };
    const resonse = await addDataadmin("loanpartner/getloanpartnerbyproductid", bodydata);
    var _data = resonse;
    setform1(_data.data.loanPartner);
  };

  const [banner, setbanner] = useState([]);
  const [banner2, setbanner2] = useState([]);
  const [states, setstates] = useState([]);

  const getAllbanners = async () => {
    const resonse = await addData("banner/getallloan");
    var _data = resonse;
    setbanner(_data.data.horizontal[0]);
    setbanner2(_data.data.vertical[0]);
  };

  const getAllstates = async () => {
    const resonse = await addDataadmin("state/getall");
    var _data = resonse;
    setstates(_data.data.statesResult);
  };


  useEffect(() => {
    getOnedata();
    getAllstates()
    getAllBanks();
    getAllbanners()
    scrollToTop();
  }, []);

  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(1);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const principalChange = (e) => {
    setPrincipal(e.target.value);
    calculateEmi();
  };

  const interestRateChange = (e) => {
    setInterestRate(e.target.value);
    calculateEmi();
  };

  const tenureChange = (e) => {
    setTenure(e.target.value);
    calculateEmi();
  };

  const calculateEmi = () => {
    const principalFloat = parseFloat(principal);
    const interestRateFloat = parseFloat(interestRate) / 100 / 12;
    const tenureFloat = parseFloat(tenure) * 12;

    if (principalFloat && interestRateFloat && tenureFloat) {
      const emiValue =
        (principalFloat *
          interestRateFloat *
          Math.pow(1 + interestRateFloat, tenureFloat)) /
        (Math.pow(1 + interestRateFloat, tenureFloat) - 1);
      setEmi(emiValue.toFixed(2));

      const totalPaymentValue = emiValue * tenureFloat;
      setTotalPayment(totalPaymentValue.toFixed(2));

      const totalInterestValue = totalPaymentValue - principalFloat;
      setTotalInterest(totalInterestValue.toFixed(2));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  const [forms, setforms] = useState(
    {
      name:"",
      requestType:"",
      loanPurpose:"",
      residentialStatus:"",
      loanTaken:"",
      state : "",
      city:"",
      areaOffice:"",
      existingLoan:"",
      dateOfBirth:"",
      gender:"",
      employmentType:"",
    }
  );

  const handlechange = (e) => {
    const myForm = { ...forms };
    myForm[e.target.name] = e.target.value;
    setforms(myForm);
  };

  const getyourquote = async (e) => {
    e.preventDefault()
    const bodydata = {
      name:forms.name,
      requestType:forms.requestType,
      loanPurpose:forms.loanPurpose,
      residentialStatus:forms.residentialStatus,
      loanTaken:forms.loanTaken,
      state : forms.state,
      city:forms.city,
      areaOffice:forms.areaOffice,
      existingLoan:forms.existingLoan,
      dateOfBirth:forms.dateOfBirth,
      gender:forms.gender,
      employmentType:forms.employmentType,
    };
    try {
      const resonse = await addData("eligibility/add", bodydata);
      var _data = resonse;
      console.log(_data)
      toast.success(_data.data.message)
      setforms({
        name:"",
        requestType:"",
        loanPurpose:"",
        residentialStatus:"",
        loanTaken:"",
        state : "",
        city:"",
        areaOffice:"",
        existingLoan:"",
        dateOfBirth:"",
        gender:"",
        employmentType:"",
      })

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
            <h3 className="mt-5 mb-4">{form.name}</h3>
            <Link to="/">Home</Link> / <span>{form.name}</span>
          </div>
        </section>

        {/* start banks */}
        <section className="mb-5 pb-5">
          <div className="container">
            <h3 className="mt-5 pt-2 text-center">How it works ?</h3>
            <p className="text-center mt-3 mb-5">
              Low-interest rates, No Income Proof, etc. Ensuring a Tension Free
              Gold Loan Experience
              <br />
              With Minimal Documentation & Zero Paper Work. Flexible Repayment.
            </p>

            <div className="row divrightbdr mt-3">
              <div className="col-md-3">
                <div
                  className="steps-div  mt30"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="steps-icons-1">
                    {" "}
                    <img src={img1} alt="steps" />{" "}
                  </div>
                  <h4 className="mb10">Online Form </h4>
                  <p>
                    Fill an online form to view the best offers from our partner
                    banks..
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="steps-div  mt30"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="steps-icons-1">
                    {" "}
                    <img
                      src={img2}
                      alt="steps"
                    />{" "}
                  </div>
                  <h4 className="mb10">Our Executive</h4>
                  <p>
                    Our executive helps you choose the best offer for your
                    requirement.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="steps-div  mt30"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="steps-icons-1">
                    {" "}
                    <img src={img3} alt="steps" />{" "}
                  </div>
                  <h4 className="mb10">Bank </h4>
                  <p>
                    We pick up documents at your doorstep and submit to the
                    bank**.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="steps-div  mt30"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="steps-icons-1">
                    {" "}
                    <img src={img4} alt="steps" />{" "}
                  </div>
                  <h4 className="mb10">Bank Reviews</h4>
                  <p>Bank reviews your application and confirms approval.</p>
                </div>
              </div>
            </div>

            <section>
              <div className="container pt-5">
              <a href={banner.link} target="_blank">
              <img
                style={{ width: "100%" }}
                src={imgUrl + banner.image}
                alt="banner"
              />
            </a>
              </div>
            </section>
            {/* Calculater  */}

            <div>
              <div className="row mt-5 mb-4">

                <div className="col-lg-6">
                  <div className="row divrightbdr mt-3">
                    <div className="col-md-12">
                      <div
                        className="steps-div "
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <div className="steps-icons-1"></div>
                        <h3 className="mb10 text-center p-3">
                          GET ELIGIBILITY
                        </h3>
                        <form onSubmit={(e)=>{getyourquote(e)}}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                Request Type{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select name="requestType" value={forms.requestType} onChange={(e)=>{handlechange(e)}} className="form-control1">
                                <option value="">Select Request Type</option>
                                <option value="New Loan">New Loan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                Purpose of Loan{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input placeholder="Purpose of Loan"  name="loanPurpose" value={forms.loanPurpose} onChange={(e)=>{handlechange(e)}} className="form-control1" />
                               
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                Residential Status{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input placeholder="Residential Status"   name="residentialStatus" value={forms.residentialStatus} onChange={(e)=>{handlechange(e)}} className="form-control1" />

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                Have you taken loan ?{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select  name="loanTaken" value={forms.loanTaken} onChange={(e)=>{handlechange(e)}}  className="form-control1">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                State <span className="text-danger">*</span>
                              </label>
                              <select  name="state" value={forms.state} onChange={(e)=>{handlechange(e)}} className="form-control1">
                                <option value="">Select</option>
                                {states.map((data)=>(
                                  <option value={data.stateName}>{data.stateName}</option>
                                ))}
                             
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                City <span className="text-danger">*</span>
                              </label>
                              <input placeholder="City" name="city" value={forms.city} onChange={(e)=>{handlechange(e)}} className="form-control1" />

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                {" "}
                                Area Office{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input placeholder=" Area Office" name="areaOffice" value={forms.areaOffice} onChange={(e)=>{handlechange(e)}} className="form-control1" />

                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                Existing Loan from LIC HFL?{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select  name="existingLoan" value={forms.existingLoan} onChange={(e)=>{handlechange(e)}}  className="form-control1">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                          <h5 className="mt-3 mb-3">
                            PERSONAL / EMPLOYMENT DETAILS
                          </h5>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                Customer Name
                                <span className="text-danger">*</span>
                              </label>
                              <input placeholder="Customer Name" name="name" value={forms.name} onChange={(e)=>{handlechange(e)}} className="form-control1" />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="date" placeholder=" Date of birth" name="dateOfBirth" value={forms.dateOfBirth} onChange={(e)=>{handlechange(e)}} className="form-control1" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                Gender <span className="text-danger">*</span>
                              </label>
                              <select name="gender" value={forms.gender} onChange={(e)=>{handlechange(e)}}  className="form-control1">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-4">
                              <label>
                                Type of Employment{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select name="employmentType" value={forms.employmentType} onChange={(e)=>{handlechange(e)}} className="form-control1">
                                <option value="">
                                  Select Type of Employment
                                </option>
                                <option value="Salaried">Salaried</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Business">Business</option>
                                <option value="Student">Student</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12 text-end">
                            <div className="mb-4">
                              <button type="submit" className="btn btn-primary w-100">
                                Save Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row divrightbdr mt-3">
                    <div className="col-md-12">
                      <div
                        className="steps-div p-3"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <div className="p-4">
                          <h3 className="text-center">EMI Calculator</h3>
                          <div className="row  mt-5">
                            <div className="col-7">
                              {" "}
                              <label>Principal Amount:</label>
                            </div>
                            <div className="col-5 ">
                              <div>
                                <div className="input-group mb-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text ">₹</div>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="number"
                                    name="principal"
                                    value={principal}
                                    onChange={principalChange}
                                  />
                                </div>
                                {/* <h5 className="border border-dark p-1">
                                  {principal}
                                </h5> */}
                              </div>
                            </div>

                            <input
                              className="w-100 mt-4"
                              type="range"
                              min="0"
                              max="10000000"
                              name="principal"
                              value={principal}
                              onChange={principalChange}
                            />
                          </div>

                          <div className="row  mt-5">
                            <div className="col-7">
                              {" "}
                              <label>Interest Rate (% per annum):</label>
                            </div>
                            <div className="col-5 text-end ">
                              <div>
                                <div className="input-group mb-2">
                                  <input
                                    className="form-control"
                                    type="number"
                                    name="interestRate"
                                    value={interestRate}
                                    onChange={interestRateChange}
                                  />
                                  <div className="input-group-prepend">
                                    <div className="input-group-text ">%</div>
                                  </div>
                                </div>
                              </div>
                              {/* <div style={{ float: "right" }}>
                                <h5 className="border border-dark p-1">
                                  {interestRate}%
                                </h5>
                              </div> */}
                            </div>

                            <input
                              className="w-100 mt-4"
                              type="range"
                              min="0"
                              max="20"
                              step="0.1"
                              value={interestRate}
                              onChange={interestRateChange}
                            />
                          </div>
                          <div className="row  mt-5">
                            <div className="col-7">
                              {" "}
                              <label>Tenure (in years):</label>
                            </div>
                            <div className="col-5 text-end bordered">
                              <div>
                                <div className="input-group mb-2">
                                  <input
                                    className="form-control"
                                    type="number"
                                    name="tenure"
                                    value={tenure}
                                    onChange={tenureChange}
                                  />
                                  <div className="input-group-prepend">
                                    <div className="input-group-text ">
                                      years
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* <div style={{ float: "right" }}>
                                <h5 className="border border-dark p-1">
                                  {tenure} years
                                </h5>
                              </div> */}
                            </div>

                            <input
                              className="w-100 mt-4"
                              type="range"
                              min="1"
                              max="30"
                              value={tenure}
                              onChange={tenureChange}
                            />
                          </div>

                          {/* <div>
                            <button onClick={calculateEmi}>
                              Calculate EMI
                            </button>
                          </div> */}

                          <div className="row mt-5">
                            <div className="col-4">
                              <label>
                                <b>Monthly EMI:</b>
                              </label>
                              <p>{emi}</p>
                            </div>
                            <div className="col-4">
                              <label>
                                <b>Total Interest:</b>
                              </label>
                              <p>{totalInterest}</p>
                            </div>
                            <div className="col-4">
                              <label>
                                <b>Total Payment:</b>
                              </label>
                              <p>{totalPayment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-5 pt-5 mb-5 text-center">
              Top Loan Bank Partners
            </h3>

            <div className="row">
              <div className="col-lg-9">
                <div className="mt-3">
                  {form1.map((data) => (
                    <div className="row divrightbdr mt-3">
                      <div className="col-md-12">
                        <div
                          className="steps-div p-3"
                          data-aos="fade-up"
                          data-aos-delay={100}
                        >
                          <div className="row">
                            <div className="col-4 col-sm-2">
                              <img
                                style={{ width: "65px" }}
                                src={imgUrl + data.image}
                                alt="steps"
                              />{" "}
                            </div>
                            <div className="col-4 mt-2 displayst">
                              <h4 className="mb10">{data.name}</h4>
                            </div>
                            <div className="col-lg-2 col-4 mt-2 ">
                              <span>{data.percentage}</span>
                            </div>
                            <div className="col-4 mt-2 text-center ">
                              <span> {data.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-3">
                <section>
                  <div className=" p-3">
                  <a href={banner2.link} target="_blank">
              <img
                style={{ width: "100%", height:"500px" }}
                src={imgUrl + banner2.image}
                alt="banner"
              />
            </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* end banks */}
      </body>
<Toaster/>
      <Footer />
    </div>
  );
}

export default Banks;
