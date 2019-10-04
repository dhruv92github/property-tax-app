import React from "react";
import { Button } from "semantic-ui-react";
import "../css/ButtonCombo.css";

export default function ButtonCombo(props) {
  const { leftBtnTitle, rightBtnTitle, onClickLeft, onClickRight } = props;
  return (
    <div className="submit-buttons">
      <Button type="submit" color="blue" className="btn-left" onClick={onClickLeft}
      
      >
        {leftBtnTitle}
      </Button>{" "}
     
      <Button color="blue" className="btn-right " onClick={onClickRight}>
        {rightBtnTitle}
      </Button>
    </div>
  );
}
