export const settings = (state = {
  showShippingModal: false,
  showDeliveryModal: false,

  // current order
  orderId: null,
  orderCost: 0,
  orderTotal: 0,
}, action) => {
  switch (action.type) {
    case 'OPEN_SHIPPING':
      return {...state, showShippingModal: true};
    case 'CLOSE_SHIPPING':
      return {...state, showShippingModal: false};
    case 'OPEN_DELIVERY':
      return {...state, showDeliveryModal: true};
    case 'CLOSE_DELIVERY':
      return {...state, showDeliveryModal: false};
    case 'UPDATE_ORDER_DETAILS':
      return {...state, orderCost: action.cost, orderId: action.id};
    case 'UPDATE_ORDER_TOTAL':
      return {...state, orderTotal: action.total};
  }
  return state;
};