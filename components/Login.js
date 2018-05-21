import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  DrawerLayoutAndroid
} from "react-native";

import { StackNavigator } from "react-navigation";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      uemail: "",
      upassword: ""
    };
  }
  
  async onLoginPress() {
    const uemail = this.state.uemail;
    const upassword = this.state.upassword;

    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    
    if (uemail == email && upassword == password) {
      console.log("Success Login");
      this.props.navigation.navigate("Profile"); 
    }
    else{
      console.log("Fail Login");
      this.props.navigation.navigate("Register");

    }


  }
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Home")}
              title="Home"
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Login")}
              title="Login"
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Register")}
              title="Register"
            >
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Profile")}
              title="Profile"
            >
              Profile
            </Text>
          </TouchableOpacity>
      </View>
    );
    return (
      
      <View style={styles.container}>

        <DrawerLayoutAndroid
            drawerWidth={100}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View style={{flex: 1}}>
                <View behavior="padding" style={styles.container}>
                  <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("./ace-data-system.png")} />
                  </View>
                  <KeyboardAvoidingView style={styles.keyboard}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,0.7)"
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={this.state.uemail}
                      onChangeText={uemail => this.setState({ uemail })}
                    />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,0.7)"
                      returnKeyType="go"
                      secureTextEntry
                      ref={input => (this.passwordInput = input)}
                      value={this.state.upassword}
                      onChangeText={upassword => this.setState({ upassword })}
                    />

                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={this.onLoginPress.bind(this)}
                    >
                      <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                  </KeyboardAvoidingView>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate("Register")}
                    title="Sign up"
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate("ForgetPassword")}
                    title="Forget Password"
                  >
                    Forget Password
                  </Text>
                </TouchableOpacity>
            </View>
          </DrawerLayoutAndroid>   


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard:{
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
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

AppRegistry.registerComponent("Login", () => Login);
