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
import cat1 from "../../Assets/cat1real.png";
import cat2 from "../../Assets/cat2real.png";
import cat3 from "../../Assets/cat3real.png";
import cat4 from "../../Assets/cat4real.png";
import nobgcat from "../../Assets/catnobg.png"
import { useState } from "react";
import ReactDOM from "react-dom";
import CollapsiblePanel from "./CollapsiblePanel";
import useFadeInOnScroll from "./UseFadeInOnScroll.js"


function App() {
    const text1 =
        "Shorten";
    const text2 = "Hello my name is Jun";
    const text3 = "I am making this website";
    const text4 = "Currently I am doing that";
    const [collapse, setCollapse] = useState(true);
    const [title, setTitle] = useState("Expand All");
    const [icon, setIcon] = useState("fa fa-chevron-right");
    const collapseAll = () => {
        setCollapse(!collapse);
        setIcon(state => {
            return state === "fa fa-chevron-right"
                ? "fa fa-chevron-down"
                : "fa fa-chevron-right";
        });
        setTitle(state => {
            return state === "Expand All" ? "Collapse All" : "Expand All";
        });
    };

    const line =  {
      /* height: 15px; */
      /* border-top: 1px solid #F7CAC9; */
      /* background-color: #F7CAC9; */
      border: '10px solid green',
      borderRadius: '5px',
      border: 'none'
    };

    const [imgVisible, imgRef] = useFadeInOnScroll();
    const [textVisible, textRef] = useFadeInOnScroll();

    return (
        <div>
            {/* Expand/Collapse All */}
            {/* <button
                type="button"
                className="btn-warning mt-4 mb-3 float-left"
                onClick={collapseAll}
            >
                <i className={icon} /> {title}
            </button> */}
            <Row noGutters>
            <Col md={4} style={{ paddingTop: 50, paddingRight: 0 }} ref={imgRef} className={`fade-in-num1 ${imgVisible ? 'fade-in-visible' : ''}`}>
            <img
              className="the-cats"
              src={cat1}
              alt="home pic"
            //   className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-7%', alignItems: 'center', paddingTop: 50 }} className={`fade-in-num11 ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
          <CollapsiblePanel title={<span><strong className="main-name">Create</strong> a Solana Wallet</span>} collapse={collapse}>
                <span className="drop-down-item1">{text1}</span>
            </CollapsiblePanel>
          </Col>
          </Row>
          <br></br>
          <hr style={line}></hr>

          <Row noGutters>
            <Col md={4} style={{ paddingTop: 50, paddingRight: 0 }} className={`fade-in-num2 ${imgVisible ? 'fade-in-visible' : ''}`}>
            <img
              className="the-cats"
              src={cat2}
              alt="home pic"
            //   className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-7%', alignItems: 'center', paddingTop: 50 }} className={`fade-in-num22 ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
          <CollapsiblePanel title={<span><strong className="main-name">Get</strong> some Sol</span>} collapse={collapse}>
                <span className="drop-down-item1">{text2}</span>
            </CollapsiblePanel>
          </Col>
          </Row>
          <br></br>
          <hr class="line"></hr>

          <Row noGutters>
            <Col md={4} style={{ paddingTop: 50, paddingRight: 0 }} className={`fade-in-num3 ${imgVisible ? 'fade-in-visible' : ''}`}>
            <img
              className="the-cats"
              src={cat3}
              alt="home pic"
            //   className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-7%', alignItems: 'center', paddingTop: 50 }} className={`fade-in-num33 ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
          <CollapsiblePanel title={<span><strong className="main-name">Hop</strong> on Jupiter</span>} collapse={collapse}>
                <span className="drop-down-item2">{text3}</span>
            </CollapsiblePanel>
          </Col>
          </Row>
          <br></br>
          <hr></hr>

          <Row noGutters>
            <Col md={4} style={{ paddingTop: 50, paddingRight: 0 }} className={`fade-in-num4 ${imgVisible ? 'fade-in-visible' : ''}`}>
            <img
              className="the-cats"
              src={cat4}
              alt="home pic"
            //   className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '-7%', alignItems: 'center', paddingTop: 50 }} className={`fade-in-num44 ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
          <CollapsiblePanel title={<span><strong className="main-name">Trade</strong> for <span><strong className="numberlol">Standing Cat</strong> and hold!</span></span>} collapse={collapse}>
                <span className="drop-down-item2">{text4}</span>
            </CollapsiblePanel>
          </Col>
          </Row>
          <br></br>
          <hr></hr>
          <br></br>
        </div>
    );
}

function Home3() {
const [imgVisible, imgRef] = useFadeInOnScroll();
const [textVisible, textRef] = useFadeInOnScroll();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* <Col md={4} style={{ paddingTop: 50 }}>
            <img
              src={catBull}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col> */}
          <center>
          <Col md={12} style = {{ marginTop: '10%' }}> 
            <h1 ref={textRef} className={`main-name fade-in-top ${imgVisible ? 'fade-in-visible' : ''}`} style ={{ paddingTop: 25, fontSize: 65, color: '#000000' }}>
                How to Buy
            </h1>
          </Col>
          </center>
          {/* <Col md={4} style={{ paddingTop: 50 }}>
            {/* <img
              src={cat1}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "85px" }}
            /> */}
          {/* </Col> */}
          <h1 ref={textRef} className={`fade-in ${imgVisible ? 'fade-in-visible' : ''}`} style ={{ paddingTop: 50, fontSize: 14 }}>
                its clickable :D
              </h1>
              <center>
              <img
            //   className="hate"
              src={nobgcat}
              alt="home pic"
              style= {{ height: 50, width: 75 }}
              ref={imgRef} className={`fade-in ${imgVisible ? 'fade-in-visible' : ''}`}
            //   className="img-fluid"
              // style={{ maxHeight: "25px" }}
            />
            </center>
              <App />
          {/* <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="main-name"> Standing Cat </span> 
            </h1>
            <p className="home-about-body">
              Quick BS description of meme coin. Talk about how no tax, no presale, and how this coin will be bullish
            </p>
          </Col> */}
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <br></br>
      </Container>
    </Container>
  );
}
export default Home3;
