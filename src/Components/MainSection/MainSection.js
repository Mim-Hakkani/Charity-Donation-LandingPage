import React, { useEffect, useState } from 'react';
import Details from './Details';
import './MainSection.css'

const MainSection = () => {
 
    //declare the state 

    const[helps,setHelps]=useState([]);

    const[donate,setDonate]=useState([]);

  

    //load fake data from json file  
    useEffect(()=>{
        fetch('donate.json')
        .then(res=>res.json())
        .then(data=>setHelps(data))

    },[]);

   //event Handler 

   const handleDonate =(help)=>{
      const Number_Of_Donar = [...donate,help];
      setDonate(Number_Of_Donar)
   }

  let total =0;
  let names='';
  for(const totalp of donate){
    total = total+parseInt(totalp.budget);
    names = names+' '+totalp.name+' ';
  }

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
                        
                        helps.map(help=><Details help={help} key={help.id} handleDonate={handleDonate}></Details>)

                        }
                        

            </div>
            
        </div>
       
        <div className="col-md-4">

          <div className="total-budget">
            <h1>Number OF Charity :<br/> {donate.length}</h1><hr/>
            <h1>Total Donate :<br/> $ {total}</h1><hr/>
            <h1>Organization Group: {names  }</h1><hr/>
            <button className="total">See More</button>
          </div>

       </div>
    </div>
</div>
    );
};

export default MainSection;