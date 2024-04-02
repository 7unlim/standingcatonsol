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
// import useFadeInOnScroll from "./UseFadeInOnScroll.js"
import CustomPieChart from "./PieChart.js"
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


function Home4() {
  const data = [
    { id: 0, value: '8', label: 'Airdrop to Current Cat Owners' },
    { id: 1, value: '14', label: 'Team' },
    { id: 2, value: '3', label: 'Marketing' },
    { id: 3, value: '75', label: 'For the People!' },
  ];
  // const [imgVisible, imgRef] = useFadeInOnScroll();
  // const [textVisible, textRef] = useFadeInOnScroll();
  return (
    <Container fluid className="home-questions-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5}>
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

              {/* <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>
              
            <Col md={7} style={{ paddingRight: "10%" }}>
              {/* <img
                // src={homeLogo}
                src={piechart}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              /> */}
              {/* <PieChart
                series={[
                  {
                    // Label configuration from the first example
                    arcLabel: (item) => `${item.label} (${item.value})`,
                    arcLabelMinAngle: 45,

                    // Data and interaction configuration from the second example
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 50, additionalRadius: -10, color: 'gray' },
                  },
                ]}
                // Styling for labels from the first example
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                  },
                }}
                // Size from the second example
                height={350}
                width={350}
              /> */}
              <CustomPieChart />
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
