import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div className="team">
             <h1 className="checked text-center p-4">Team</h1>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-3">
                            <div className="team-card">
                            <img src={'http://zcube.in/educato/img/team/team_img01.png'} alt="team-1" />
                            <h4 className="team-headind">Rosalina D. William</h4>
                            <h4 className="team-founder">Founder</h4>
                            
                            </div>
                    </div>
                    
                    <div className="col-md-3">
                    <div className="team-card">
                            <img src={'http://zcube.in/educato/img/team/team_img02.png'} alt="team-2" />
                            <h4 className="team-headind">Alina William</h4>
                            <h4 className="team-founder">CEO</h4>
                            
                            </div>
                    </div>
                    
                    <div className="col-md-3">
                    <div className="team-card">
                            <img src={'http://zcube.in/educato/img/team/team_img03.png'} alt="team-3" />
                            <h4 className="team-headind">Rock Alane</h4>
                            <h4 className="team-founder">CTO</h4>
                            </div>
                    </div>
                    
                    <div className="col-md-3">
                    <div className="team-card">
                            <img src={'http://zcube.in/educato/img/team/team_img04.png'} alt="team-4" />
                            <h4 className="team-headind">Rock Alane</h4 >
                            <h4 className="team-founder">Founder</h4>
                            
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;