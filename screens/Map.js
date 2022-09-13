import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Map = () => {
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    return (
        // <View>
        <MapView style={styles.map} initialRegion={region}>
            {/* <Marker /> */}
        </MapView>
        // </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

})
