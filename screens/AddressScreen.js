import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import TopHeader from "../navigation/TopHeader";

class AddressScreen extends Component {
   state = {
      email: '',
      password: '',
   };

   handleName = (text) => {
      this.setState({ Name: text })
   }
   handleEmail = (text) => {
      this.setState({ Email: text })
   }
   handleAddress = (text) => {
      this.setState({ Address: text })
   }
   handleApt = (text) => {
      this.setState({ Apt: text })
   }
   handleNumber = (text) => {
      this.setState({ Number: text })
   }
   handleCity = (text) => {
      this.setState({ City: text })
   }
   handleState = (text) => {
      this.setState({ State: text })
   }
    handleZipcode = (text) => {
      this.setState({ Zipcode: text })
   }

   login = (email, pass) => {

   }

  render() {
    return (
      <View style={styles.container}>

       <TopHeader navigation={this.props.navigation} title="Address" />

        <Text style={{
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}>Address</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Full Name"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleName}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email Address"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Street Address"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleAddress}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Apartment, Suite, Building (Optional)"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleApt}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Telephone Number"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleNumber}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="City"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleCity}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="State"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleState}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Zip Code"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handleZipcode}
        />


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

export default AddressScreen;


const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#E0FFFF',
  //   paddingTop: 20
  //
  // },
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
  },
  text: {
    padding: 2,
    fontSize: 25,
    // fontStyle: "italic"
  },
})
