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
import catBull from "../../Assets/realcatbull.png";
import piechart from "../../Assets/piechart.png"
import { TbHexagonNumber6 } from "react-icons/tb";
// import thumbsupcat from "../../Assets/bestthumbsup.png";
import phase1 from "../../Assets/phase1.png";
import phase2 from "../../Assets/phase2.png";
import phase3 from "../../Assets/phase3.png";
import useFadeInOnScroll from "./UseFadeInOnScroll.js"


function Home5() {
    const [imgVisible, imgRef] = useFadeInOnScroll();
  return (
    <Container fluid className="home-about-section" id="home">
        <Container className="home-content">
        <center>
          <Col md={12}> 
            <h1 className="main-name" style ={{ fontSize: 65, color: '#000000', marginTop: '-50px' }}>
                Catmap
            </h1>
          </Col>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <center>
          <Row>
          <Col md={4} ref={imgRef} className={`phases-container fade-in ${imgVisible ? 'fade-in-visible' : ''}`}>
          <img
                // src={homeLogo}
                src={phase1}
                alt="home pic"
                className="img-fluid"
                style={{ height: '100%', width: '75%' }}
                />
          </Col>
          <Col md={4} ref={imgRef} className={`fade-in-up ${imgVisible ? 'fade-in-visible' : ''}`}>
          <img
                // src={homeLogo}
                src={phase2}
                alt="home pic"
                className="img-fluid"
                style={{ height: '100%', width: '75%' }}
                />
          </Col>
          <br></br>
          <br></br>
          <br></br>
          <Col md={4} ref={imgRef} className={`fade-in-num33 ${imgVisible ? 'fade-in-visible' : ''}`}>
          <img
                // src={homeLogo}
                src={phase3}
                alt="home pic"
                className="img-fluid"
                style={{ height: '100%', width: '75%' }}
                />
          </Col>
            {/* <center>
            <Col md={5} style={{ paddingLeft: 100, paddingTop: 50, paddingBottom: 5 }}>
                <img
                // src={homeLogo}
                src={thumbsupcat}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
            </Col>
            <br></br>
            <h1 className="main-name" style ={{ fontSize: 35, color: '#000000', marginTop: '50px' }}>
                Real catmap image will replace this cat sadly
            </h1>
            </center> */}
            </Row>
            </center>
        </Container>
        <br></br>
        <br></br>
        <br></br>
      </Container>
  );
}
export default Home5;
