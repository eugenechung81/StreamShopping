import React, {Component} from 'react';
import {Button, Image, Text, View} from "react-native";
import {connect} from "react-redux";
import {getRates, openShipping} from "../actions/shippingActions";
import {openDelivery} from "../actions/deliveryActions";

class ShoppingItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {

    let button = <View
            style={{
              position: "absolute",
              top: 50,
              left: 20,
            }}
          >
            <Button
              onPress={() => {
                this.props.dispatch(getRates(this.props.weight));
                this.props.dispatch(openShipping(this.props.id, this.props.cost));
              }}
              style={{}}
              title="Order"
              color="red"
            />
          </View>;
    if( this.props.status == "in_transit" )
      button = <View
            style={{
              position: "absolute",
              top: 50,
              left: 5,
            }}
          >
            <Button
              onPress={() => {
                this.props.dispatch(openDelivery());
              }}
              style={{}}
              title="In Transit"
              color="gray"
            />
          </View>;
    else if (this.props.status == "ordered") {
      button = <View
            style={{
              position: "absolute",
              top: 50,
              left: 10,
            }}
          >
            <Button
              onPress={() => {
                this.props.dispatch(openDelivery());
              }}
              style={{}}
              title="Ordered"
              color="gray"
            />
          </View>;
    }
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

        {button}

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

export default connect() (ShoppingItem);