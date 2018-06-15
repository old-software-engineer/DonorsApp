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
  TouchableHighlight,
  Alert
} from 'react-native';

import MapView from 'react-native-maps';
import geolib from 'geolib';

export default class MapScreen extends Component<{}> {
  static navigationOptions = {
    headerTitle: 'Search Pin',
  }
  
  constructor(props) {
    //dgdgdgwdg
    super(props);
    this.state = {
      region: { 
                latitude: 28.7041,
                longitude: 77.1025,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              },
      markers: []
    };
  }

  onRegionChangeComplete(region) {
    this.setState({ region: region });
  }

  onMapPress(e) {
    id = Date.now()
    this.setState({
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
        },
      ]
    });
    this.getCoordinatesApiAsync(e)
  }

  getCoordinatesApiAsync(e) {
    droped_marker = {longitude: e.nativeEvent.coordinate.longitude, latitude: e.nativeEvent.coordinate.latitude}
    console.log(droped_marker) 
    coordinates = []
    return fetch('https://182dbf0b.ngrok.io/contacts/all_lat_longitude.json')
      .then((response) => response.json())
      .then((responseJson) => {
          responseJson.map(lat_long => (
            dist = geolib.getDistance(
                lat_long,
                droped_marker
            ),
            mrkr = {
              coordinate: lat_long,
              key: Date.now() + 1,    
            },
            console.log(dist),
            dist <= 30000 ? coordinates.push(mrkr) : console.log('false')       
          ))
          console.log(coordinates)
          this.setState({
            markers: [
              ...this.state.markers,
              ...coordinates,
            ],
          });
          console.log(markers)
      })
      .catch((error) => {
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
});
