import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import catBull from "../../Assets/therealestcatbull.png";
import { useInView } from 'react-intersection-observer'; // Import the hook
import useFadeInOnScroll from "./UseFadeInOnScroll.js"
import catArmy from "../../Assets/catarmy.jpeg";


function Home2() {
  const [imgVisible, imgRef] = useFadeInOnScroll();
  const [textVisible, textRef] = useFadeInOnScroll();
  return (
    <Container fluid className="home-buy-section" id="about">
      <Container style= {{ paddingTop: "5%" }}>
        <Row>
          <Col md={4} style={{ paddingTop: 50 }} ref={imgRef} className={`fade-in ${imgVisible ? 'fade-in-visible' : ''}`}>
            <img
              src={catBull}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: '100%' }}
            />
          </Col>
          <Col md={8} className={`home-about-description fade-in ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
            <h1 style={{ fontSize: "65px" }}>
              About <span className="main-name"> Standing Cat </span> 
            </h1>
            <center>
            <p style = {{ fontSize: "32px", paddingTop: "5%" }}>
            The cats are taking over.
            </p>
            <p style={{ fontSize: "32px", marginTop: "-2.5%" }}>
            Standing cat may appear to be innocent, but this cat means business. He WILL be the last one standing.
            </p>
            <p style = {{ fontSize: "44px", marginTop: "10%" }}>
            <strong style= {{ color: "#F5DEB3"}}>NO</strong> TAX, LP <strong style = {{ color : "#F5DEB3" }}>BURNT</strong>, MINT <strong style = {{ color : "#F5DEB3" }}>REVOKED</strong>
            </p>
            </center>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
        {/* <Col md={6} className={`home-about-description fade-in ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
          </Col> */}
          {/* <center> */}
          {/* <container style = {{ marginLeft: "-10%" }}> */}
          <Col md={4} className="catarmy">
          <img
              src={catArmy}
              alt="home pic"
              className={`img-fluid fade-in ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}
              // className="img-fluid"
              style={{ height: '100%', width: '100%', border: '3px solid black', borderRadius: '20px', // Make the border rounded
              objectFit: 'cover'}}
            />
            {/* <center> */}
            {/* <p style= {{ paddingTop: "5%"}} >
          Standing cat leads the cats into battle!
            </p> */}
            {/* </center> */}
          </Col>
          {/* </center> */}
          <Col md={8}>
            <center className={`fade-in-num33 ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
              <div className="desc1">
              <center>
          <p style= {{ paddingTop: "8%", fontSize: "36px", marginBottom: "10%" }}>
          Standing cat emerges to lead the cats to glory over the dogs.
            </p>
            </center>
            <p style= {{ fontSize: "28px", marginTop: "-5%" }}>
            Forged in the fire, these cats are here to stay.
            </p>
            </div>
            </center>
          </Col>
          {/* </container> */}
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </Container>
  );
}
export default Home2;
