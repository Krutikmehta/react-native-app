import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import ImagePicker from 'react-native-image-crop-picker';


function ImageEdit({ route, navigation }){
    const { imagePath, setImagePath } = route.params;
    const { defaultImage, setDefaultImage} = route.params;

    const selectPhotoFromLibrary = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImagePath({uri:image.path}); 
        });
        setDefaultImage(false);
        navigation.goBack();
    }

    const takePhoto = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setImagePath({uri:image.path}); 
          });
        setDefaultImage(false);
        navigation.goBack();
    }
    

    const removePhoto = ()=>{
        setImagePath(require('../assets/profile.jpg'));
        setDefaultImage(true);
        navigation.goBack();
    }
    return(
        <View>
            <Button onPress={takePhoto} title="Take Photo"/>
            <Button onPress={selectPhotoFromLibrary} title="Select From Gallery"/>
            { !defaultImage && <Button onPress={removePhoto} title="Remove Profile Photo" /> }
            <Button onPress={()=>navigation.goBack()} title="Cancel"/>
            
        </View>
    )
}
export default ImageEdit
