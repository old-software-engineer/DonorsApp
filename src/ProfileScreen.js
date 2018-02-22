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
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null 
  }

  constructor(props) {
    	super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(action)
  {
  	if(action == 'search'){
      this.props.navigation.navigate("MapScreen", {screen: "MapScreen"})
    }
    if(action == 'save'){
      this.props.navigation.navigate("AddContact", {screen: "AddContact" })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.buttonContainer}>
        	<TouchableOpacity style = {styles.button}
            onPress={() =>this.onButtonClick('save')}>
            <Text style={styles.buttonText}>Save Pin</Text>
          </TouchableOpacity>
        	<TouchableOpacity style = {styles.button}
        		onPress={() =>this.onButtonClick('search')}>
        		<Text style={styles.buttonText}>Search Pin</Text>
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
    flex:1,
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
  }
});

