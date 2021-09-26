import React from 'react';
import goalpic from '../images/Screenshot_11.png'

const Goal = () => {
    return (
        //<!-- Our goal -->
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="our-goal">
                        <img src={goalpic} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;