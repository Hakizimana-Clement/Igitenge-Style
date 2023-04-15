import React from "react";
import EmailFrom from "./EmailForm";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section>
      <div>
        <div className=" row footer">
          <div
            className="col-lg-4"
            //  style={{ backgroundColor: "#626262" }}
          >
            <h1>Igitenge Style</h1>
            <p>
              Igitenge style is for all people that wants to wear best African
              wax print fabric with beautiful colorful pieces that contain a
              variety of patterns and designs. We become best for you in
              choosing best igitenge wear to it.
            </p>
          </div>
          <div
            className="col-lg-5 footer-newsLetter"
            // style={{ backgroundColor: "#502828" }}
          >
            <h2>NEWSLETTER</h2>
            <EmailFrom />
          </div>
          <div
            className="col-lg-3 footer-socail "
            // style={{ background: "#a7637f" }}
          >
            <h2>Follow us</h2>
            <div className="footer-social-icon">
              <a href="#/uri">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#/uri">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#/uri">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-2" style={{ background: "#7878cd" }}>
        <h2>CALL US</h2>
        <p>+029 189 234</p>
      </div> */}
          <hr />
          <div className="footer-coypright">© {currentYear} Igitenge style</div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
