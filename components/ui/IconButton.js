import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ icon, size, color, onPress }) => {
    return (
        <Pressable style={({ pressed }) => pressed ? [styles.button, styles.pressed] : styles.button} onPress={onPress} >
            <Ionicons size={size} name={icon} color={color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
})
