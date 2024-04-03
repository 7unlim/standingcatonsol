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
import useFadeInOnScroll from "./UseFadeInOnScroll.js"
import { useInView } from 'react-intersection-observer'; // Import the hook
import CustomPieChart from "./PieChart.js"
import thepie from "../../Assets/pieupdated.png"
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


function Home4() {
  const [imgVisible, imgRef] = useFadeInOnScroll();
  const [textVisible, textRef] = useFadeInOnScroll();
  const data = [
    { id: 0, value: '8', label: 'Airdrop to Current Cat Owners' },
    { id: 1, value: '14', label: 'Team' },
    { id: 2, value: '3', label: 'Marketing' },
    { id: 3, value: '75', label: 'For the People!' },
  ];
  return (
    <Container fluid className="home-questions-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className={`fade-in ${textVisible ? 'fade-in-visible' : ''}`} ref={textRef}>
              <h1 className='tokens' style ={{ paddingTop: "17%" }}>
                <strong className="main-name">Token</strong>omics
              </h1>
              <br></br>
              <h1 className="heading-name" style ={{ paddingTop: "5%" }}>
                <strong className="numberlol">1,000,000,000 </strong>
                tokens in open market!
              </h1>
              <br></br>
              <br></br>

            </Col>
              
            <Col md={7} style={{ paddingRight: "10%", marginTop: "-5%", marginLeft: "-7%" }} ref={imgRef} className={`fade-in-num33 ${imgVisible ? 'fade-in-visible' : ''}`}>
              <CustomPieChart />
              <img 
              src={thepie}
              className="ihatemobile"
              />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Container>
  );
}
export default Home4;
