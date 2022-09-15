import { StyleSheet } from 'react-native'
import React from 'react'
import PlaceForm from '../components/Places/PlaceForm'

const AddPlace = ({ navigation }) => {

    const createPlaceHandler = (place) => {
        console.log("place", place);
        navigation.setOptions({ place: { ...place } })
        navigation.navigate('AllPlaces')
    }


    return (
        <PlaceForm onCreatePlace={createPlaceHandler} />
    )
}

export default AddPlace

