import React from "react";
import web from "../src/img/web6.png";
import Commen from "./Commen";

function Home() {
  return (
    <>
      <Commen
        name=" Grow Your business with "
        imgsrc={web}
        visit="/service"
        btname="Get started"
        name2 = "code with me"
      />
    </>
  );
}

export default Home;
