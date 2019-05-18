import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {connect} from "react-redux";
import {closeShipping} from "../../actions/shippingActions";
import {executeOrder} from "../../actions/orderActions";

class OrderInfo extends Component {
  render() {
    let orderTotal = `Order Total: $${this.props.orderTotal}`;
    return (
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          height: 200,
        }}
      >
        <View>
          <Button
            onPress={() => {
              this.props.dispatch(executeOrder(this.props.orderId));
              this.props.dispatch(closeShipping());
            }}
            style={{
              width: 300,
            }}
            title={orderTotal}
            color="gray"
          />
        </View>
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Button
            onPress={() => {
              this.props.dispatch(closeShipping());
            }}
            title="Close"
            color="gray"
          /></View>
      </View>
    )
  }
}

export default connect((state) => {
  return {
    orderId: state.settings.orderId,
    orderTotal: state.settings.orderTotal,
  }
})(OrderInfo);