import React, {Component} from 'react';

import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import TopHeader from "../navigation/TopHeader";

class PaymentsScreen extends Component {
  state = {
    name: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  };
  handleName = (text) => {
     this.setState({ name: text })
  }
  handleCardNumber = (text) => {
     this.setState({ cardNumber: text })
  }
  handleExpiration = (text) => {
     this.setState({ expirationDate: text })
  }
  handleCode = (text) => {
     this.setState({ securityCode: text })
  }
  login = (name, pass) => {
     alert('Your order has been confirmed! Please check your E-mail for a confirmation')
  }
  render() {
    return (
      <View style={styles.container}>
         <TopHeader navigation={this.props.navigation} title="Payments" />

        <Text style={{
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}>Payments</Text>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Name"
              placeholderTextColor = "#808080"
              autoCapitalize = "none"
              onChangeText = {this.handleName}/>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Card Number"
              placeholderTextColor = "#808080"
              autoCapitalize = "none"
              onChangeText = {this.handleCardNumber}/>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Expiration Date"
              placeholderTextColor = "#808080"
              autoCapitalize = "none"
              onChangeText = {this.handleExpiration}/>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Security Code"
              placeholderTextColor = "#808080"
              autoCapitalize = "none"
              onChangeText = {this.handleCode}/>

           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                 () => this.login(this.state.email, this.state.password)
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
           </TouchableOpacity>
      </View>
    )
  }
}

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 35
  },
  input: {
    margin: 10,
    marginBottom: 5,
    height: 40,
    borderColor: '#808080',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#8B808B',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
})
