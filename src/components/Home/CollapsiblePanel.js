import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Collapse } from "reactstrap";
import { Button, IconButton } from "@material-tailwind/react";

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (
    <div>
      {/* <Col md={6}> */}
      <button
        // type="button"
        // className="coll-panel-btn btn-primary btn-block text-left"
        // variant="primary" 
        // size="lg"
        // variant="gradient" 
        // className="rounded-full"
        // data-mdb-ripple-init data-mdb-ripple-color="orange"
        // type="button" 
        // class="btn btn-light"
        // type="button"
        // style="font-size: 50px"
        // style={{ fontSize: '2.8rem', whiteSpace: 'nowrap', paddingTop: "5%" }}
        class="btn btn-outline-black"


        // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_arrows 
        // use arrows in the future to notify that it is in fact a dropdown

        // color="black"
        // data-mdb-ripple-color="orange"
        // style="padding-top: 50px"
        onClick={() => toggle()}
      >
        <i className={icon} class="hate"/> {title}
      </button>
      {/* </Col> */}
      <Collapse className="p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
      <br></br>
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
