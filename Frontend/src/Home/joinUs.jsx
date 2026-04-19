import React from 'react';
import { useNavigate } from "react-router-dom";


function JoinUs() {

  const navigate = useNavigate();
  
    return (
      <div className="container">
        <div className="row m-4 p-4">
          <h1 className="text-center mb-3 font-serif">
            Join the Millet Revolution
          </h1>
          <p className="text-center text-gray-600">
            Whether you're a farmer, FPO, buyer, or processor ShreeAnna.com
            connects you to <br></br> the millet value chain.
          </p>
          <div className="d-flex justify-content-center align-content-center">
            <button
              className="btn btn-success btn-lg me-3"
              onClick={() => navigate("/Signup")}
            >
              Register as farmer
            </button>
            <button className="btn btn-outline-warning btn-lg text-black">
              Start Buying
            </button>
          </div>
        </div>
      </div>
    );
}

export default JoinUs;