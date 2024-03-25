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


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container style= {{ paddingTop: "5%" }}>
        <Row>
          <Col md={4} style={{ paddingTop: 50 }}>
            <img
              src={catBull}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: '100%' }}
            />
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "65px" }}>
              About <span className="main-name"> Standing Cat </span> 
            </h1>
            <p className="home-about-body">
              Quick BS description of meme coin. Talk about how no tax, no presale, and how this coin will be bullish
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
