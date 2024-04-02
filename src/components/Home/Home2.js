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
            <p className="home-about-body">
            The cats are taking over and Standing Cat looks to be leading the charge. He may appear to be innocent, but this cat means business. 
            </p>
            <p className="home-about-body" style = {{ marginTop: "-10%" }}>
            NO TAX, LP BURNT, MINT REVOKED. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </Container>
  );
}
export default Home2;
