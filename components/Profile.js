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
  Button,
  View,
  StatusBar,
  DrawerLayoutAndroid
} from "react-native";

import { StackNavigator } from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Profile extends Component {
  
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: "Profile",
      headerLeft: (
        <Icon
          name="md-menu"
          size={28}
          color="black"
          style={{ paddingLeft: 20 }}
          onPress={() => alert('ea')}
          />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="!out" color="#000" />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    AsyncStorage.removeItem('email');
      
    this.props.navigation.navigate("Login");
  };

  componentDidMount() {
      AsyncStorage.getItem("email").then((value) => {
          this.setState({"email": value})
      }).done();
      AsyncStorage.getItem("password").then((value) => {
          this.setState({"password": value})
      }).done();
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
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Email : </Text><Text style={styles.buttonText}>{ this.state.email }</Text>
                  </View>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Password : </Text><Text style={styles.buttonText}>{ this.state.password }</Text>
                  </View>
                </View>
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

AppRegistry.registerComponent("Profile", () => Profile);
