import React, {Component} from 'react';
import {TouchableHighlight, Button, Dimensions, Image, ScrollView, Text, View} from "react-native";
import {connect} from "react-redux";
import {updateTotal} from "../../actions/orderActions";
import ShippingBadge from "./ShippingBadge";


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
          backgroundColor: this.props.color || "white",
          // borderColor: "gray",
          // borderWidth: 1,
          width: screenWidth,
          height: 300,
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
          {this.props.children}
        </View>
      </View>
    )
  }
}

export { ShippingOptionSection };

class ShippingInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usps_parcel_select_package: {
        cost: 0,
        days: 0,
      },
      usps_priority_mail_package: {
        cost: 0,
        days: 0,
      },
    };
  }

  componentDidMount() {
    //this.props.dispatch(getRates());
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        style={{
          //height: 200,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
      >
        <ShippingOptionSection
          title="Ground"
          description="Standard, get it within 7-9 days."
        >
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/usps.png")}
            cost={this.props.usps_parcel_select_package.cost}
            days={this.props.usps_parcel_select_package.days}
          />
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/fedex.png")}
            cost={5.00}
            days={7}
          />
        </ShippingOptionSection>
        <ShippingOptionSection
          title="Priority"
          description="Get it faster, get it within 2-4 days"
          color="#eeeeee"
        >
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/usps.png")}
            cost={this.props.usps_priority_mail_package.cost}
            days={this.props.usps_priority_mail_package.days}
          />
        </ShippingOptionSection>
      </ScrollView>
    )
  }
}

export default connect((state) => {
  return {
    usps_parcel_select_package: state.shippingOptions.usps_parcel_select_package,
    usps_priority_mail_package: state.shippingOptions.usps_priority_mail_package,
  }
}) (ShippingInfo);