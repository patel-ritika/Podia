import React from 'react';
import "../../asset/styles/email/emailtemplate.css";
import image1 from "../../asset/images/template1.jpg";
import image2 from "../../asset/images/template2.jpg";
import image3 from "../../asset/images/template3.jpg";
import image4 from "../../asset/images/template4.jpg";
import image5 from "../../asset/images/template5.jpg";
import image6 from "../../asset/images/template6.jpg";
import image7 from "../../asset/images/template7.jpg";
import image8 from "../../asset/images/template8.jpg";

const EmailTemplate = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Can an email be too beaautiful to delete?</h1>
      <h4>Okay, probably not.But our professionally-designed templates<br></br>
      are pretty close. Plus, they're easy to customize to fit your brand.</h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {/* Image Grid */}
        <img src={image1} alt="img1" style={{ width: "100%", height: "auto" }} />
        <img src={image2} alt="img2" style={{ width: "100%", height: "auto" }} />
        <img src={image3} alt="img3" style={{ width: "100%", height: "auto" }} />
        <img src={image4} alt="img4" style={{ width: "100%", height: "auto" }} />
        <img src={image5} alt="img5" style={{ width: "100%", height: "auto" }} />
        <img src={image6} alt="img6" style={{ width: "100%", height: "auto" }} />
        <img src={image7} alt="img7" style={{ width: "100%", height: "auto" }} />
        <img src={image8} alt="img8" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default EmailTemplate;
