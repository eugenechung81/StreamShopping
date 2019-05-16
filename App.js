import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import ShippingInfo, {ShippingOptionSection} from "./components/shipping/ShippingInfo";
import ShoppingPanel from "./components/ShoppingPanel";
import StreamVideo from "./components/StreamVideo";


class App extends Component {
  componentDidMount() {
  }

  render() {


    return (
      <View>
        <View style={{height: 20, backgroundColor: "red"}}>
        </View>
        {/*<StreamVideo/>*/}
        {/*<ShippingOptionSection/>*/}
        {/*<ShippingInfo/>*/}
        <ShoppingPanel/>

        {/*Test*/}
        {/*<ShippingOption/>*/}
        {/*<ModalExample></ModalExample>*/}

      </View>
    );
  }
}

export default App