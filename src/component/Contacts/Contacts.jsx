import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
    <div className="container-contact">
    <div className="container container-contact">
  <div className="text-center">
    <h2 className="checked text-center p-4">Contact Us</h2>
    <p className="con-p">Swing by for a cup of coffee, or leave us a message</p>
  </div>
  <div className="row">
    <div className=" col-md-6">
      <img src={'https://cdn.pixabay.com/photo/2018/08/01/21/26/map-3578213_960_720.jpg'} alt="contact-img" className="img-fluid" />
      <h1 className="text-center text-primary p-4">HotLine:+8801948183253</h1>
    </div>
    <div className=" col-md-4">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <br />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <br />
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="bangladesh">Bangladesh</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Contacts;