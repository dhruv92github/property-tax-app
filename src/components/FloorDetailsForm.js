import React, { Component } from 'react'
import { Input,Select,Segment,Icon,Button } from "semantic-ui-react";

export default class FloorDetailsForm extends Component {

    
    render() {
        const relationOptions = [
        { key: "s", value: "son", text: "son" },
        { key: "f", value: "father", text: "father" },
        { key: "m", value: "mother", text: "mother" }
      ];
        const {NoOfForm, floorData, removeFloor,}=this.props;
        let {floorNo,
        usage,
        occupancy,
        constructionType,
        builtUpArea,
        from,
        to}=floorData;
      
        return ( <Segment raised >
            <div className="form-div" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
               
                <div >
                <div className="input-group" >
                <label>Floor No.</label>
                <Select placeholder='Select ' options={floorNo} />
               </div>
              
               <div className="input-group">
                <label>Usage</label>
                <Select placeholder='Select ' options={usage} />
               
               </div>
               <div className="input-group">
                <label>Occupancy</label>
                <Select placeholder='Select ' options={occupancy} />
               </div>
               <div className="input-group">
                <label> Construction Type</label>
                <Select placeholder='Select ' options={constructionType} />
               </div>
               <div className="input-group">
                <label>Built-Up Area(in Sq. Ft.)</label>
                <Input  placeholder='Built-Up Area'
                name="builtUpArea"
                value={builtUpArea}
                onChange={(e)=>this.props.handleChange(e,NoOfForm)} />
               </div>
               <div className="input-group">
                <label>From (Date)</label>
                <Input  placeholder=''
                name="from"
                value={from} />
               </div>
               <div className="input-group">
                <label>To / Current (Date) </label>
                <Input  placeholder=' ' 
                name="to"
                value={to} />
               </div>
               </div>
               <div style={{cursor:"pointer"}}>
               {(NoOfForm!==0)?
               (<Button color='teal' onClick={()=>removeFloor(this,NoOfForm)}>
                 <Icon name='delete' size='small'/> 
                Delete
               </Button>
               ):''}
               </div>
               
               </div>
               </Segment>
              
        )
    }
}
