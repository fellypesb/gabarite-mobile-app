import React, {useState, useEffect, useRef} from "react";
import {Camera, CameraType, FlashMode} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { 
    View,
    Text,
    Image,
    Alert, 
} from "react-native";

import { styles } from './styles';
import CameraButton from "../../../components/CameraButton";


export function CameraAcess({ navigation }){
    const [hasCameraPermission, setHasCameraPermission] = useState(Boolean);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState(FlashMode.off)
    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const saveImage = async () => {
        if(image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                Alert.alert('Foto salva na galeria com sucesso! 🎉');
                setImage(null);
            } catch(e) {
                console.log(e)
            }
        }
    }

    const takePicture = async () => {
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri)
            } catch(e){
                console.log(e);
            }
        }
    }

    if (hasCameraPermission === false){
        return <Text>No acess to camera</Text>
    }

    return (
        <View style={styles.container}>
            {!image ?
            <Camera
                style={styles.cameraContainer}
                type={type}
                flashMode={flash}
                ref={cameraRef}
            >
            </Camera>
            :
            <Image source={{uri: image}} style={styles.cameraContainer}/>
            }
            <View>
                {image ?
                <View style={styles.buttonsContainerImage}>
                    <CameraButton
                        title={"CONTINUAR"}
                        icon="retweet"
                        onPress={()=>setImage(null)}
                    />
                    <CameraButton
                        title={"SALVAR"}
                        icon="upload"
                        onPress={saveImage}
                    />
                </View>
                :
                <CameraButton 
                    title={""}
                    icon="camera"
                    onPress={takePicture}
                />
                }
            </View>
        </View>
    );
}