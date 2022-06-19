import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { TextInputAffix } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';
import { TextInput } from 'react-native-paper';


function AddStory({ route, navigation }){
    const {path,setPath,text,onChangeText} = route.params;    

    const selectPhotoFromLibrary = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setPath({uri:image.path}); 
        });
        navigation.goBack();
    }

    const takePhoto = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setPath({uri:image.path}); 
          });
        navigation.goBack();
    }
    

    // const removePhoto = ()=>{
    //     setImagePath(require('../assets/profile.jpg'));
    //     setDefaultImage(true);
    //     navigation.goBack();
    // }
    return(
        <View>
            <Button onPress={takePhoto} title="Take Photo"/>
            <Button onPress={selectPhotoFromLibrary} title="Select From Gallery"/>
            {/* { !defaultImage && <Button onPress={removePhoto} title="Remove Profile Photo" /> } */}
            <TextInput
                placeholder="You"
                onChangeText={onChangeText}
            />
            <Button onPress={()=>navigation.goBack()} title="Cancel"/>
            
        </View>
    )
}
export default AddStory
