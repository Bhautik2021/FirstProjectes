import React from "react";
import { NavLink } from "react-router-dom";


function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">

        <div className="card">
        <div className="d-flex align-items-center justify-content-center">
          <img src={props.img} className="card-img-top card_img" alt="img not found" />
        </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">my name is bhautik i am a devloper</p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
