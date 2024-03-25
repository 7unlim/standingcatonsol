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
import thumbsupcat from "../../Assets/bestthumbsup.png"


function Home6() {
    const ArrowBox = ({ number, text, children }) => (
        <div className={`arrow-box arrow-box-${number}`}>
          <div className="arrow-number">{number}</div>
          <div className="arrow-text">{text}</div>
          <div className="arrow-description">{children}</div>
        </div>
      );
  return (
    <Container fluid className="home-buy-section" id="home">
        <Container className="home-content">
        <center>
          <Col md={12}> 
            <h1 className="main-name" style ={{ fontSize: 65, color: '#000000', marginTop: '-50px' }}>
                Catmap
            </h1>
          </Col>
          </center>
            <center>
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
            </center>
        </Container>
      </Container>
  );
}
export default Home6;
