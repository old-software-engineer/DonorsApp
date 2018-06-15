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

export default class AddContact extends Component {
  static navigationOptions = {
    headerTitle: 'Add Contact Detail' 
  }

  constructor(props) {
    	super(props);
      this.state = {
        name: '',
        age: '',
        location: ''
      };

      // test
  }

  onButtonClick(action)
  {
    this.props.navigation.navigate("MapScreen2", {contact_detail: this.state})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.formContainer}>
          <TextInput 
            placeholder = "name"
            style = {styles.input}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.userName}
          />
          <TextInput 
            placeholder = "age"
            style = {styles.input}
            onChangeText={(text) => this.setState({age: text})}
            value = {this.state.password}
          />
          <TextInput 
            placeholder = "city"
            style = {styles.input}
            onChangeText={(text) => this.setState({location: text})}
            value = {this.state.password}
          />
          <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button}
              onPress={() =>this.onButtonClick()}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>        
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
    padding: 20,
    justifyContent: 'center'
  },
  button: {
    borderRadius: 20,
    margin: 10,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'red'
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

