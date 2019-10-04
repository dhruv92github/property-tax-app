import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import "../css/SelfAssessment.css";
import ButtonCombo from "./ButtonCombo";

export default class SelfAssessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      
    };
  }
  fillOnline = () => this.setState({ showModal: true});
  discardModal = () => {
    this.setState({ showModal: false });
    
  };
  proceedToForm=()=>{
    this.setState({ showModal: false });
    this.props.history.push("/self-assess-form");
  }
  render() {
    const { showModal  } = this.state;
    return (
      <>
        <Modal size="mini" open={showModal} onClose={this.discardModal}>
          <Modal.Header>Hi</Modal.Header>
          <Modal.Content>
            Does the property being assessed has any previous Holding Number?
          </Modal.Content>
          <Modal.Actions>
            <ButtonCombo
              leftBtnTitle="Yes"
              rightBtnTitle="No"
              onClickLeft={""}
              onClickRight={this.proceedToForm}
            />
          </Modal.Actions>
        </Modal>
        <div className="self-assessment">
          {/* <div class={"modal fade  "+showModal} style={{display:display}}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-body">
                Does the property beingassessed has any previous Holding Number?
              </div>
              <div className="modal-footer">
              <ButtonCombo
            leftBtnTitle="Yes"
            rightBtnTitle="No"
            onClickLeft={''}
            onClickRight={this.discardModal}
          />
               
              </div>
            </div>
          </div>
        </div> */}

          <div className="self-title">
            <h2>Self Assessment</h2>
          </div>
          <div className="right-content">
            <div className="terms-n-conditions">
              <ol list-style-type="1">
                <li>
                  Any person who has purchased or aquire it bt
                  succession,partition or by any suit, has to submit an
                  application which can be purchased form office.
                </li>
                <li>
                  this application with relecent Documents has to the submitted
                  in computer section and an acknowledgement is issued to the
                  applicant.
                </li>
                <li>
                  After processing the application office issue notice in the
                  name of purchaser,seller and for public.
                </li>
                <li>
                  Any peson who has purchased or aquire it bt
                  succession,partition or by any suit, has to submit an
                  application which can be purchased form office.
                </li>
                <li>
                  this application with relecent Documents has to the submitted
                  in computer section and an acknowledgement is issued to the
                  applicant.
                </li>
                <li>
                  After processing the application office issue notice in the
                  name of purchaser,seller and for public.
                </li>
                <li>
                  Any peson who has purchased or aquire it bt
                  succession,partition or by any suit, has to submit an
                  application which can be purchased form office.
                </li>
                <li>
                  this application with relecent Documents has to the submitted
                  in computer section and an acknowledgement is issued to the
                  applicant.
                </li>
                <li>
                  After processing the application office issue notice in the
                  name of purchaser,seller and for public.
                </li>
                <li>
                  Any peson who has purchased or aquire it bt
                  succession,partition or by any suit, has to submit an
                  application which can be purchased form office.
                </li>
                <li>
                  this application with relecent Documents has to the submitted
                  in computer section and an acknowledgement is issued to the
                  applicant.
                </li>
                <li>
                  After processing the application office issue notice in the
                  name of purchaser,seller and for public.
                </li>
              </ol>
            </div>
            <ButtonCombo
              leftBtnTitle="FILL & SUBMIT ONLINE"
              rightBtnTitle="DOWNLOAD & SUBMIT OFFLINE"
              onClickLeft={this.fillOnline}
              onClickRight={this.fillOffline}
            />
          </div>
        </div>
      </>
    );
  }
}
