import React from "react";

import contactus from "../images/contact.jpg";
import { Link } from "react-router-dom";
const Contact = () => {
  const handleSendMessageClick = () => {
    alert("Message sent! Our team will contact you soon.");
  };

  return (
    <>
      <div className=" contact-us-allez container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom h2-rayan">Contact Us</h2>

        <div className="container text-center">
          <div className="row">
            <div className="col contact-padding">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  ></label>
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link
                    type="button"
                    class="btn-primary btn-lg px-4 me-md-2 button-rayan "
                    to="#"
                    onClick={handleSendMessageClick}
                  >
                    Send message
                  </Link>
                </div>
              </div>
            </div>

            <div className="col contact-image">
              <img src={contactus} alt="contact us image reloading" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
