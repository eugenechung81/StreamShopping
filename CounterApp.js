import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'

// @connect((store)=> {
//   return {
//     counter: store.counter,
//   }
// })
// NOT WORKING
class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.increaseCounter()
              //this.props.dispatch({type: 'INCREASE_COUNTER'});
            }}
          >
            <Text style={{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

// export default connect(mapStateToProps, null)(CounterApp)
export default connect((state) => {
  return {
    counter: state.settings.counter,
  }
}, (dispatch) => {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  }
})(CounterApp)


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});