import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>DISCLAIMER: Standing Cat meme coin is simply for entertainment purposes only. Standing Cat holds no intrinsic value or expectation of financial return. When buying $STD Cat, you are acknowledging that you have read this disclaimer. </h3>
        </Col>
        <Col md="3" className="footer-body">
          <h3></h3>
          {/* <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> */}
            {/* <li class="social-icons">
              <a href="https://play-lh.googleusercontent.com/KJ9qYAihiHufGiXoO_vMJH6-PZgdMEyjsxUpUHBksZ9UrGjK2xeJ9pvp4TdPvRz_uQBW" style="color: white" target="_blank" rel="noopener noreferrer">
                <img src="path-to-your-uploaded-image/new-icon.png" alt="Instagram" />
              </a>
            </li> */}
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          {/* </ul> */}
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
