import React from 'react';
import "../../asset/styles/onlinestore/onlinesell.css";

const OnlineSell = () => {
  return (
    <div className="online-sell">
    <h1>Sell anything you can imagine</h1>
    <h5>
      Podia gives you the flexibility to sell any digital product you want.<br />
      Podia hosts everything and handles things like access management<br />
      to ensure that only customers who pay can get your products.
    </h5>
    <div className="online_box-container">
      {/* Box 1 */}
      <div className="online_box">
        <h3 className="online_box-title">Beautiful online courses you<br />can build in minutes</h3>
        <p>Add videos, files, lessons, and<br></br>
        organize your course however you like.<br></br>
        Podia hosts your content and manages<br></br>
        the payments from your customers.</p>
      </div>
      {/* Box 2 */}
      <div className="online_box">
        <h3 className="online_box-title">Ebook, templates, and any<br />file type you can think of</h3>
        <p>Have an ebook to sell? Templates you<br></br>
        love? Podia makes it easy to spin up a<br></br>
        sales page and sell ebooks, templates,<br></br>
        audio files, video files, spreadsheets,<br></br>
        and any other file type.</p>
      </div>
      {/* Box 3 */}
      <div className="online_box">
        <h3 className="online_box-title">One-on-one coaching and<br />consultations, sold and<br />scheduled from your site</h3>
        <p>Sell one-on-one  access to your time<br></br>
        and attention. Podia makes it easy for<br></br>
        you to charge for coaching sessions<br></br>
        and consultations.</p>
      </div>
      {/* Box 4 */}
      <div className="online_box">
        <h3 className="online_box-title">Webinars and workshops with<br />registration and payment in<br />one place</h3>
        <p>Run webinars directly from your<br></br>
        website. Set up a paid webinar and<br></br>
        your customers can register straight<br></br>
        from your Podia store.</p>
      </div>
    </div>
  </div>
  );
}

export default OnlineSell;
