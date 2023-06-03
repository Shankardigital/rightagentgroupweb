import React, {useState, useEffect} from 'react'
import { Link} from "react-router-dom";
import { addDataadmin } from "../Servicecalls";
import { imgUrl } from "../Baceurl";
import logo from "../assets/images/logo/raglogo.png"

function Footer() {
  const [form, setform] = useState({});


  const getDetails = async () => {
    const resonse = await addDataadmin("contactus/getallactive");
    var _data = resonse;
    setform(_data.data.contactus);
  };

  useEffect(() => {
    getDetails()
  }, []);

  return (
    <div>
          <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer- mt30 mb30">
                <Link to="/">
                <img src={logo} alt="Logo" style={{width:"200px"}} className="white-logo" />
                </Link>
                {/* <a href="javascript:void(0)"><img src="images/common/white-logo.png" alt="logo" /></a> */}
              </div>
              <p>{form.description}</p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <h4 className="mt30 mb30 text-w">Contact Us</h4>
              <ul className="footer-address-list">
                <li><i className="fa fa-map" /> {form.address}</li>
                <li><i className="fa fa-phone" /> <a href={`tel:+91${form.mobileNumber}`}>+91 {form.mobileNumber} </a></li>
                <li><i className="fa fa-envelope" /> <a href="#"><span className="__cf_email__" data-cfemail="e58c8b838aa58790968c8b8096968b848880cb868a88"> {form.eamil}</span></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <h4 className="mt30 mb30 text-w">Keep in Touch </h4>
              <div className="footer-social-media-icons">
                <a href={form.facebooklink} target="blank" className="facebook"><i className="fa fa-facebook-f" /></a>
                <a href={form.twitterlink} target="blank" className="twitter"><i className="fa fa-twitter" /></a>
                <a href={form.instagramlink} target="blank" className="instagram"><i className="fa fa-instagram" /></a>
                <a href={form.linkedinlink} target="blank" className="linkedin"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-ft">
                  <p>Design & Develop By <a href="https://digitalraiz.com/" target="blank">Digitalraiz Creative Solutions Pvt Ltd </a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer