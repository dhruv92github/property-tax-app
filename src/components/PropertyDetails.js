import React, { Component } from 'react'
import { Form,Input,Select } from "semantic-ui-react";
import ButtonCombo from './ButtonCombo'

export default class PropertyDetails extends Component {
   
    handleNext=()=>{
        this.props.handleNext();
      }
    render() {
        const relationOptions=[{key:'s',value:'s',text:'son' },
        {key:'smm',value:'smm',text:'father' },{key:'sm',value:'sm',text:'mother' }];
        
        return (
            <div >
            <div className="personal-details">
    
              <Form >
              <div className="form-div">
                <div className="input-group">
                <label>Old Ward No.</label>
                <Select placeholder='Select ' options={relationOptions} />
               </div>
              
               <div className="input-group">
                <label>New Ward No.</label>
                <Select placeholder='Select ' options={relationOptions} />
               
               </div>
               <div className="input-group">
                <label>OwnerShip Type</label>
                <Select placeholder='Select ' options={relationOptions} />
               </div>
               <div className="input-group">
                <label> Property Type</label>
                <Select placeholder='Select ' options={relationOptions} />
               </div>
               <div className="input-group">
                <label>Zone</label>
                <Select placeholder='Select ' options={relationOptions} />
               </div>
               <div className="input-group">
                <label>Account No.</label>
                <Input type="number"  placeholder='Account No.' />
               </div>
               <div className="input-group">
                <label>Plot No. </label>
                <Input type="number" placeholder='Plot No. ' />
               </div>
               <div className="input-group">
                <label>Village / Mauja Name</label>
                <Input type="text"  placeholder='Village Name' />
               </div>
               <div className="input-group">
                <label>Road Width</label>
                <Select placeholder='Select ' options={relationOptions} />
               </div>
               <div className="input-group">
                <label>Plot Area (in Decimal)</label>
                <Input type="number"  placeholder='Plot Area' />
               </div>
               <div className="input-group">
                <label>Registration Date </label>
                <Input type="date"  />
               </div>
               <div className="input-group">
                <label>Property Address</label>
                <Input type="text"  placeholder='Property Address' />
               </div>
               <div className="input-group">
                <label>City</label>
                <Input type="text" placeholder='City' />
               </div>
               <div className="input-group">
                <label>District</label>
                <Input type="text" placeholder='District' />
               </div>
               </div>
                <br/>
              <ButtonCombo 
              leftBtnTitle="SAVE YOUR PROGRESS"
              rightBtnTitle="NEXT >> FLOOR & OTHER DETAILS"
              onClickLeft={this.handleSave}
              onClickRight={this.handleNext}
              />
    
              </Form>
              
          
            </div>
          </div>
       
        )
    }
}
