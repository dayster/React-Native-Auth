import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  DrawerLayoutAndroid
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  
  static navigationOptions = {
    header: null
  };

  onForgetPress() {
        this.props.navigation.navigate("Login");
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
      <View style={{flex: 1}}>
        <DrawerLayoutAndroid
              drawerWidth={100}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
              <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onForgetPress.bind(this)}
                  >
                    <Text style={styles.buttonText}>Forget Password</Text>
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
