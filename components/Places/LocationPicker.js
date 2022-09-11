import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OutlineButton from '../ui/OutlineButton'
import { Colors } from '../../constants/colors';

const LocationPicker = () => {

    const getLocationHandler = () => { }
    const pickOnMapHandler = () => { }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <OutlineButton icon={"location"} onPress={getLocationHandler}>Locate User</OutlineButton>
                <OutlineButton icon={"map"} onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
            </View>
        </View>
    )
}

export default LocationPicker

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 50
    },
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
