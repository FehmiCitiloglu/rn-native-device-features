import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlacesList from '../components/Places/PlacesList'
import { useIsFocused } from '@react-navigation/native'

const AllPlaces = ({ route }) => {
    const [loadedPlaces, setLoadedPlaces] = useState([])

    const isFocused = useIsFocused()


    useEffect(() => {

        if (isFocused && route.params) {
            console.log('AllPlaces screen is focused')
            setLoadedPlaces((currPlaces) => {
                console.log("place", currPlaces, route.params.place)
                return [...currPlaces, route.params.place]
            })
        }



    }, [isFocused])



    return (
        <PlacesList place={loadedPlaces} />
    )
}

export default AllPlaces

const styles = StyleSheet.create({})
