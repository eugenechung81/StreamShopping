import React from "react";
import { Icon } from "react-native-elements/src/index";

const HamburgerMenu = props => {
  return (
    <Icon
      color="#fff"
      name="menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;