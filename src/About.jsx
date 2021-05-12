import React from "react";
import web2 from "../src/img/web2.png";
import Commen from "./Commen";

function About() {
  return (
    <>
      <Commen
        name=" Welcome to about page"
        imgsrc={web2}
        visit="/contact"
        btname="Contect Now"
      />
    </>
  );
}

export default About;
