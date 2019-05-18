import React, {Component} from 'react';
import {Dimensions, Image, View} from "react-native";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (

      <Image
        style={{
          height: screenHeight,
          width: screenWidth,
          borderColor: "gray",
          borderWidth: 1,
        }}
        source={require('../img/stream.jpg')}
      />

    )
  }
}
