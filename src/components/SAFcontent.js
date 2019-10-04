import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import PropertyDetails from "./PropertyDetails";
import FloorDetails from "./FloorDetails";
import SelfDeclaration from "./SelfDeclaration";
import CheckList from "./CheckList";

export default class SAFcontent extends Component {
  render() {
    const step = this.props.step;
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            data={this.props.data}
            handleSave={this.props.handleSave}
            handleNext={this.props.handleNext}
            handleChange={this.props.handleChange}
            toggleAddress={this.props.toggleAddress}
          />
        );

      case 2:
        return (
          <PropertyDetails
            data={this.props.data}
            handleSave={this.props.handleSave}
            handleNext={this.props.handleNext}
          />
        );
      case 3:
        return (
          <FloorDetails
            data={this.props.data}
            handleSave={this.props.handleSave}
            handleNext={this.props.handleNext}
          />
        );
      case 4:
        return (
          <SelfDeclaration
            data={this.props.data}
            handleSave={this.props.handleSave}
            handleNext={this.props.handleNext}
          />
        );
      case 5:
        return <CheckList />;
      default:
        break;
    }
  }
}
