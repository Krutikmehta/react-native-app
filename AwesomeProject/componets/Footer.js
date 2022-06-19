import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={{position:'absolute',left:'50%',top:'-10%'}}>
        <View style={styles.profileBox}>
              <View style={styles.profileImage}>
                  <View style={styles.hexagonc}>
                      <View style={styles.one}>
                          <View style={styles.one}>
                              <View style={styles.one}>
                                  <View style={styles.twoc}>
                                  </View>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>

              <View style={styles.profileImage}>
                  <View style={styles.hexagonb}>
                      <View style={styles.one}>
                          <View style={styles.one}>
                              <View style={styles.one}>
                                  <View style={styles.twob}>
                                  </View>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      </View>
        <Icon name='square-sharp' size={40} color="#fdbb21" style={{
          marginLeft:35,marginTop:7}}/>
        <Icon name='triangle-sharp' size={40} color="#fdbb21"  style={{
          marginRight:35,marginTop:7}} />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:70,
        marginHorizontal:30,
        borderTopColor: "#fdbb21",
        borderTopWidth:1,
        paddingBottom:20,
    },
    profileImage:{
      marginTop:'45%',
      justifyContent:'center',
      alignItems:'center',
      // borderColor:'black',
      // borderWidth:2,
      position:'absolute',
      marginLeft:'38%',
  },
    one :{
      height:'100%',
      width:'100%',
    /*   border-radiue:50%; */
      transform:[{rotate:'-36deg'}],
      overflow:"hidden",
      background:"transparent",
      // borderColor:'black',
      // borderWidth:2,
    },
    hexagonb:{
      position:"absolute",
      transform:[{translateX:'2'},{translateY:'2'},{rotate:'72deg'},],
      height:56,
      width:76,
      overflow:"hidden", 
      // borderColor:'black',
      // borderWidth:2,
      transform:[{scale:0.5}]
    },
    
    twob:{
      height:'100%',
      width:'100%',
      transform:[{rotate:'-36deg'}],
      overflow:"hidden",
      backgroundColor:"white",
      // borderColor:'black',
      // borderWidth:2,
    },

    hexagonc:{
      position:"absolute",
      transform:[{rotate:'72deg'}],
      height:60,
      width:80,
      overflow:"hidden", 
      // borderColor:'black',
      // borderWidth:2,
      transform:[{scale:0.5}]
    },
    
    twoc:{
      height:'100%',
      width:'100%',
      transform:[{rotate:'-36deg'}],
      overflow:"hidden",
      backgroundColor:"#fdbb21",
      // borderColor:'black',
      // borderWidth:2,
    },
    profileBox:{
      position:'relative',
      height:'60%',
      // borderColor:'blue',
      // borderWidth:2,
    },
  
    name:{
        color:'blue',
        fontWeight:'500',
        marginHorizontal:10,
    }

})
export default Footer