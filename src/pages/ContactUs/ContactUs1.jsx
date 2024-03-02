import React from "react";

export default function ContactUs1() {
  return (
    <div className="contact-container">
      <div className="fluid-container">
        <div className="contact-card-top w-100">
          <div className="contact-title">Ask Us Anything</div>
          <div className="contact-desc">
            Have any questions? Need advice? Curious about our services or team?
            We're here to help! No question is too big or too small. Feel free
            to reach out to us with anything on your mind, and we'll do our best
            to provide you with the information you need.
          </div>
        </div>
        <div className="contact-card-1">
          <div className="contact-Reason mb-2 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="reason mb-3">
              Reason for your inquiry<span className="star">*</span>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3 form col-lg-5 col-md-5 col-sm-12 col-12">
            <label for="disabledTextInput" class="form-label">
              First Name<span className="star">*</span>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="FirstName"
            />
          </div>
          <div class="mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <label for="disabledTextInput" class="form-label">
              Last Name<span className="star">*</span>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="LastName"
            />
          </div>
          <div class="mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <label for="disabledTextInput" class="form-label">
              Mobile Number<span className="star">*</span>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="MobileNumber"
            />
          </div>
          <div class="mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <label for="disabledTextInput" class="form-label">
              Email<span className="star">*</span>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div>
            <div className="conatct-company mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="mb-2">Company</div>
              <input className="input-1" type="text" placeholder="Company" />
            </div>
            <div className="conatct-destination mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="mb-2">Your Destination</div>
              <input
                className="input-1"
                type="text"
                placeholder="Destination"
              />
            </div>
          </div>

          <div className="state-input mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="mb-2">
              State<span className="star">*</span>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option selected>State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="state-input mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="mb-2">
              City<span className="star">*</span>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option selected>City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="contact-comments mb-3 col-lg-5 col-md-5 col-sm-12 col-12">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                What do you want to know
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Write your comments..."
                rows="3"
              ></textarea>
            </div>
          </div>
          <button class="btn btn-contact">Submit</button>
        </div>
      </div>
    </div>
  );
}
