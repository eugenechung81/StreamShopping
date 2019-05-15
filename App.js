import React, {Component} from 'react';
import ScrollViewExample from './scroll_view.js';
import {Text, Button, Image, View, StyleSheet, TouchableHighlight, Modal, ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import StreamVideo from "./components/StreamVideo";
import ShoppingItem from "./components/ShoppingItem";


class ModalExample extends Component {
  state = {
    modalVisible: false,
  }

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >

          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <ShippingInfo/>
            <TouchableHighlight
              onPress={() => {
                this.toggleModal(!this.state.modalVisible)
              }}
            >

              <Text style={styles.text}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true)
          }}
        >
          <Text style={styles.text}>Open Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#58f769',
    // padding: 100
  },
  text: {
    color: '#3f2949',
    marginTop: 10
  }
});


class ShippingInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView
        style={{
          height: 200,
        }}
        horizontal={true}
        pagingEnabled={true}
      >
        <View
          style={{
            backgroundColor: '#5f9ea0',
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            // height: "100%",
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Screen 1</Text>
          <Text>{this.state.data.body}</Text>
          <Button
            title="Red button!"
            color="red"
          />
        </View>
        <View
          style={{
            backgroundColor: '#663399',
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            // height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Screen 2</Text>
          <Button
            title="Red button!"
            color="red"
          />

        </View>
      </ScrollView>
    )
  }
}


class App extends Component {
  componentDidMount() {
  }

  render() {


    return (
      <View>
        {/*<ShippingInfo/>*/}
        <View style={{height: 20}}>
          <View style={{height: "100%", backgroundColor: "red"}}></View>
        </View>
        <StreamVideo/>

        <View
          style={{
            top: 25,
            height: 495,
            width: 100,
            // backgroundColor: "blue",
            position: "absolute",
            right: 10,
          }}
        >
          {/*<ScrollViewExample/>*/}
          <ScrollView
            style={{
              height: 400,
            }}
            // pagingEnabled={true}
          >
            <ShoppingItem
              imgPath={require('./pen.jpg')}
              description={'Pen - Used'}
              cost={1}
            />
            <ShoppingItem
              imgPath={require('./mouse.jpg')}
              description={'Mouse - Used'}
              cost={5}
            />
            <ShoppingItem
              imgPath={require('./mouse.jpg')}
              description={'Mouse - Used'}
              cost={5}
            />
          </ScrollView>
        </View>
        
        <ModalExample></ModalExample>

        <ShoppingItem/>
        <View
          style={{
            height: 150,
            width: 150,
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderColor: "gray",
              borderWidth: 1,
            }}
            source={require('./pen.jpg')}
          />

          <View
            style={{
              position: "absolute",
              top: 50,
              left: 40,
            }}
          >
            <Button
              style={{
                // backgroundColor: 'rgba(52, 52, 52, 0.2)'
              }}
              title="Order"
              color="red"
            />
            {/*<Text>Order</Text>*/}
          </View>

          <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 4,
          }}>
            <Text style={{
              color: "#63e006",
              fontSize: 24,
              fontWeight: 'bold',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5
            }}>
              $1
            </Text>
          </View>

          <View style={{
            // backgroundColor: "white",
            backgroundColor: 'rgba(206,201,215,0.8)',
            position: "absolute",
          }}>
            <Text>Pen - Used</Text>
          </View>
        </View>

      </View>
    );
  }
}

export default App