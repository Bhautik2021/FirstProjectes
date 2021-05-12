import React from "react";
import Card from "./Card";

import data from './Data'

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className="row gy-4"> {/* gy-4 :- aaa row ni banthi col vacchi y diraction ma 4 no gape hase */}
            
                {
                    data.map((val,index)=>{
                        return <Card 
                            key={index}
                            img={val.imgsrc}
                            title={val.title}
                        />
                    })
                }

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
