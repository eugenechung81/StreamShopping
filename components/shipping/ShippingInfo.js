import React, {Component} from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from "react-native";

function ShippingBadge(props) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        style={{
          height: 50,
          width: 50,
        }}
        source={props.logo}
      >
      </Image>
      <Text>{props.label}</Text>
      <Text>${props.cost}</Text>
      <Text>{props.days} days</Text>
    </View>
  )
}

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
          {/*<View*/}
          {/*  style={{*/}
          {/*    // height: 100,*/}
          {/*    // width: 50,*/}
          {/*    alignItems: "center",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Image*/}
          {/*    style={{*/}
          {/*      height: 50,*/}
          {/*      width: 50,*/}
          {/*    }}*/}
          {/*    source={require("../../img/usps.png")}*/}
          {/*  >*/}
          {/*  </Image>*/}
          {/*  <Text>Package</Text>*/}
          {/*  <Text>$9.50</Text>*/}
          {/*  <Text>7 days</Text>*/}
          {/*</View>*/}
          {/*<View*/}
          {/*  style={{*/}
          {/*    alignItems: "center",*/}
          {/*  }}>*/}
          {/*  <Image*/}
          {/*    style={{*/}
          {/*      height: 50,*/}
          {/*      width: 50,*/}
          {/*    }}*/}
          {/*    source={require("../../img/fedex.png")}*/}
          {/*  >*/}
          {/*  </Image>*/}
          {/*  <Text>Package</Text>*/}
          {/*  <Text>$5.00</Text>*/}
          {/*  <Text>7 days</Text>*/}
          {/*</View>*/}
          {this.props.children}
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
      usps_parcel_select_package: {
        cost: 0,
        days: 0,
      },
      usps_priority_mail_package: {
        cost: 0,
        days: 0,
      },
      rates: [],
    };
  }

  componentDidMount() {
    fetch('https://api.shipengine.com/v1/rates', {
      method: 'POST',
      headers: {
        'api-key': 'ElJkhJuQIRoFq/kDEblco4LpZqRCdYNIoAVG7SywSXw',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "shipment": {
          "validate_address": "no_validation",
          "ship_to": {
            "name": "Mickey and Minnie Mouse",
            "phone": "714-781-4565",
            "company_name": "The Walt Disney Company",
            "address_line1": "500 South Buena Vista Street",
            "city_locality": "Burbank",
            "state_province": "CA",
            "postal_code": "91521",
            "country_code": "US"
          },
          "ship_from": {
            "name": "Dade Murphy",
            "phone": "512-485-4282",
            "company_name": "Zero Cool",
            "address_line1": "345 Chambers Street",
            "address_line2": "Suite 100",
            "city_locality": "New York City",
            "state_province": "NY",
            "postal_code": "10282",
            "country_code": "US",
          },
          "packages": [
            {
              "weight": {
                "value": 32.0,
                "unit": "ounce"
              }
            }
          ]
        },
        "rate_options": {
          "carrier_ids": [
            "se-123890"
          ]
        }
      })
    })
      .then((response) => response.json())
      .then((res) => {
        //console.log(res.rate_response.rates);
        let rate = res.rate_response.rates.find((r) => {
          return r.service_code == "usps_parcel_select" && r.package_type == "package";
        });
        this.setState({
          usps_parcel_select_package: {
            cost: rate.shipping_amount.amount,
            days: rate.delivery_days,
          }
        });

        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "usps_priority_mail" && r.package_type == "package";
        });
        this.setState({
          usps_priority_mail_package: {
            cost: rate.shipping_amount.amount,
            days: rate.delivery_days,
          }
        });
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
        <ShippingOptionSection
          title="Ground"
          description="Standard, get it within 7-9 days."
        >
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/usps.png")}
            cost={this.state.usps_parcel_select_package.cost}
            days={this.state.usps_parcel_select_package.days}
          />
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/fedex.png")}
            cost={5.00}
            days={7}
          />
        </ShippingOptionSection>
        <ShippingOptionSection title="Priority" description="Get it faster, get it within 2-4 days">
          <ShippingBadge
            label={"Package"}
            logo={require("../../img/usps.png")}
            cost={this.state.usps_priority_mail_package.cost}
            days={this.state.usps_priority_mail_package.days}
          />
        </ShippingOptionSection>
        {/*<Text>{JSON.stringify(rate)}</Text>*/}
      </ScrollView>
    )
  }
}
export { ShippingOptionSection };
export default ShippingInfo;