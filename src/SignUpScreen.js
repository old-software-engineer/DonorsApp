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

export default class SignUpScreen extends Component {
  static navigationOptions = {
    header: null 
  }

  constructor(props) {
    	super(props);
      this.state = {
           firstName: "",
           lastName: "",
           email: "",
           password: "",
           passwordConfirmation: ""
        };
      this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick()
  {
  	
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.formContainer}>
          <TextInput 
            placeholder = "first name"
            style = {styles.input}
            onChangeText={(text) => this.setState({firstName: text})}
            value={this.state.userName}
          />
          <TextInput 
            placeholder = "last name"
            style = {styles.input}
            onChangeText={(text) => this.setState({lastName: text})}
            value={this.state.userName}
          />
          <TextInput 
            placeholder = "email"
            style = {styles.input}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.userName}
          />
          <TextInput 
            placeholder = "password"
            style = {styles.input}
            secureTextEntry= {true}
            onChangeText={(text) => this.setState({password: text})}
            value = {this.state.password}
          />
          <TextInput 
            placeholder = "password confirmation"
            style = {styles.input}
            secureTextEntry= {true}
            onChangeText={(text) => this.setState({password: text})}
            value = {this.state.password}
          />
          <TouchableOpacity style = {styles.loginButton}
            onPress={() =>this.onSubmitClick()}>
            <Text style={styles.loginBtnText}>Submit</Text>
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

