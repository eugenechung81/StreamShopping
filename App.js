import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import store from "./store";
import ShippingInfo from "./components/shipping/ShippingInfo";


// store.subscribe( ()=> {
//   console.log("store changed", store.getState());
// });


class App extends Component {
  componentDidMount() {
  }

  render() {


    return (
      <Provider store={store}>
        <View>
          <View style={{height: 20, backgroundColor: "red"}}>
          </View>
          {/*<StreamVideo/>*/}
          {/*<ShoppingPanel/>*/}

          <ShippingInfo/>

          {/*<ShippingInfo/>*/}
        </View>
      </Provider>
    );
  }
}

export default App