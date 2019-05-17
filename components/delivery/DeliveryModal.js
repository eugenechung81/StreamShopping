import React, {Component} from "react";
import {Image, Button, Text, Modal, View} from "react-native";
import {connect} from "react-redux";
import {closeDelivery} from "../../actions/deliveryActions";

class DeliveryModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >
          <View
            style={{
              marginTop: 200,
              height: "100%",
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: 0,
            }}
          >
            <Text style={{
              marginTop: 20,
              fontSize: 24,
              marginBottom: 20,
            }}>Delivery Status:</Text>
             <Image
               style={{
                 height: 300,
                 marginBottom: 20,
               }}
               source={require('./../../img/map.png')}/>
             <Button
                onPress={() => {
                  this.props.dispatch(closeDelivery());
                }}
                title="Close"
                color="gray"
              />
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect((state) => {
  return {
    modalVisible: state.settings.showDeliveryModal,
  }
})(DeliveryModal);