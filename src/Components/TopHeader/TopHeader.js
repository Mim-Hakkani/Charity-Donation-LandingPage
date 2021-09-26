import React from 'react';
import logo from '../images/download.jpg'
import './TopHeader.css'

const TopHeader = () => {
    return (

    // <!-- header-main  -->
    
<div className="container-fluid">
  <div className="row">
      <div className="col-md-4">
           <div className="headerText">
               <h2>Hakkani-Charity)Found</h2>
           </div>
      </div>
      <div className="col-md-4">
         <div className="logo">
             <img src={logo} alt=""/>
         </div>
      </div>
      <div className="col-md-3">
         <div className="header-btn">
            <button className="btn ">Total Budget : $50,000</button>
         </div>
      </div>
      <div className="col-md-1">

      </div>
  </div>
</div>
    );
};

export default TopHeader;