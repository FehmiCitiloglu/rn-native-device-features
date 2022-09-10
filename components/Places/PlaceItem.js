import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const PlaceItem = ({ place, onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem

const styles = StyleSheet.create({

})
