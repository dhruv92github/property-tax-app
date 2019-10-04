import React, { Component } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import "../css/SelfAssesForm.css";
import SAFcontent from "./SAFcontent";

export default class SelfAssesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      personalDetails: {
        ownerName: "",
        guardianName: "",
        relation: '',
        contactNo: "",
        email: "",
        aadharCard: "",
        panCard: "",
        address: "",
        city: "",
        district: "",
        corrAddrSameAsProperty:false
      },
      propertyDetails: {
        oldWardNo: "",
        newWardNo: "",
        ownershipType: "",
        propertyType: "",
        zone: "",
        accountNo: "",
        plotNo: "",
        village: "",
        roadWidth: "",
        plotArea: "",
        registrationDate: "",
        propertyAddress: "",
        city: "",
        district: ""
      },
      floorDetails: {},
      selfDeclaration: {},
      checkList: {}
    };
  }

  handleSave = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleNext = () => {
    if (this.state.step < 5) {
      this.setState({ step: this.state.step + 1 });
    } else {
      console.log("step can not be increased!!");
    }
  };
  handleChange = (givenDetails, name, value) => {
    console.log(givenDetails+" - "+name+": "+value);
    this.setState({
      [givenDetails]: {
        ...this.state[givenDetails],
        [name]: value
      }
    });
  };
  changeStep = (e, step) => {
    // console.log(step);
    this.setState({ step: step });
  };
  toggleAddress=(e)=>{
    const {checked}=e.target;
    console.log("toggle address working")
    console.log(checked);
    this.setState({
      personalDetails:{
        ...this.state.personalDetails,
        corrAddrSameAsProperty:checked
      }
    })
  }

  render() {
    // console.log(this.props);
    const { step } = this.state;

    return (
      <div>
        <div className="self-assessment-menu">
          <div className="menu-title">
            <h3>SELF ASSESSMENT FORM</h3>
          </div>
          <div className="menu-navigation">
            <div
            id={(step===1?'active':'')}
              className=" nav-menu menu-left-end"
              onClick={() => this.changeStep(this, 1)}
            >
              PERSONAL DETAILS
            </div>
            <div id={(step===2?'active':'')} className="nav-menu" onClick={() => this.changeStep(this, 2)}>
              PROPERTY DETAILS
            </div>
            <div
            id={(step===3?'active':'')}
             className="nav-menu" onClick={() => this.changeStep(this, 3)}>
              FLOOR & OTHER DETAILS
            </div>
            <div 
            id={(step===4?'active':'')}
            className="nav-menu" onClick={() => this.changeStep(this, 4)}>
              SELF DECLARATION
            </div>
            <div
            id={(step===5?'active':'')}
              className=" nav-menu menu-right-end"
              onClick={() => this.changeStep(this, 5)}
            >
              CHECKLIST
            </div>
          </div>
          <div className="navigation-content">
            <SAFcontent
              data={this.state}
              step={step}
              handleSave={this.handleSave}
              handleNext={this.handleNext}
              handleChange={this.handleChange}
              toggleAddress={this.toggleAddress}
            />
          </div>
        </div>
      </div>
    );
  }
}
