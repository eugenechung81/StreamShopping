export function getRates(weight) {
  return function (dispatch) {
    fetch('https://api.shipengine.com/v1/rates', {
      method: 'POST',
      headers: {
        'api-key': 'TEST_c2H2cg9/Oli+xJjuOEt+WvxViijtLy8wapw0GZo0+G0',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "shipment": {
          "validate_address": "no_validation",
          "ship_to": {
            "name": "Mickey and Minnie Mouse",
            "phone": "714-781-4565",
            "company_name": "The Walt Disney Company",
            "address_line1": "500 South Buena Vista Street",
            "city_locality": "Burbank",
            "state_province": "CA",
            "postal_code": "91521",
            "country_code": "US"
          },
          "ship_from": {
            "name": "Dade Murphy",
            "phone": "512-485-4282",
            "company_name": "Zero Cool",
            "address_line1": "345 Chambers Street",
            "address_line2": "Suite 100",
            "city_locality": "New York City",
            "state_province": "NY",
            "postal_code": "10282",
            "country_code": "US",
          },
          "packages": [
            {
              "weight": {
                "value": weight,
                "unit": "ounce"
              }
            }
          ]
        },
        "rate_options": {
          "carrier_ids": [
            "se-133852",
            "se-133854"]
        }
      })
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.rate_response.rates);
        let rate = res.rate_response.rates.find((r) => {
          return r.service_code == "usps_parcel_select" && r.package_type == "package";
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'usps_parcel_select_package',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "fedex_ground" && r.package_type == null;
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'fedex_ground',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "usps_priority_mail" && r.package_type == "package";
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'usps_priority_mail_package',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "fedex_2day" && r.package_type == null;
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'fedex_2day',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "usps_priority_mail_express" && r.package_type == "package";
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'usps_priority_mail_express_package',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
        rate = res.rate_response.rates.find((r) => {
          return r.service_code == "fedex_first_overnight" && r.package_type == null;
        });
        dispatch({
          type: 'UPDATE_SHIPPING_OPTION',
          key: 'fedex_first_overnight',
          cost: rate.shipping_amount.amount,
          days: rate.delivery_days,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function closeShipping() {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_SHIPPING_OPTION',
      key: 'usps_parcel_select_package',
      cost: 0,
      days: 0,
    });
    dispatch({
      type: 'UPDATE_SHIPPING_OPTION',
      key: 'fedex_ground',
      cost: 0,
      days: 0,
    });
    dispatch({
      type: 'UPDATE_SHIPPING_OPTION',
      key: 'usps_priority_mail_package',
      cost: 0,
      days: 0,
    });
    dispatch({
      type: 'CLOSE_SHIPPING'
    })
  };
}

export function openShipping(id, cost) {
  return function (dispatch) {
    dispatch({
      'type': 'UPDATE_ORDER_TOTAL',
      'total': cost,
    });
    dispatch({
      'type': 'UPDATE_ORDER_DETAILS',
      'cost': cost,
      'id': id,
    });
    dispatch({
      type: 'OPEN_SHIPPING'
    });
  };
}