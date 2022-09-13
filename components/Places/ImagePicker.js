import { StyleSheet, View, Button, Alert, Image, Text } from 'react-native'
import React from 'react'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { Colors } from '../../constants/colors'
import OutlineButton from '../ui/OutlineButton'

const ImagePicker = () => {

    const [pickedImage, setPickedImage] = React.useState("")

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

    async function verifyPermissions() {

        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted
        }
        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', "You need to grant camera permissions to use this app.")
            return false
        }

        return true
    }

    async function takeImageHandler() {

        const hasPermission = await verifyPermissions()

        if (!hasPermission) {
            return
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        })

        console.log("image", image)
        setPickedImage(image)

    }


    let imagePreview = <Text style={{ color: 'white ' }}>No image Taken yet</Text>
    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage.uri }} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            {/* <Button title={"Take image"} onPress={takeImageHandler} /> */}
            <OutlineButton onPress={takeImageHandler} icon={"camera"} >
                Take Image
            </OutlineButton>
        </View>
    )
}

export default ImagePicker

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
