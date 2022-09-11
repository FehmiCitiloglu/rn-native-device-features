import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react'
import OutlineButton from '../ui/OutlineButton'
import { Colors } from '../../constants/colors';

import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'




const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const verifyPermissions = async () => {

        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', "You need to grant camera permissions to use this app.")
            return false
        }

        return true
    }


    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return
        }
        const location = await getCurrentPositionAsync()
        console.log(location)
    }
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
