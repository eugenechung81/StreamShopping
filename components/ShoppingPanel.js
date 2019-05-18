import React, {Component} from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from "react-native";
import ShoppingItem from "./ShoppingItem";
import {connect} from "react-redux";
import ShippingModal from "./shipping/ShippingModal";
import DeliveryModal from "./delivery/DeliveryModal";

class ShoppingPanel extends Component {

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
          top: 25,
          height: 495,
          width: 100,
          position: "absolute",
          right: 10,
        }}
      >
        <ShippingModal/>
        <DeliveryModal/>
        <ScrollView
          style={{
            height: 400,
          }}
          // pagingEnabled={true}
        >
          {this.props.items.map(i => {
            return (
              <ShoppingItem
                key={i.id}
                id={i.id}
                imgPath={i.imgPath}
                description={i.description}
                cost={i.cost}
                weight={i.weight}
                status={i.status}
              />)
          })}

        </ScrollView>
      </View>
    )
  }
}

export default connect((state) => {
  return {
    items: state.items,
  }
}, null)(ShoppingPanel);