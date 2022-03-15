import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
//         footer
        <div className="footer">
        <div className="container">
           <div className="row">
               <div className="col-md-4">
               <img src={'https://themepure.net/template/educal/educal/assets/img/logo/logo.png'} alt="footer-img" />
               <p className="pra-text">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
               </div>
               <div className="col-md-2">
                   <ul>
                       <h5 className="heading">Company</h5>
                       <li><NavLink to="/home" className="selectedContact">Home </NavLink></li>
                        <li><NavLink to="/about" className="selectedContact">About</NavLink></li>
                        <li> <NavLink to="/services" className="selectedContact">Services </NavLink></li>
                        <li><NavLink to="/events" className="selectedContact">Events </NavLink></li>
                        <li> <NavLink to="/career" className="selectedContact">Career </NavLink></li>
                        <li><NavLink to="/contact" className="selectedContact">Contact us </NavLink></li>

                   </ul>
                </div>
               <div className="col-md-2">
                  <ul>
                       <h5 className="heading">Platform</h5>
                       <li><NavLink to="/home" className="selectedContact">Browse Library </NavLink></li>
                        <li><NavLink to="/about" className="selectedContact">Library</NavLink></li>
                        <li> <NavLink to="/services" className="selectedContact">Partners</NavLink></li>
                        <li><NavLink to="/events" className="selectedContact">News & Blogs</NavLink></li>
                        <li> <NavLink to="/career" className="selectedContact">FAQs</NavLink></li>
                        <li><NavLink to="/Footer" className="selectedContact">Tutorials</NavLink></li>

                   </ul>
               </div>
               <div className="col-md-4">
                 <h5 className="heading">Subscribe</h5>
                 <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="btn btn-primary">Search</Button>
      </Form>
      <span className="span">Get the latest news and updates right at your inbox.</span>
                </div>
           </div>
        </div>
        <footer className="footer-bd">
            <p className="text-center">© 2021 Educal, All Rights Reserved. Design By <span className="text-s">Shafikul islam</span></p>
        </footer>
        </div>
    );
};

export default Footer;
