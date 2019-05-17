export const settings = (state = {
  counter: 0,
  showShippingModal: false,
  showDeliveryModal: false,
  orderTotal: 0,
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
    case 'OPEN_DELIVERY':
      return {...state, showDeliveryModal: true};
    case 'CLOSE_DELIVERY':
      return {...state, showDeliveryModal: false};
  }
  return state;
};