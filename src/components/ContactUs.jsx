import React from "react";

export default function ContactUs() {
  return (
    <section>
      <div className="row contact" id="contactUs">
        <h1>Contact us</h1>
        <div>
          <h3>Get In Touch</h3>
          <p>
            If you have any questions or need help, please fill
            <br /> out the form below. We do our best to response <br /> as soon
            as possible.
          </p>
        </div>
        <div className=" col-lg-4 ">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Enter your name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
              {/* <option></option> */}
              <option selected></option>
              <option value="1">New Ideas</option>
              <option value="2">Refund and returns</option>
              <option value="3">Others</option>
            </select>
            <label for="floatingSelectGrid">Subject</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 173, marginTop: 20 }}
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
          <button className="btn btn-danger mt-4 mb-4">Submit</button>
        </div>
        <div className="col-lg-8  contact-image">
          <img
            className="hidden-mobile"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="contact-us"
          />
        </div>
      </div>
    </section>
  );
}
