import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';


export default function Map({location}) {
    const [markers, setMarkers] = useState([])

    const addMarker = (e) => {
    const newMarker  = e.nativeEvent.coordinate
    setMarkers([...markers, newMarker])
    }

  return (
    <SafeAreaView style={styles.container}>
   <MapView
   style={styles.map}
   region={location}
   //mapType='satellite'
   onLongPress={addMarker}
   >
    {
        markers.map((marker, index) => ( 
        <Marker
            key={index}
            title={'Marker ${index + 1}'}
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
        />
        ))
        }
   </MapView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 20, 

    },
    map: {
        height: '100%',
        width: '100%' 
    },
  });
  

  
       