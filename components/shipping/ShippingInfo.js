import React, {Component} from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from "react-native";


class ShippingOptionSection extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View
        style={{
          borderColor: "gray",
          borderWidth: 1,
          width: screenWidth,
          height: 400,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
          }}
        >{this.props.title}</Text>
        <Text>{this.props.description}</Text>
        <View
          style={{
            marginTop: 60,
            height: 200,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              // height: 100,
              // width: 50,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require("../../img/usps.png")}
            >
            </Image>
            <Text>Package</Text>
            <Text>$9.50</Text>
            <Text>7 days</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require("../../img/fedex.png")}
            >
            </Image>
            <Text>Package</Text>
            <Text>$5.00</Text>
            <Text>7 days</Text>
          </View>
        </View>
        <Button
          style={{
            width: 300,
          }}
          title="Order Total: $19.50"
          color="gray"
        />
      </View>
    )
  }
}


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
          //height: 200,
        }}
        horizontal={true}
        pagingEnabled={true}
      >
        <ShippingOptionSection title="Ground" description="Standard, get it within 7-9 days."/>
        <ShippingOptionSection title="Priority" description="Get it faster, get it within 2-4 days."/>
        {/*<View*/}
        {/*  style={{*/}
        {/*    backgroundColor: '#5f9ea0',*/}
        {/*    flex: 1,*/}
        {/*    marginTop: 20,*/}
        {/*    width: screenWidth,*/}
        {/*    // height: "100%",*/}
        {/*    justifyContent: 'center',*/}
        {/*    alignItems: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text>Screen 1</Text>*/}
        {/*  <Text>{this.state.data.body}</Text>*/}
        {/*  <Button*/}
        {/*    title="Red button!"*/}
        {/*    color="red"*/}
        {/*  />*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    backgroundColor: '#663399',*/}
        {/*    flex: 1,*/}
        {/*    marginTop: 20,*/}
        {/*    width: screenWidth,*/}
        {/*    // height: 100,*/}
        {/*    justifyContent: 'center',*/}
        {/*    alignItems: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text>Screen 2</Text>*/}
        {/*  <Button*/}
        {/*    title="Red button!"*/}
        {/*    color="red"*/}
        {/*  />*/}

        {/*</View>*/}
      </ScrollView>
    )
  }
}
export { ShippingOptionSection };
export default ShippingInfo;