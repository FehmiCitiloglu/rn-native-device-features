import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { useState, useEffect } from 'react'
import OutlineButton from '../ui/OutlineButton'
import { Colors } from '../../constants/colors';

import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { getMapPreview } from '../../util/location';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';



const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()
    const navigation = useNavigation()
    const route = useRoute()



    const [pickedLocation, setPickedLocation] = useState()

    const isFocused = useIsFocused()

    // const mapPickedLocation = route.params && { lat: route.params.pickedLat, lng: route.params.pickedLng }

    // useEffect(() => {
    //     if (mapPickedLocation) {
    //         setPickedLocation(mapPickedLocation)
    //     }
    // }, [mapPickedLocation])

    useEffect(() => {
        if (isFocused && route.params) {
            const mapPickedLocation = {
                lat: route.params.pickedLat,
                lng: route.params.pickedLng,
            };
            setPickedLocation(mapPickedLocation);
        }
    }, [route, isFocused]);

    const verifyPermissions = async () => {

        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', "You need to grant location permissions to use this app.")
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
        setPickedLocation({ lat: location.coords.latitude, lng: location.coords.longitude })
    }
    const pickOnMapHandler = () => {
        navigation.navigate('Map')
    }

    let locationPreview = <Text>No location picked yet</Text>

    if (pickedLocation) {
        locationPreview = <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} />

    }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
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
        borderRadius: 4,
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: '100%',
        // borderRadius: 4
    }
})
