import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/colors'

const PlacesList = ({ places }) => {
    console.log("places", places)

    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
            </View>
        )
    }


    return (
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={(place) => place.id}
            renderItem={({ item }) => {

                return <PlaceItem place={item} />
            }}
        />
    )
}

export default PlacesList

const styles = StyleSheet.create({
    list: {
        margin: 24
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200,
    }
})
