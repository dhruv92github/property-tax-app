import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "../css/Home.css";
import Options from "./Options";

export default class Home extends Component {
  render() {
    const optionsList = [
      "PROPERTY TAX",
      "WATER USAGE CHARGES",
      "ASSET MANAGEMENT",
      "ACCOUNTING",
      "GRIEVANCE REDRESAL"
    ];
    return (
      <Container>
        <div className="home">
          <Options optionsList={optionsList} />
        </div>
      </Container>
    );
  }
}
