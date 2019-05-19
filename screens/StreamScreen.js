import React, {Component} from 'react';
import {View} from 'react-native';
import StreamOpenTok from "../components/StreamOpenTok";
import ChatPanel from "../components/ChatPanel";
import ShoppingPanel from "../components/ShoppingPanel";

class StreamScreen extends Component {
  render() {
    return (
      <View>
        <View style={{height: 20, backgroundColor: "red"}}>
        </View>
        {/*<StreamVideo/>*/}

        <StreamOpenTok/>
        <ChatPanel/>
        <ShoppingPanel/>
      </View>
    )
  }
}

export default StreamScreen;
