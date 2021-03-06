import React from "react";
import logo from "../../img/logo.png";
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p> */}
          <div className="buttons logo">
            <a href="/">
              <img className="logo-bg" src={logo} alt="img" />
            </a>
          </div>
          <div>
            <a href="/home">
              <div className=" next-btn">Get Started Now</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
