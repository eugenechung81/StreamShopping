import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from "./store";
import {TextInput, Button, default as Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import TopHeader from "./navigation/TopHeader";
import StreamScreen from "./screens/StreamScreen";
import PaymentsScreen from "./screens/PaymentsScreen";
import AddressScreen from "./screens/AddressScreen";
//
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });


class SettingsScreen extends  Component {

  render() {
    return (
      <View>
        <TopHeader
          navigation={this.props.navigation}
          title="Details"
        />
        <Text>This is Settings Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createDrawerNavigator({
  Stream: {
    screen: StreamScreen
  },
  Payments: {
    screen:PaymentsScreen
  },
  Address: {
    screen: AddressScreen
  }
}, {
  headerMode: 'none',
  defaultNavigationOptions: {
    headerVisible: false,
  }
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>

    )
  }
}