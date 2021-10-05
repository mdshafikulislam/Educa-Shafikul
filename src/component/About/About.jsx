import React from 'react';
import './About.css';

const About = () => {
    const url='http://zcube.in/educato/img/features/about_img.png';
    return (
        <div className="about-part">
            <h1 className="checked text-center p-4">About us</h1>
            <div className="container">
                <div className="row">
                    <div className="col img-about">
                        <img src={url} alt="about-img" />
                    </div>
                    <div className="col">
                        <h1 className="about-h1">Welcome To Online Class Educato</h1>
                        <p className="about-p">Curabitur tristique, sem id sagittis varius, lacus ligula mollis dui, ac condimentum felis metus ut nulla. Aenean ut ultricies turpis, sed sollicitudin eros. Aliquam quis dui ut diam lobortis dignissim ut aliquet ex.</p>
                        <ol className="about-ul">
                            <li>Nulla pellentesque posuere metus, sed hendrerit purus venenatis in. Sed at vestibulum magna.</li>
                            <li>
                            Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie interdum, quam massa finibus turpis, ut eleifend tellus massa eget nunc.
                            </li>
                        </ol>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;