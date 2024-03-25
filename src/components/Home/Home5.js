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


function Home5() {
  return (
    <Container fluid className="home-section" id="home">
        <Container className="home-content">
            <Row>
            <Col md={12} style = {{ fontSize: '2.5em' }}> 
            <h1 className="token-heading" style = {{ fontSize: '2.5em' }}>
            <strong className="main-name"> Token</strong>
                omics
                {/* <strong className="main-name"> *STD*</strong> */}
              </h1>
          </Col>
            </Row>
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading" style ={{ paddingTop: 50 }}>
                <strong>Token Supply</strong>
              </h1>

              <h1 className="heading-name" style ={{ paddingTop: 50 }}>
                <strong className="numberlol">XXX </strong>
                number of tokens in open market yay
              </h1>

              {/* <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
              
            <Col md={5} style={{ paddingLeft: "1%", paddingTop: "1%", paddingBottom: 5 }}>
              <img
                // src={homeLogo}
                src={piechart}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home5;
