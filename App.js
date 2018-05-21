/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Login from "./components/Login";
import Profile from "./components/Profile";
import ForgetPassword from "./components/ForgetPassword";
import Register from "./components/Register";

import { StackNavigator } from "react-navigation";

class Home extends Component<{}> {
  static navigationOptions = {

    
  };
  render() {
    
    return (
      <View style={styles.container}>
        
        
              <Login navigation={this.props.navigation} />
            
    

      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  }
});