import React, {Component} from 'react';
import {Button, default as Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import store from "./store";
import ShoppingPanel from "./components/ShoppingPanel";
import StreamVideo from "./components/StreamVideo";
import ChatPanel from "./components/ChatPanel";
import {OTPublisher, OTSession, OTSubscriber} from "opentok-react-native";
import StreamOpenTok from "./components/StreamOpenTok";


store.subscribe(() => {
  console.log("store changed", store.getState());
});

class App extends Component {
  componentDidMount() {
  }

  render() {
    // console.log(this.token);
    //var screenWidth = Dimensions.get('window').width;
    return (
      <Provider store={store}>
        <View>
          <View style={{height: 20, backgroundColor: "red"}}>
          </View>
          {/*<StreamVideo/>*/}

          <StreamOpenTok/>
          <ChatPanel/>
          <ShoppingPanel/>
        </View>
      </Provider>
    );
  }
}

export default App