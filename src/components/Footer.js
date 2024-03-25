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
        <Col md="4" className="footer-copywright">
          <h3>Hi My name is Jun I made this website</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>These spaces need to be filled on final iteration probably</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>I hope you liked this</h3>
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
