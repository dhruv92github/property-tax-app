import React, { Component } from "react";
import ButtonCombo from "./ButtonCombo";

export default class SelfDeclaration extends Component {
    handleNext=()=>{
        this.props.handleNext();
      }
  render() {
    return (
      <div>
        this is SelfDeclaration.
        <ButtonCombo
          leftBtnTitle="SAVE YOUR PROGRESS"
          rightBtnTitle="NEXT >> CHECKLIST"
          onClickLeft={this.handleSave}
          onClickRight={this.handleNext}
        />
      </div>
    );
  }
}
