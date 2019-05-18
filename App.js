import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import store from "./store";
import ShoppingPanel from "./components/ShoppingPanel";
import StreamVideo from "./components/StreamVideo";
import ChatPanel from "./components/ChatPanel";


store.subscribe(() => {
  console.log("store changed", store.getState());
});


class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <View style={{height: 20, backgroundColor: "red"}}>
          </View>
          <StreamVideo/>
          <ChatPanel/>
          <ShoppingPanel/>
        </View>
      </Provider>
    );
  }
}

export default App