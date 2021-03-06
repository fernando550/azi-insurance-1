import React, {Component} from "react";
// import {Route, Link, Switch} from "react-router-dom";

class Footer extends Component {
  render() {

    const fbLink = "https://www.facebook.com/azimutinsurance/";
    const instaLink = "https://instagram.com/azimutinsurance";
    const targetTab = "_blank";

    return (
      <div id="footer-layout" className="row p-5">
        <div id="footer-page-location" className="col-lg-4 text-center pb-5">
          <h4 className="pb-3">LOCATION</h4>
          <div><span className="pr-2"><i className="fa fa-lg fa-map-marker-alt"></i></span>Main Office</div>
          <div className="pb-3">
            2100B NW 82nd Avenue, Miami, FL 33122
          </div>
          <div>
            Monday - Friday: 9am - 6pm
          </div>
          <div>
            Saturday: By appointment
          </div>
        </div>

        <div id="footer-page-contact" className="col-lg-4 text-center pb-5">
          <h4 className="pb-3">CONTACT</h4>
          <div><span className="pr-2"><i className="fa fa-envelope"></i></span>Email</div>
          <div className="pb-3">
            info@azimutinsurance.com
          </div>
          <div><span className="pr-2"><i className="fa fa-phone"></i></span>Phone</div>
          <div>
            (305) 517-1106
          </div>
        </div>



        <div id="footer-page-social-media" className="col-lg-4 text-center">
          <h4 className="pb-3">SOCIAL MEDIA</h4>
          <div className="pb-3">
            Connect With Us!
          </div>
          <div>
            <a href={fbLink} target={targetTab} rel="noopener noreferrer" className="footer-link"><span className="px-1"><i className="fab fa-lg fa-facebook-square"></i></span></a>
            <a href={instaLink} target={targetTab} rel="noopener noreferrer" className="footer-link"><span className="px-1"><i className="fab fa-lg fa-instagram"></i></span></a>
          </div>
          <div style={{fontSize: '10px', marginTop: '30px'}}>Copyright © 2017 Azimut Insurance Consultants - All Rights Reserved.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
