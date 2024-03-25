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


function Home7() {
  return (
    <Container fluid className="home-section" id="home">
        <Container className="home-content">
            <center>
            <Row>
            <Col md={12}> 
            <h1 className="token-heading">
            <strong className="footer-name"> Questions?</strong>
                {/* <strong className="main-name"> *STD*</strong> */}
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="emails">
              Feel free to yell at <strong className="emails"> alexison.pan@gmail.com</strong>
              </h1>
          </Col>
            </Row>
            </center>
        </Container>
      </Container>
  );
}
export default Home7;
