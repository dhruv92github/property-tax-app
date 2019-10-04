import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class Options extends Component {
  render() {
    return (
      <div className="options-list">
        {this.props.optionsList.map((item,i) => {
          return (<>
          <Button color="teal" className="btn"  key={i}>{item}</Button>
          <br/>
          </>)
        })}
      </div>
    );
  }
}
