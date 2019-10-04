import React, { Component } from "react";
import { Form, Input, Select, Button, Icon } from "semantic-ui-react";
import ButtonCombo from "./ButtonCombo";
import FloorDetailsForm from "./FloorDetailsForm";

let newFloor = {
  floorNo:[
    { key: "0", value: "0", text: "0" },
    { key: "1", value: "1", text: "1" },
    { key: "2", value: "2", text: "2" },
    { key: "3", value: "3", text: "3" },
    { key: "4", value: "4", text: "4" }
  ],
  usage: "",
  occupancy: "",
  constructionType: "",
  builtUpArea: "",
  from: "",
  to: ""
};
export default class FloorDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      floorList: [
        {
          floorNo: [
            { key: "0", value: "0", text: "0" },
            { key: "1", value: "1", text: "1" },
            { key: "2", value: "2", text: "2" },
            { key: "3", value: "3", text: "3" },
            { key: "4", value: "4", text: "4" }
          ],
          usage: [],
          occupancy: [],
          constructionType: [],
          builtUpArea: "",
          from: "",
          to: ""
        }
      ]
    };
  }

  handleNext = () => {
    this.props.handleNext();
  };
  handleAddFloor = () => {
    this.setState({
      floorList: [...this.state.floorList, newFloor]
    });
  };
  removeFloor = (e, index) => {
   
    let filteredfloorList = this.state.floorList.filter(
      (item, i) => i !== index
    );
   
    this.setState({
      floorList: filteredfloorList
    });
  };

handleChange=(e,index)=>{
  const {name,value}=e.target;
 

}

  render() {
    const choice = [
      { key: "yes", value: "yes", text: "Yes" },
      { key: "No", value: "No", text: "No" }
    ];
    return (
      <div>
        <div className="personal-details">
          <Form>
            {this.state.floorList.map((floor, index) => {
              return (
                <FloorDetailsForm
                  key={index}
                  NoOfForm={index}
                  floorData={floor}
                  removeFloor={this.removeFloor}
                  handleChange={this.handleChange}
                />
              );
            })}
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button primary onClick={this.handleAddFloor}>
                <Icon name="add" />
                ADD FLOOR
              </Button>
            </div>
            <br />
            <div className="form-div">
              <div className="input-group">
                <label>Presence of Mobile Tower(s)</label>
                <Select placeholder="Select " options={choice} />
              </div>

              <div className="input-group">
                <label>Presence of Hoarding(s)</label>
                <Select placeholder="Select " options={choice} />
              </div>
              <div className="input-group">
                <label>Provision for Rainwater Harvesting</label>
                <Select placeholder="Select " options={choice} />
              </div>
            </div>

            <ButtonCombo
              leftBtnTitle="SAVE YOUR PROGRESS"
              rightBtnTitle="NEXT >> SELF DECLARATION"
              onClickLeft={this.handleSave}
              onClickRight={this.handleNext}
            />
          </Form>
        </div>
      </div>
    );
  }
}
