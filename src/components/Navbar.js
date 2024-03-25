import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/standingcat.jpeg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GrPlan } from "react-icons/gr";
import { GiBrain } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
// import { TiInfoLargeOutline } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";




function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(false);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      // className={navColour ? "sticky" : "navbar"}
      className = {navColour}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                // as={Link}
                to="/Home2"
                onClick={() => updateExpanded(false)}
              >
                <IoGameControllerOutline style={{ marginBottom: "2px" }} /> Funny Cat
              </Nav.Link>
            </Nav.Item> */}


            <Nav.Item>
              <Nav.Link
                // as={Link}
                to="/Home2"
                onClick={() => updateExpanded(false)}
              >
                <IoInformationCircleOutline style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                // as={Link}
                to="/Home3"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> How to Buy
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // href="https://soumyajitblogs.vercel.app/"
                to="/Home4"
                target="_blank"
                rel="noreferrer"
              >
                <GiBrain style={{ marginBottom: "2px" }} /> Tokenomics
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // href="https://soumyajitblogs.vercel.app/"
                to="/Home5"
                target="_blank"
                rel="noreferrer"
              >
                <GrPlan style={{ marginBottom: "2px" }} /> Catmap
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
