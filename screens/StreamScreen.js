import React, {Component} from 'react';
import {View} from 'react-native';
import StreamOpenTok from "../components/StreamOpenTok";
import ChatPanel from "../components/ChatPanel";
import ShoppingPanel from "../components/ShoppingPanel";
import StreamVideo from "../components/StreamVideo";
import TopHeader from "../navigation/TopHeader";

class StreamScreen extends Component {
  render() {
    return (
      <View>
        {/*<View style={{height: 20, backgroundColor: "red"}}>*/}
        {/*</View>*/}
        <StreamVideo/>
         <TopHeader navigation={this.props.navigation} title="Stream" />

        <StreamOpenTok/>
        <ChatPanel/>
        <ShoppingPanel/>
      </View>
    )
  }
}

export default StreamScreen;
