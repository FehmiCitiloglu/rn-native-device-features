import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlacesList from '../components/Places/PlacesList'
import { useIsFocused } from '@react-navigation/native'
import { fetchPlaces } from '../util/database'

const AllPlaces = () => {
    const [loadedPlaces, setLoadedPlaces] = useState([])

    const isFocused = useIsFocused()



    useEffect(() => {
        const loadPlaces = async () => {
            const places = await fetchPlaces()

            console.log("loadPlaces places", places)
            setLoadedPlaces(places)
        }

        if (isFocused) {
            loadPlaces()
        }
    }, [isFocused])


    return (
        <PlacesList places={loadedPlaces} />
    )
}

export default AllPlaces

const styles = StyleSheet.create({})
