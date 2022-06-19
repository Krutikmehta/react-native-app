import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
function Header() {

  return (
    <View style={styles.container}>
      <Icon name='md-chevron-back-sharp' size={40} color="#fdbb21" />
      <Icon name='md-menu-outline' size={40} color="#fdbb21" />
    </View>
  )
  
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:'3%',
        marginHorizontal:'3%'
    },
    name:{
        color:'blue',
        fontWeight:'500',
        marginHorizontal:10,
    }
})

export default Header