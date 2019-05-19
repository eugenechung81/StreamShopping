import React, {Component} from 'react';
import {Dimensions, Image, View} from "react-native";
import {OTPublisher, OTSession, OTSubscriber} from "opentok-react-native";

export default class extends Component {

  constructor(props) {
    super(props);
        this.apiKey = '46327222';
    this.sessionId = '2_MX40NjMyNzIyMn5-MTU1ODI3Njk2Mjc0OX5UUTBrb3pBN09GbHNKcjFXZ1RxaEpvTmh-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjMyNzIyMiZzaWc9NDZhNmFkMmExNjZmZDgzMTIyNmU5NDYzOGU5MDY3Mjc0OTJlOGFmYTpzZXNzaW9uX2lkPTJfTVg0ME5qTXlOekl5TW41LU1UVTFPREkzTmprMk1qYzBPWDVVVVRCcmIzcEJOMDlHYkhOS2NqRlhaMVJ4YUVwdlRtaC1mZyZjcmVhdGVfdGltZT0xNTU4MjgwMTYyJm5vbmNlPTAuNDUyMDcwODYwNDI1ODUyMSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTU4MzY2NTYxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
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
