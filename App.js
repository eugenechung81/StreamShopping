import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import ShippingInfo, {ShippingOptionSection} from "./components/shipping/ShippingInfo";
import ShoppingPanel from "./components/ShoppingPanel";
import StreamVideo from "./components/StreamVideo";


import {createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import CounterApp from "./CounterApp";

const initialState = {
  currentItem: {
    total: 0,
    shoppingOptions: {
      packageGround: {
        cost: 9.5,
        shippingDays: 7,
      }
    }
  }
};

const items = (state = [{
  'id': 'item1',
  'cost': 1,
  'description': 'Pen - Used 2',
  'imgPath': require('./pen.jpg'),
}, {
  'id': 'item2',
  'cost': 1,
  'description': 'Pen - Used',
  'imgPath': require('./pen.jpg'),
}, {
  'id': 'item3',
  'cost': 5,
  'description': 'Mouse - Used',
  'imgPath': require('./mouse.jpg'),
},], action) => {
  return state;
};

const settings = (state ={
  counter: 0,
  showShippingModal: false,
}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {...state, counter: state.counter - 1};
    case 'OPEN_SHIPPING':
      return {...state, showShippingModal: true};
    case 'CLOSE_SHIPPING':
      return {...state, showShippingModal: false};
  }
  return state;
};

const store = createStore(combineReducers({
  'settings': settings,
  'items': items,
}));

store.subscribe( ()=> {
  console.log("store changed", store.getState());
})


class App extends Component {
  componentDidMount() {
  }

  render() {


    return (
      <Provider store={store}>
        <View>
          <View style={{height: 20, backgroundColor: "red"}}>
          </View>
          {/*<StreamVideo/>*/}
          {/*<ShoppingPanel/>*/}

          <ShippingInfo/>
        </View>
      </Provider>
    );
  }
}

export default App