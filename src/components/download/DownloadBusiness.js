import React from 'react';
import "../../asset/styles/download/downloadbusiness.css";
import image1 from '../../asset/images/creator1.jpg';
import image2 from '../../asset/images/creator4.jpg';
import image3 from '../../asset/images/creator5.jpg';
import image4 from '../../asset/images/creator6.jpg';

const DownloadBusiness = () => {
  return (
    <div className="download-business-container">
    <h1>
    Real digital downloads built<br></br>
     by enterpreneurs like you
    </h1>
    <h4>
    They're turning their expertise into income with Podia, and so can you.
    </h4>

    <div className="download-container">
      <div className="download_box">
        <img src={image1} alt="download_Box 1" />
        <h5>The Creative Bodega</h5>
        <p>"My decision to use Podia has been<br></br>
        one of the BEST decision I could have<br></br>
        ever made for my small business. Not<br></br>
        only is it super easy and intuitive to<br></br>
        navigate but the customer support is<br></br>
        literally out of this world." Em Connors</p>
      </div>
      <div className="download_box">
        <img src={image2} alt="download_Box 2" />
        <h5>The $10K Institite</h5>
        <p>"We design all of our courses around<br></br>
        two fundamental principles: A<br></br>
        delightful learning experience and<br></br>
        massive student outcomes."
        </p>
      </div>
      <div className="download_box">
        <img src={image3} alt="download_Box 3" />
        <h5>Felicia Reed Photography</h5>
        <p>"I use Podia to manage my marketing,<br></br>
        sales, and payments for my online<br></br>
        business. It's great because you can<br></br>
        set up an account and start using it<br></br>
        immediately without having to do any<br></br>
        technical setup or hosting issues."</p>
      </div>
      <div className="download_box">
        <img src={image4} alt="download_Box 4" />
        <h5>Swiss Innovation Academy</h5>
        <p>"Podia helps me to share my passion<br></br>
        for Service Design with people from<br></br>
        all around the world in a simple and<br></br>
        human way."</p>
      </div>
    </div>

    
  </div>
 
  );
}

export default DownloadBusiness;
