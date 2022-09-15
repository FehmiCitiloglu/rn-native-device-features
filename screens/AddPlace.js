import { StyleSheet } from 'react-native'
import React from 'react'
import PlaceForm from '../components/Places/PlaceForm'

const AddPlace = ({ navigation }) => {

    const createPlaceHandler = (place) => {
        navigation.navigate('AllPlaces', { place: place })
    }


    return (
        <PlaceForm onCreatePlace={createPlaceHandler} />
    )
}

export default AddPlace

const styles = StyleSheet.create({})
