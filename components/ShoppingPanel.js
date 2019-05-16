import React, {Component} from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from "react-native";
import ShoppingItem from "./ShoppingItem";
import Modal from "./Modal";


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
          top: 25,
          height: 495,
          width: 100,
          // backgroundColor: "blue",
          position: "absolute",
          right: 10,
        }}
      >
        {/*<ScrollViewExample/>*/}
        <Modal ref="shoppingModal"/>
        <ScrollView
          style={{
            height: 400,
          }}
          // pagingEnabled={true}
        >
          <ShoppingItem
            imgPath={require('./../pen.jpg')}
            description={'Pen - Used'}
            cost={1}
            onOrder={()=> {
              this.refs["shoppingModal"].toggleModal(true);
            }}
          />
          <ShoppingItem
            imgPath={require('./../mouse.jpg')}
            description={'Mouse - Used'}
            cost={5}
            onOrder={() => {
              this.refs.shoppingModal.toggleModal(true);
            }}
          />
          <ShoppingItem
            imgPath={require('./../mouse.jpg')}
            description={'Mouse - Used'}
            cost={5}
          />
        </ScrollView>
      </View>
    )
  }
}
