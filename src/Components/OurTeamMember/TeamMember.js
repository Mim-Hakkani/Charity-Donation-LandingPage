import React from 'react';
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import './TeamMember.css'

const TeamMember = () => {
    return (
        
//<!-- our Team member  -->

<div className="container">

    <div className="row">
        <div className="col-md-12">
            <h1 className="d-org">Our Volunteers</h1>
        </div>
    </div>

    <div className="row">
        
        <div className="col-md-4">
            <div className="team-member">
                <img src={team1} alt="" />
               
                <div className="another">
                    <h2>Hakkani</h2>
                    <p>CEO</p>
                    <ul className="social-icon2">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                    </ul>
                </div>    

           
            </div>
       </div>

    <div className="col-md-4">
    <div className="team-member">
        <img src={team3} alt="" />
       
        <div className="another">
            <h2>Hasan</h2>
            <p>Voluntree</p>
            <ul className="social-icon2">
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
                <li><i className="fab fa-youtube"></i></li>
            </ul>
        </div>    

   
    </div>
  </div>

       <div className="col-md-4">
        <div className="team-member">
            <img src={team2} alt="" />
           
            <div className="another">
                <h2>Ashik Khan</h2>
                <p>Voluntree</p>
                <ul className="social-icon2">
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
                <li><i className="fab fa-youtube"></i></li>
                </ul>
            </div>    

       
        </div>
   </div>

  </div>
 </div>
    );
};

export default TeamMember;