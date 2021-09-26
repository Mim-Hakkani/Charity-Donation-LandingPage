import React, { useEffect, useState } from 'react';
import Details from './Details';
import './MainSection.css'

const MainSection = () => {
 
    //declare the state 

    const[helps,setHelps]=useState([]);

    //load fake data from json file  
    useEffect(()=>{
        fetch('donate.json')
        .then(res=>res.json())
        .then(data=>setHelps(data))

    },[]);




    return (
        //<!-- Main Section-->

<div className="container-fluid my-5 py-5">
    <div className="row">
        <div className="col-md-12">
            <h1 className="d-org my-5">My Donar Organization</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <div className="row">
                
                        {
                        
                        helps.map(help=><Details help={help} key={help.id}></Details>)

                        }
                        

            </div>
            
        </div>
       
        <div className="col-md-4">

          <div className="total-budget">
            <h1>Number OF Charity : 5</h1>
            <h1>Total Donate : $10000</h1>
            <button className="total">See More</button>
          </div>

       </div>
    </div>
</div>
    );
};

export default MainSection;