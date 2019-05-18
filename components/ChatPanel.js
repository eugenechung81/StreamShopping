import React, {Component} from "react";
import {TextInput, Button, default as Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

function ChatLine(props) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: "green",
          fontWeight: "bold",
          marginRight: 5,
          width: 70,
        }}
      >{props.username}:</Text>
      <Text
        style={{
          flex: 1,
          flexWrap: 'wrap',
        }}
      >{props.message}</Text>
    </View>

  )
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    }
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        chats: [...this.state.chats, {
          username: 'mabel',
          msg: 'nice!'}
          ]
      });
    }, 3000);
    setTimeout(()=> {
      this.setState({
        chats: [...this.state.chats, {
          username: 'desmond',
          msg: 'I have five of these pens and they\'re great!'}
          ]
      });
    }, 6000);
  }

  render() {
    // var {width, height} = Dimensions.get('window');
    return (
      <View
        style={{
          backgroundColor: 'rgba(250, 250, 250, 0.3)',
          position: "absolute",
          // bottom: 100,
          top: 400,
          // height: 495,
          width: 280,
          left: 10,
          padding: 20,
        }}
      >
        <View
          style={{
            height: 120,
            justifyContent: "flex-end",
            flexDirection: "column",
            marginBottom: 15,
          }}
        >
          <ChatLine username="david" message="Can you tell me more about the pen?"/>
          {/*<ChatLine username="mabel" message="nice!"/>*/}
          {this.state.chats.map((c, index) => {
            return (<ChatLine key={index} username={c.username} message={c.msg}/>)
          })}
        </View>
        <View
          style={{}}
        >
          <TextInput
            style={{height: 40, borderColor: "gray", borderWidth: 1}}
            placeholder="Type here"
            onChangeText={(text) => {
            }}
          />
        </View>
      </View>
    )
  }
}
