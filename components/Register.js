import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  DrawerLayoutAndroid
} from "react-native";

//import { StackNavigator } from "react-navigation";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  async onRegisterPress() {

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const password_confirmation = this.state.password_confirmation;
    

    if(password == password_confirmation){
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);
        console.log("Success Register");
        this.props.navigation.navigate("Login");
    }else{
        console.log("Fail Register");
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
      <View behavior="padding" style={styles.container}>
        <DrawerLayoutAndroid
            drawerWidth={100}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View style={{flex: 1}}>
                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={require("./ace-data-system.png")} />
                  <Text style={styles.subtext}>Sign Up:</Text>
                </View>
                <KeyboardAvoidingView>
                  <TextInput
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.emailInput.focus()}
                  />
                  <TextInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    style={styles.input}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    ref={input => (this.emailInput = input)}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                  />
                  <TextInput
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    ref={input => (this.passwordInput = input)}
                    onSubmitEditing={() => this.passwordCInput.focus()}
                    returnKeyType="next"
                    secureTextEntry
                  />
                  <TextInput
                    value={this.state.password_confirmation}
                    onChangeText={password_confirmation => this.setState({ password_confirmation })}
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    ref={input => (this.passwordCInput = input)}
                  />
                </KeyboardAvoidingView>
                <TouchableHighlight
                    onPress={this.onRegisterPress.bind(this)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableHighlight>
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

AppRegistry.registerComponent("Register", () => Register);
