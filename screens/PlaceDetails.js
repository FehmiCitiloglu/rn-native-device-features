import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import OutlineButton from '../components/ui/OutlineButton'
import { Colors } from '../constants/colors'

const PlaceDetails = () => {

    const showOnMapHandler = () => {

    }

    return (
        <ScrollView>
            <Image />
            <View>
                <View>
                    <Text>Address</Text>
                </View>
                <OutlineButton icon={"map"} onPress={showOnMapHandler}>View on Map</OutlineButton>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    image: {
        height: "35%",
        minHeight: 300,
        width: "100%"
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})
