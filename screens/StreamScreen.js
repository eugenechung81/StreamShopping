import React, {Component} from 'react';
import {View} from 'react-native';
import StreamOpenTok from "../components/StreamOpenTok";
import ChatPanel from "../components/ChatPanel";
import ShoppingPanel from "../components/shopping/ShoppingPanel";
import StreamVideo from "../components/StreamVideo";
import TopHeader from "../navigation/TopHeader";

class StreamScreen extends Component {
  render() {
    return (
      <View>
        {/*<StreamVideo/>*/}
        <StreamOpenTok/>

        <TopHeader
          navigation={this.props.navigation}
          title="Stream"
        />
        <ChatPanel/>
        <ShoppingPanel/>
      </View>
    )
  }
}

export default StreamScreen;
