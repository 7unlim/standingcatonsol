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


function Home2() {
  return (
    <Container fluid className="home-buy-section" id="home">
        <Container className="home-content">
        <center>
          <Col md={12}> 
            <h1 className="main-name" style ={{ paddingTop: 25, fontSize: 85, color: '#000000' }}>
                Hi. This is a placeholder
            </h1>
            <h3 style = {{ color: "black" }}>
              Hopefully I'm able to put the game here
            </h3>
          </Col>
          </center>
        </Container>
      </Container>
  );
}
export default Home2;
