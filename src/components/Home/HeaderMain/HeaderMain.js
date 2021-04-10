import React from 'react';
import chair from '../../../images/chair.png';



const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2 style={{color: "#3A4256"}}>Your New Smile <br/>Starts Here</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui in quos! Expedita, vel blanditiis.</p>
            <button className="btn fw-bold text-white" style={{background: "#1CC7C1"}}>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;