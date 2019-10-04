import React, { Component } from "react";
import { Form, Input, Dropdown } from "semantic-ui-react";
import "../css/PersonalDetails.css";
import ButtonCombo from "./ButtonCombo";

export default class PersonalDetails extends Component {
  handleSave = () => {
    // this.props.handleSave("propertyDetails", this.state);
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    this.props.handleChange("personalDetails", name, value);
  };
  handleDropdownChange = (e, { name, value }) => {
    console.log(name + ": " + value);
    this.props.handleChange("personalDetails", name, value);
  };

  render() {
    console.log(this.props.data);
    const {
      ownerName,
      guardianName,
      relation,
      contactNo,
      email,
      aadharCard,
      panCard,
      address,
      city,
      district,
      corrAddrSameAsProperty
    } = this.props.data.personalDetails;
    const relationOptions = [
      { key: "s", value: "son", text: "son" },
      { key: "f", value: "father", text: "father" },
      { key: "m", value: "mother", text: "mother" }
    ];
    return (
      <div>
        <div className="personal-details">
          <Form>
            <div className="form-div">
              <div className="input-group">
                <label>Owner's Name</label>
                <Input
                  type="text"
                  placeholder="Owners Name"
                  name="ownerName"
                  value={ownerName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-group">
                <label>Guardian's Name</label>
                <Input
                  type="text"
                  name="guardianName"
                  value={guardianName}
                  onChange={this.handleChange}
                  placeholder="Guardian's Name"
                />
              </div>
              <div className="input-group">
                <label>Relation</label>
                <Dropdown
                  selection
                  name="relation"
                  options={relationOptions}
                  placeholder="select relation"
                  value={relation}
                  onChange={this.handleDropdownChange}
                />
              </div>
              <div className="input-group">
                <label>Contact No.</label>
                <Input
                  type="number"
                  label={{ basic: true, content: "+91" }}
                  labelPosition="left"
                  placeholder="Contact No."
                  name="contactNo"
                  value={contactNo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>Aadhar Card</label>
                <Input
                  type="number"
                  placeholder="Aadhar Card"
                  name="aadharCard"
                  value={aadharCard}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>PAN Card </label>
                <Input
                  type="text"
                  placeholder="PAN Card "
                  name="panCard"
                  value={panCard}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>Correspondence Address</label>
                <Input
                  type="text"
                  placeholder="Correspondence Address"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>City</label>
                <Input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <label>District</label>
                <Input
                  type="text"
                  placeholder="District"
                  name="district"
                  value={district}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={corrAddrSameAsProperty}
                    onChange={this.props.toggleAddress}
                  />{" "} &nbsp;
                  Correspondence Address is same as the property address
                </label>{" "}
              </div>
            </div>
            <br />
            <ButtonCombo
              leftBtnTitle="SAVE YOUR PROGRESS"
              rightBtnTitle="NEXT >> PROPERTY DETAILS"
              onClickLeft={this.handleSave}
              onClickRight={this.props.handleNext}
            />
          </Form>
          {/* <form>
              <table>
                  <tr>
                      <td>
                      <label>Owner's Name</label>
                      </td>
                      <td>
                      <input type="text" placeholder=""/>
                      </td>
                  </tr>
                  <tr>
                      <td>
                      <label>Owner's Name</label>
                      </td>
                      <td>
                      <input type="text" placeholder=""/>
                      </td>
                  </tr>
                  <tr>
                      <td>
                      <label>Owner's Name</label>
                      </td>
                      <td>
                      <input type="text" placeholder=""/>
                      </td>
                  </tr>
              </table>
          
           
      
            {/* <Form.Field inline>
              <label>Owner's Name</label>
              <Input placeholder="" />
            </Form.Field>
            <Form.Field inline>
              <label>Guardian's Name</label>
              <Input placeholder="" />
            </Form.Field> 
          </form>
        */}
        </div>
      </div>
    );
  }
}
