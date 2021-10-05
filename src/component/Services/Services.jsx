import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services,setServices] =useState([]);
    // course
    useEffect(() => {
        fetch('./edu.JSON')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[]);
    return( 
        <div className="home">
            <div className="container service-top"> 
            <h1 className="checked text-center p-4">Services</h1>
             <div className="row row-cols-1 row-cols-md-3 g-4 ml-4">
               {
                   services.map(service => <div className="col" key={service.key}>
                <div className="card service-card">
                <img src={service.img} alt="service-img" className="img-fluid home-img"/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="lesson-p">Lesson <span className="checked">({service.lesson})</span></p>
                    <div className="">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    </div>
                    </div>
                    <h5 className="card-title">{service.name}</h5>
                    <h3 className="card-cat">{service.category}</h3>
                    <h4>Teacher : {service.teacher}</h4>
                    <div className="d-flex justify-content-between mt-2 mb-3">
                    <h4>Price : <span className="checked">{service.price}</span> </h4>
                    <button className="btn btn-primary">Enroll in</button>
                    </div>
                    
                         </div>
                    </div>
                </div>
                   )}
          
             </div>
            </div>
        </div>
    );
};

export default Services;


 
  