import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaMobile, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import Axios from 'axios';
import dateFormat from 'dateformat';
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    Axios.get('https://bfccapital.com/blog/wp-json/wp/v2/posts?per_page=2').then(res => {
      console.log("hello",res.data)
      setBlogs(res.data)
    })

  }, [])
    
return (
<>
<div className="container-fluid mt-5 footer-shadow bg-footer">
  <footer className=" text-lg-start text-footer"
    >
    <section className="bg-footer">
      <div className="container text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
           <div className="footer-logo d-flex">
            <div className="img-logo"> <img src="../assets/img/logo.png" alt='logo' className="img-fluid"/></div>
            <div className="text-logo"> <img src="../assets/img/logo/bfc-capital-text.png" alt='logo' className="img-fluid" /></div>
           </div>
            <p  className="pt-4">
            The largest distributor of mutual funds in Uttar Pradesh, BFC Capital is on track to become one of the biggest in the nation. The company currently manages an AUM of over Rs. 7 billion and has a retail clientele of over 12,000 investors from 80 locations across India and the world.
            </p>
            <div className="footer-social-icon">
              <ul className="footer-social pt-2">
                <li className="social-icon"><Link to=""><img src="../assets/img/facebook.png" className="img-fluid"/></Link></li>
                <li className="social-icon"><Link to=""><img src="../assets/img/linkedin.png" className="img-fluid"/></Link></li>
                <li className="social-icon"><Link to=""><img src="../assets/img/instagram.png" className="img-fluid"/></Link></li>
                <li className="social-icon"><Link to=""><img src="../assets/img/twitter.png" className="img-fluid"/></Link></li>
                <li className="social-icon"><Link to=""><img src="../assets/img/youtube.png" className="img-fluid"/></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4 pt-2">
            
            <h4 className="text-uppercase heading">QUICK LINKS</h4>
            <hr
            className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
            <p>
              <Link to="#" className="text-footer foot-link">Best Mutual Funds to Invest in 2022</Link>
            </p>
            <p>
              <Link to="#" className="text-footer foot-link">Best ELSS Funds</Link>
            </p>
            <p>
              <Link to="#" className="text-footer foot-link">Best SIP Plans to Invest</Link>
            </p>
            <p>
              <Link to="#" className="text-footer foot-link">Best Tax Saving Mutual Funds</Link>
            </p>
            <p>
              <Link to="#" className="text-footer foot-link">Best Mutual Fund for Lumpsum Investment</Link>
            </p>
            
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 pt-2">
            <h4 className="text-uppercase heading">Company Info</h4>
            <hr
            className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
            <p><span className="Address"><FaMapMarkerAlt /> </span>
            <Link to="#" className="text-footer foot-link">BFC Capital Pvt Ltd CP-61, Viraj Khand, Gomti Nagar,Lucknow, Uttar Pradesh 226010</Link>
          </p>
          <p><span><FaPhoneAlt /> </span>
          <Link to="#" className="text-footer foot-link"> +91-522-3514141</Link>
        </p>
        <p><span><FaEnvelope/> </span>
        <Link to="#" className="text-footer foot-link">customersupport@bfccapital.com</Link>
      </p>
      
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      <h4 className="text-uppercase">Latest Blog</h4>
      <hr className="mb-4 mt-0 d-inline-block hr-bottom" />
      {
            blogs.map((val) => {

           return <div className="footer-blog d-flex">
        <div className="footer-blog-img">
          <img src={val.yoast_head_json.og_image[0].url} className="img-fluid"/>
        </div>
        <div className="footer-blog-content">
          <h4> <Link to={val.yoast_head_json.canonical} >{val.title.rendered}</Link></h4>
          <span>{dateFormat(val.date, "mmmm dS, yyyy")}</span>
        </div>
      </div>
    })
    }
    </div>
  </div>
</div>
<hr />
<div className="text-center p-3 card border-0 bg-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-12">
      <h6>© 2022 Copyright: BFC Capital. All Rights Reserved</h6> </div>
    </div>
  </div>
</div>
</section>
</footer>
</div>
<div className="bg-white">
<div className="container">
<div className="row pt-50 pb-2">
  <div className="col-md-12 footer-mutual-fund">
    <p>POPULAR MUTUAL FUNDS: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
<div className="row pb-5">
  <div className="col-md-12 footer-mutual-fund">
    <p>MUTUAL FUNDS COMPANIES: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
</div>
</div>

</>
);
}
export default Footer