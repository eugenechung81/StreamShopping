import React, {Component} from 'react';
import {Dimensions, Image, View} from "react-native";
import {OTPublisher, OTSession, OTSubscriber} from "opentok-react-native";

export default class extends Component {

  constructor(props) {
    super(props);
        this.apiKey = '46327222';
    this.sessionId = '2_MX40NjMyNzIyMn5-MTU1ODIxMTY0NzY5OX56MU9WVTB1TDlQRTl1Q1JaU2tYRUNqdUp-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjMyNzIyMiZzaWc9MTM1YWVmODk4ZTM2MGE3NWMxYzRhYWVlOWRjMDVjYzFjN2QyODZmODpzZXNzaW9uX2lkPTJfTVg0ME5qTXlOekl5TW41LU1UVTFPREl4TVRZME56WTVPWDU2TVU5V1ZUQjFURGxRUlRsMVExSmFVMnRZUlVOcWRVcC1mZyZjcmVhdGVfdGltZT0xNTU4MjExNjY5Jm5vbmNlPTAuOTQ0Mjk0NjI1ODg3NjQ4MSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNTU4MjE1MjY5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
  }

  componentDidMount() {

  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <OTSession
        apiKey={this.apiKey}
        sessionId={this.sessionId}
        token={this.token}
      >
        {/*<OTPublisher style={{width: screenWidth, height: screenHeight}}/>*/}
        <OTSubscriber style={{width: screenWidth, height: screenHeight}}/>
      </OTSession>
    )
  }
}
