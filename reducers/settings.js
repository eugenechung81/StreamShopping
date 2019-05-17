export const settings = (state = {
  showShippingModal: false,
  showDeliveryModal: false,
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
    case 'UPDATE_ORDER_COST':
      return {...state, orderCost: action.cost};
    case 'UPDATE_ORDER_TOTAL':
      return {...state, orderTotal: action.total};
  }
  return state;
};