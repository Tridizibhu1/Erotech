import React, { useState } from "react";
import Homebanner1 from "../Assets/Homebanner1.png";
import ladysittingonbooks from "../Assets/conat.png";
import Frame7 from "../Assets/Frame7.png";
import location from "../Assets/location.png";
import contactCard from "../Assets/contactCard.png";
import cbox from "../Assets/cbox.png";
import user from "../Assets/user.png";
import phones from "../Assets/phone.png";
import mail from "../Assets/mail.png";
import chat from "../Assets/comment.png";
import course from "../Assets/course.png";
import "./ContactUs.css";
import swal from "sweetalert";

const initialForm = {
  Name: "",
  MailId: "",
  Course: "",
  Phone: "",
  Comment: "",
};

function ContactUs({ onSubmit }) {
  const [formInfo, setFormInfo] = useState({ ...initialForm });

  const handleInputs = (e) => {
    const a = e.target.name;
    const b = e.target.value;
    setFormInfo((prev) => ({ ...prev, [a]: b }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in formInfo) {
      if (formInfo.hasOwnProperty(key)) {
        formData.append(key, formInfo[key]);
      }
    }
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzqV2mzpMaMYtxjfDvdR7I1d47iAfRz8myuxG5yDHM2_Slbqy9gG4BxvACl_zqzNrQ/exec";
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) =>
        swal({
          title: "Form has been Submitted!",
          text: "Our experts will get back to you shortly",
          icon: "success",
          button: "Ok",
        })
      )
      .catch((error) =>
        swal({
          title: "Fields are Empty!",
          text: "Please fill all the fields.",
          icon: "warning",
          button: "Ok",
        })
      );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="HomeSlide contact-bg col-12">
          <div className="BannerText">
            <p>Get Personalized Recommendations</p>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="address-section col-12">
          <div>
            <img src={location} alt="locaiont" />
            <h3>Our Address</h3>
            <p>
              #103, Rajamma Towers, Jayanagar Rd, Kukatpally Housing Board
              Colony, Hyderabad, Telangana 500072
            </p>
          </div>
          <div>
            <img src={contactCard} alt="contact" />
            <h3>Contact Us</h3>
            <p>096763 27118</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="maps-bg col-12">
          <div className="maps-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1589099642893!2d78.4056827!3d17.4999261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9ec993385%3A0xe248e6adad59009f!2sJayanagar%20Rd%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1715174102617!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-section col-12">
          <img src={ladysittingonbooks} alt="contactUs" />
          <form onSubmit={handleSubmit}>
            <div className="custom-row">
              <div className="custom-col">
                <div className="custom-form-group">
                  <label htmlFor="name">Name:</label>
                  <div className="input-with-icon">
                    <img src={user} alt="" />
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      value={formInfo.Name}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="custom-form-group">
                  <label htmlFor="email">Email:</label>
                  <div className="input-with-icon">
                    <img src={mail} alt="" />
                    <input
                      type="email"
                      id="email"
                      name="MailId"
                      value={formInfo.MailId}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-row">
              <div className="custom-col">
                <div className="custom-form-group">
                  <label htmlFor="course">Course:</label>
                  <div className="input-with-icon">
                    <img src={course} alt="" />
                    <select
                      id="course"
                      name="Course"
                      value={formInfo.Course}
                      onChange={handleInputs}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="course1">Embedded Graduate</option>
                      <option value="course2">
                        Embedded Software Developer
                      </option>
                      <option value="course3">
                        Embedded Automotive Engineer
                      </option>
                      <option value="course4">Embedded IoT Engineer</option>
                      <option value="course5">Short Term Courses</option>
                      <option value="course6">Workshops</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="custom-form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <div className="input-with-icon">
                    <img src={phones} alt="" />
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      value={formInfo.Phone}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-form-group">
              <label htmlFor="comment">Comment:</label>
              <div className="input-with-icon textarea-with-icon">
                <img src={chat} alt="" style={{ top: "18%" }} />
                <textarea
                  id="comment"
                  name="Comment"
                  value={formInfo.Comment}
                  onChange={handleInputs}
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>
            <div className="custom-form-group">
              <button className="customs-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
