import { Text, View,SafeAreaView ,ImageBackground,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import Header from '../componets/Header'
import Profile from '../componets/Profile'
import Footer from '../componets/Footer'

function Main({navigation}) {
  return(
    <View style={{flex:1}}>
        <Header />
        <Profile navigation={navigation}/>
        <Footer />
    </View>
  )
}

export default Main