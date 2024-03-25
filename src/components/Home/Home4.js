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


function Home4() {
  return (
    <Container fluid className="home-questions-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="tokens">
                <strong className="main-name">Token</strong>omics
              </h1>
              <br></br>
              <h1 className="heading-name" style ={{ paddingTop: 50 }}>
                <strong className="numberlol">XXX </strong>
                number of tokens in open market yay
              </h1>
              <br></br>
              <br></br>

              {/* <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
              
            <Col md={5} style={{ paddingLeft: "1%", paddingTop: "5%", paddingBottom: 5 }}>
              <img
                // src={homeLogo}
                src={piechart}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          {/* <br></br> */}
        </Container>
      </Container>
  );
}
export default Home4;
