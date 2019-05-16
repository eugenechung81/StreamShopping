import {combineReducers} from "redux";

const items = (state = [{
  'id': 'item1',
  'cost': 1,
  'description': 'Pen - Used 2',
  'imgPath': require('./../img/pen.jpg'),
}, {
  'id': 'item2',
  'cost': 1,
  'description': 'Pen - Used',
  'imgPath': require('./../img/pen.jpg'),
}, {
  'id': 'item3',
  'cost': 5,
  'description': 'Mouse - Used',
  'imgPath': require('./../img/mouse.jpg'),
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


export default combineReducers({
  'settings': settings,
  'items': items,
});