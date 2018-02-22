/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  AsyncStorage
} from 'react-native';

import MapView from 'react-native-maps';
import geolib from 'geolib';

export default class MapScreen2 extends Component<{}> {
  static navigationOptions = {
    headerTitle: 'Save Location',
  }
  
  constructor(props) {
    super(props);
    this.state = {
      region: { 
                latitude: 28.7041,
                longitude: 77.1025,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              },
      markers: [],
      pin_droped_marker: {},
      submitBtn: false        
    };
  }

  onRegionChangeComplete(region) {
    this.setState({ region: region });
  }

  onMapPress(e) {
    this.setState({
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
        },
      ],
      pin_droped_marker: {longitude: e.nativeEvent.coordinate.longitude, latitude: e.nativeEvent.coordinate.latitude},
      submitBtn: true
    });
  }
  
  onSubmit(){
    markers_count = this.state.markers.length
    if (markers_count > 0)
    {      
      data_hash = Object.assign(this.props.navigation.state.params.contact_detail,this.state.pin_droped_marker)  
      data = {contact_detail: data_hash}
      this.save_contact(data);
      
    }
  }

  save_contact(data){
    this.setState({submitBtn: false});
    return  fetch('https://182dbf0b.ngrok.io/contacts/add_contacts',{ 
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
              }).then((response) => response.json())
                .then((responseJson) => {
                  
                  ToastAndroid.showWithGravity('contact saved successfully', 
                                            ToastAndroid.SHORT,
                                            ToastAndroid.CENTER);
                  this.props.navigation.navigate("ProfileScreen");  
              })
            .catch((error) => {
              debugger;
              ToastAndroid.showWithGravity('something went wrong', 
                                            ToastAndroid.SHORT,
                                            ToastAndroid.CENTER);
            });
  }

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          onPress={this.onMapPress.bind(this)}
        >
        {this.state.markers.map((marker,index) => (
          console.log(index),
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
          />
        ))}
        </MapView>
        { this.state.submitBtn ? 
          <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.onSubmit()}
                style={[styles.bubble, styles.button]}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View> : <View></View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    right:0,
    left:0,
    top:0,
    bottom:0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position:'absolute',
    right:0,
    left:0,
    top:0,
    bottom:0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
});
