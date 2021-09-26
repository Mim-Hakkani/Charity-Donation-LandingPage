import React from 'react';


const Details = (props) => {
 
    //use object destrucring 

    const{title,desc,name,budget,area,img}=props.help
    return (
        <div className="col-md-4">
                    <div className="card my-3">
                  <img src={img} className="card-img-top img-fluid" alt="..." style={{height:'300px',width:'100%',padding:'4px',}} />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{desc}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span style={{fontWeight: 600}}>Group_Name: </span>{name}</li>
                            <li className="list-group-item"><span style={{fontWeight: 600}}>Budget: </span> {budget}</li>
                            <li className="list-group-item"><span style={{fontWeight: 600}}>Area: </span>{area}</li>
                        </ul>
                        <div className="card-body">
                            <ul className="social-icon">
                                
                                <li><a href="http://www.facebook.com"><i  className="fab fa-facebook-f"></i></a></li> 
                                <li><a href="http://www.twitter.com"><i  className="fab fa-twitter"></i></a></li>
                                <li><a href="http://www.linkedin.com"><i href="http://www..linkedin.com" className="fab fa-linkedin"></i></a></li>
                                <li><a href="http://www.youtube.com"><i href="http://www.youtube.com" className="fab fa-youtube"></i></a></li>
                            </ul>
                            
                           <button 
                           
                           onClick={()=>props.handleDonate(props.help)}
                           className="card-link"> 
                           
                           <i className="fas fa-dollar-sign"></i> Donate</button>
                       </div>
                       </div>
                </div>
        
    );
};

export default Details;