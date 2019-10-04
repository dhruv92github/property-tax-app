import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Menu,
  Item,
  Accordion,
  Sidebar,
  Icon
} from "semantic-ui-react";
import "../css/App.css";
import AppHeader from "./Header";
import Home from "./Home";
import SelfAssessment from "./SelfAssessment";
import SelfAssessForm from "./SelfAssesForm";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisibility: false,
      activeIndex: -1
    };
  }
  handleSidebarIndex = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  hideSidebar = () => this.setState({ sidebarVisibility: false });
  toggleSidebar = () =>
    this.setState({ sidebarVisibility: !this.state.sidebarVisibility });
  render() {
    const { sidebarVisibility, activeIndex } = this.state;
    return (
      <Container>
      <div className="container app">
        <AppHeader
          sidebarVisibility={sidebarVisibility}
          toggleSidebar={this.toggleSidebar}
        />
        <hr />
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon="labeled"
            inverted
            onHide={this.hideSidebar}
            vertical
            visible={sidebarVisibility}
            width='thin'
          >
            <Accordion inverted>
              <Item as="a">MASTER DATA</Item>

              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleSidebarIndex}
                as={Item}
              >
                PROPERTY
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Link to="/self-assessment">
                  <Item className="sub-menu" as="a">
                    <span className="sub-items">Self Assessment Form(SAF)</span>{" "}
                  </Item>
                </Link>
                <Item className="sub-menu" as="a">
                  <span className="sub-items">SAF Status</span>
                </Item>
                <Item className="sub-menu" as="a">
                  <span className="sub-items">Search Property</span>
                </Item>
                <Item className="sub-menu" as="a">
                  <span className="sub-items">Ward-Wise Holding</span>
                </Item>
              </Accordion.Content>

              <Item as="a">PAYMENT</Item>
              <Item as="a">KNOW YOUR TAX COLLECTOR</Item>
              <Item as="a">REPORT</Item>
              {/* <Item>
              <Dropdown text='More'  className='link item'>
                
                <Dropdown.Menu>
                  <Dropdown.Item as="a">
                     Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="a">
                    Choose Language
                  </Dropdown.Item>
                  <Dropdown.Item as="a">
                    Account Settings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Item> */}

            </Accordion>
            
          </Sidebar>
          <Sidebar.Pusher >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/self-assessment" component={SelfAssessment} />
              <Route path="/self-assess-form" component={SelfAssessForm} />
              
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </Container>
    );
  }
}
