import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { useState, useCallback } from 'react'
import { Colors } from '../../constants/colors'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from '../ui/Button'
import { Place } from '../../models/place'

const PlaceForm = ({ onCreatePlace }) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [pickedLocation, setPickedLocation] = useState()
    const [selectedImage, setSelectedImage] = useState()


    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText)
    }

    const takeImageHandler = (imageUri) => {
        setSelectedImage(imageUri)
    }

    const locationPickedHandler = useCallback((location) => {
        setPickedLocation(location)
    }, [])

    const savePlaceHandler = () => {
        // console.log(enteredTitle, pickedLocation, selectedImage)
        const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
        onCreatePlace(placeData)
    };


    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}> Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
            </View>
            <ImagePicker onImageTaken={takeImageHandler} />
            <LocationPicker onLocationPick={locationPickedHandler} />

            <Button onPress={savePlaceHandler}>
                Add Place
            </Button>
        </ScrollView>
    )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        bordeBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})
