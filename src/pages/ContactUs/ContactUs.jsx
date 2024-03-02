import React from "react";
import mail from "./images/mail.svg";
import phone from "./images/phone.svg";
import location from "./images/location.svg";
import "./ContactUs.css";
import ContactUs1 from "./ContactUs1";

export default function ContactUs() {
  return (
    <div className="main-container">
      <div className="sub-img">
        <div className="row col-12 sub-container">
          <div className="card-0 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card-heading">Contact Us</div>
            <div className="card-desc col-lg-8">
              Interested in joining our team or learning more about our
              services? We're here to help! Feel free to reach out to us using
              the contact information below, and one of our team members will
              get back to you as soon as possible.
            </div>
          </div>
          <div className="card-1 col-lg-6 col-md-6 col-sm-12 col-12 pt-5">
            <div className="mail">
              <img className="mail-image" src={mail} alt={mail} />
              <div className="mail-desc">
               Drop us a mail at <span className="contactInfo">: Info@neoterictechnologiesinc.com </span>
              </div>
            </div>
            <div className="phone">
              <img className="phone-image" src={phone} alt={phone} />
              <div className="phone-desc">Call us at
                <span className="contactInfo">: 77028 74624</span>
              </div>
            </div>
            <div className="location">
              <div>
                <img className="location-image" src={location} alt={location} />
              </div>
              <div>
                <div className="location-heading">Reach out to us at:</div>
                <div className="location-desc contactInfo">
                  MIG - 55 ,15 ,Kukatpally Housing Board road, <br /> Green
                  Hills Rd, near Kaithalapur ground,
                  <br /> Hyderabad, Telangana 500072
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs1 />
    </div>
  );
}
