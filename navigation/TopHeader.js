import React from "react";
import { Header } from "react-native-elements/src/index";
import {Dimensions, Image, View} from "react-native";

import HamburgerMenu from "./HamburgerMenu";

const TopHeader = props => {
  console.log(props);
  let color = 'red';
  if(props.title == "Stream")
    color = 'rgba(250, 250, 250, 0.3)';
    // color = 'white';
  return (
    <Header
      containerStyle={{
        backgroundColor: color,
        height: 30,
        padding: 0,
        paddingTop: 0,
      }}
      leftComponent={<HamburgerMenu navigation={props.navigation} />}
      // centerComponent={<View><Image style={{ height: 40, width: 250}} source={require('./../img/logo.png')}></Image></View>}
      //   statusBarProps={{ barStyle: 'light-content', hidden: true, translucent: true }}
    />
  );
};

export default TopHeader;