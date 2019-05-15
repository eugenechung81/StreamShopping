import React, { Component } from 'react';
import ScrollViewExample from './scroll_view.js';
import {Text, Button, Image, View, StyleSheet, TouchableHighlight, Modal, ScrollView} from 'react-native';
import {WebView } from 'react-native-webview';


class ModalExample extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View>
            <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>

               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>

                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>

                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>

            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}



const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100
   },
   modal: {
      flex: 1,
      marginTop: 100,
      alignItems: 'center',
      backgroundColor: '#58f769',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
});

// class MyWeb extends Component {
//   render() {
//     return (
//
//     );
//   }
// }

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      />
    );
  }
}


const App2 = () => {
  return (
    <View>
      <View style={{ height: 50}}>
        <View style={{ height: "100%", backgroundColor: "red"}}></View>
      </View>
      <View
        style={{
          height: 200,
          width: "30%",
          backgroundColor: "blue",
          position: "absolute",
          right: 10,
        }}
      >
        <ScrollViewExample/>
        <Text>Test</Text>
        <Text>Test2</Text>
      </View>
      {/*<MyWeb></MyWeb>*/}
      {/*<WebView source={{uri: 'http://www.google.com/'}}/>*/}
      <ModalExample></ModalExample>
      <Image style={{
        height: 200,
        width: 200,
      }} source = {require('C:/Development/reactNativeAndriod/watch1.png')} />
      {/*<Image source = {require('./watch1.png')} />*/}
      <Button
        // onPress = {handlePress}
        title="Red button!"
        color="red"
      />

      <React.Fragment>
        <View>
          <Image
            source={require('./watch1.png')}
            style={{tintColor: 'gray'}}
          />
          <Image
            source={require('./watch1.png')}
            style={{position: 'absolute', opacity: 0.3}}
          />
        </View>
      </React.Fragment>

    </View>
  )
}

class App extends Component {
  render() {
    return (
      {/*<WebView source={{uri: 'http://www.google.com/'}}/>*/}
    );
  }
}




export default App2