import {combineReducers} from "redux";
import shippingOptions from "./shippingOptions";
import {items} from "./items";
import {settings} from "./settings";


export default combineReducers({
  'settings': settings,
  'items': items,
  'shippingOptions': shippingOptions,
});