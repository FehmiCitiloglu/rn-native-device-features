import { StyleSheet } from 'react-native'
import React from 'react'
import PlaceForm from '../components/Places/PlaceForm'
import { insertPlace } from '../util/database'

const AddPlace = ({ navigation }) => {

    const createPlaceHandler = async (place) => {
        // debugger
        await insertPlace(place)
        navigation.setOptions({ place })
        navigation.navigate('AllPlaces')
        // navigation.navigate('AllPlaces');

    }


    return (
        <PlaceForm onCreatePlace={createPlaceHandler} />
    )
}

export default AddPlace

