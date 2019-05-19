import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from "./store";
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import StreamScreen from "./screens/StreamScreen";

store.subscribe(() => {
  console.log("store changed", store.getState());
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: StreamScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

const NavigationContainer = createAppContainer(AppNavigator);

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        {/*<NavigationContainer/>*/}
        <StreamScreen/>
      </Provider>
    );
  }
}

export default App