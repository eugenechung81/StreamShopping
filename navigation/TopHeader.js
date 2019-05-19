import React from "react";
import { Header } from "react-native-elements/src/index";

import HamburgerMenu from "./HamburgerMenu";

const TopHeader = props => {
  console.log(props);
  let color = 'red';
  if(props.title == "Stream")
    color = 'rgba(250, 250, 250, 0.3)';
  return (
    <Header
      containerStyle={{
        backgroundColor: color,
        height: 30,
        padding: 0,
        paddingTop: 0,
      }}
      leftComponent={<HamburgerMenu navigation={props.navigation} />}
      //   statusBarProps={{ barStyle: 'light-content', hidden: true, translucent: true }}
    />
  );
};

export default TopHeader;