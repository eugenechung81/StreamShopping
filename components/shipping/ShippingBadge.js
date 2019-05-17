import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from "react-native";
import {updateTotal} from "../../actions/orderActions";
import {connect} from "react-redux";

class ShippingBadge extends Component {
  render() {
      return (
        <TouchableHighlight
          onPress={()=> {
            this.props.dispatch(updateTotal(this.props.cost + this.props.orderCost));
          }}
          underlayColor="white"
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={this.props.logo}
            >
            </Image>
            <Text>{this.props.label}</Text>
            <Text>${this.props.cost}</Text>
            <Text>{this.props.days} days</Text>
          </View>
        </TouchableHighlight>
      )
  }
}

export default connect((state) => {
  return {
    orderCost: state.settings.orderCost,
  }
}) (ShippingBadge);