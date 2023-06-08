import React from "react";
import "./newsletter-section-style.css";

function Newsletter_section() {
  return (
    <div>
      <div className="Newsletter_section-main">
        <div className="title-join-us-now">
          <p>Join us now</p>
        </div>
        <div className="description-join-us">
          <p className="description-join-us-text">
            Join us along the way of becoming great! We will send you emails
            containing information of how you can help us. We don’t spam.
          </p>
        </div>
        <div className="input-join-us">
          <div className="input-join-us-content">
            <div className="input">
              <input type="text" placeholder="Your email address" />
            </div>
            <div className="btn-join-us">
              <a href="#">Join us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter_section;
