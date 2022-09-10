import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = React.useState("")

    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText)
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}> Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
            </View>
        </ScrollView>
    )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
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
