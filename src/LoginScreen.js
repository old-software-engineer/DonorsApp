/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null 
  }

  constructor(props) {
    	super(props);
    	this.state = {
           userName: "",
           password: "",
           inValid: false       
        };
      this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(action)
  {
  	if (action == "login"){ 
      user_name = this.state.userName
    	password = this.state.password
    	if ( user_name == "" && password == "" ){
        this.setState({invalid: false})
    		this.props.navigation.navigate("ProfileScreen", {screen: "ProfileScreen"})
    	}
    	else{
    		this.setState({
    			userName: "",
    			password: "",
          inValid: true
    		})

    	}
    }
    if (action == "regitser"){
        this.props.navigation.navigate("SignUpScreen", {screen: "SignUpScreen"})
    }  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.formContainer}>
        	<TextInput 
        		placeholder = "user or email"
        		style = {styles.input}
        		onChangeText={(text) => this.setState({userName: text})}
        		value={this.state.userName}
        	/>
        	<TextInput 
        		placeholder = "password"
        		style = {styles.input}
        		secureTextEntry= {true}
        		onChangeText={(text) => this.setState({password: text})}
        		value = {this.state.password}
        	/>
          <Text style={styles.invalid_text}>{this.state.inValid ? "invalid login or password!" : ""} </Text>
        	<TouchableOpacity style = {styles.loginButton}
        		onPress={() =>this.onButtonClick('login')}>
        		<Text style={styles.loginBtnText}>Login</Text>
        	</TouchableOpacity>
          <TouchableOpacity style = {styles.loginButton}
            onPress={() =>this.onButtonClick('regitser')}>
            <Text style={styles.loginBtnText}>Register</Text>
          </TouchableOpacity>
        </View>        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  },
  formContainer: {
  	flex:1,
  	padding: 20,
  	justifyContent: 'center'
  },
  loginButton: {
  	backgroundColor: 'red',
  	padding: 10,
    marginBottom: 10
  },
  loginBtnText: {
  	textAlign: "center",
  	color: "#FFFFFF"
  },
  input: {
  	height: 40,
  	marginBottom: 20,
  	paddingHorizontal: 10
  },
  invalid_text: {
    color: 'red',
    textAlign: "center"
  }
});

