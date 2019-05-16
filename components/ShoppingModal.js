import React, {Component} from "react";
import {Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import ShippingInfo from "./shipping/ShippingInfo";
import {connect} from "react-redux";

class ShoppingModal extends Component {
  // state = {
  //   modalVisible: false,
  // }

  // toggleModal(visible) {
  //   this.setState({modalVisible: visible});
  // }

  render() {
    console.log(this.props);
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
              // flex: 1,
              marginTop: 200,
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: 0,
              // padding: 100
            }}
          >
            {/*<Text style={styles.text}>Modal is open!</Text>*/}
            <ShippingInfo/>
            <TouchableHighlight
              onPress={() => {
                // this.toggleModal(!this.state.modalVisible)
                this.props.closeModal();
              }}
            >
              <Text style={{}}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        {/*<TouchableHighlight*/}
        {/*  onPress={() => {*/}
        {/*    this.toggleModal(true)*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{*/}

        {/*  }}>Open Modal</Text>*/}
        {/*</TouchableHighlight>*/}
      </View>
    )
  }
}

export default connect((state) => {
  return {
    modalVisible: state.settings.showShippingModal,
  }
}, (dispatch) => {
  return {
    closeModal: () => dispatch({type: 'CLOSE_SHIPPING'}),
  }

})(ShoppingModal);