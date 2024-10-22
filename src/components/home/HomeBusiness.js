import React from 'react';
import "../../asset/styles/home/homebusiness.css";
import image1 from '../../asset/images/creator1.jpg';
import image2 from '../../asset/images/creator2.jpg';
import image3 from '../../asset/images/creator3.jpg';
import image4 from '../../asset//images/creator4.jpg';

const HomeBusiness = () => {
  return (
    <div className="home-business-container">
      <h1>
      Their businesses finally found an all-<br></br>
      in-one home with Podia. So can yours.
      </h1>
      <h4>
      More than 150,000 entrepreneurs — including creators, coaches,<br></br>
       consultants, and many more — grow their business on Podia.
      </h4>

      <div className="box-container">
        <div className="box">
          <img src={image1} alt="Box 1" />
          <h5>Em Connors</h5>
          <p>Podia creator Em Connors is a social<br></br>
           media and product launch expert.<br></br>
            Learn how she built an audience and<br></br>
             earned five figures in a week with her<br></br>
              first online course.</p>
        </div>
        <div className="box">
          <img src={image2} alt="Box 2" />
          <h5>Myisha T. Hill</h5>
          <p>Myisha T.Hill shares how she's building<br></br>
          her business online. Her work helps<br></br>
          white folx uncover their relationship<br></br>
          with privilege to better understand<br></br>
          how unchecked privilege causes harm<br></br>
          in communities of color.</p>
        </div>
        <div className="box">
          <img src={image3} alt="Box 3" />
          <h5>Juan Muñoz</h5>
          <p>Creativity professor Juan Muñoz<br></br>
           published his email newsletter for 162<br></br>
            weeks in a row. Here's how his<br></br>
             experiments paid off and led to a<br></br>
              fulfilling online business.</p>
        </div>
        <div className="box">
          <img src={image4} alt="Box 4" />
          <h5>Khe Hy</h5>
          <p>Learn how Khe Hy left a job on Wall<br></br>
           Street and turned a 36-person email<br></br>
            list into a creator business with $500k<br></br>
             in sales on Podia.</p>
        </div>
      </div>

      
    </div>
  );
}

export default HomeBusiness;
