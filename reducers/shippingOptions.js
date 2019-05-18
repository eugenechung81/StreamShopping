const shippingOptions = (state = {
  usps_parcel_select_package: {
    cost: 0,
    days: 0,
  },
  fedex_ground: {
    cost: 0,
    days: 0,
  },
  usps_priority_mail_package: {
    cost: 0,
    days: 0,
  },
  fedex_2day: {
    cost: 0,
    days: 0,
  },
  usps_priority_mail_express_package: {
    cost: 0,
    days: 0,
  },
  fedex_first_overnight: {
    cost: 0,
    days: 0,
  },

}, action) => {
  switch (action.type) {
    case 'UPDATE_SHIPPING_OPTION':
      return {...state, [action.key]: {
          cost: action.cost,
          days: action.days,
        }
      };
  }
  return state;
};

export default shippingOptions;