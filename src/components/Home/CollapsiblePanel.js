import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go"; // Import GoTriangleDown

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);

  const toggle = () => {
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    setIsCollapse(!collapse);
  }, [collapse]);

  return (
    <div>
      <button
        className="btn btn-outline-black"
        onClick={() => toggle()}
      >
        {isCollapse ? <GoTriangleDown /> : <GoTriangleRight />}
        {title}
      </button>
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