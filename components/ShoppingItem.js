import React, {Component} from 'react';
import {Button, Image, Text, View} from "react-native";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <View
        style={{
          height: 150,
          width: 100,
          marginBottom: 15,
        }}
      >
        <Image
          style={{
            height: 150,
            width: 100,
            borderColor: "gray",
            borderWidth: 1,
          }}
          source={this.props.imgPath}
        />

        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
          }}
        >
          <Button
            style={{
              // backgroundColor: 'rgba(52, 52, 52, 0.2)'
            }}
            title="Order"
            color="red"
          />
          {/*<Text>Order</Text>*/}
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 4,
          }}
        >
          <Text
            style={{
              color: "#63e006",
              fontSize: 24,
              fontWeight: 'bold',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5
            }}
          >
            ${this.props.cost}
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: "white",
            backgroundColor: 'rgba(206,201,215,0.8)',
            position: "absolute",
          }}
        >
          <Text>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}
