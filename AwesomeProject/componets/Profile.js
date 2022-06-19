import { ApolloClient } from '@apollo/client';
import React, { Component,useState } from 'react';
import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity, ImageBackground } from 'react-native';
import {useQuery,gql,useMutation} from '@apollo/client';


function Profile({navigation}){


    const [imagePath,setImagePath] = React.useState(require('../assets/profile.jpg')); //profile image path
    const [defaultImage,setDefaultImage] = React.useState(true);
    const [path,setPath] = React.useState(require('../assets/profile.jpg')); //story path
    const [isViewed , setIsViewed] = React.useState(false);
    const [text, onChangeText] = React.useState('');

    const storyRender = ()=>{
        if(path === require('../assets/profile.jpg')){
            navigation.navigate('addStory',{
                path:path,
                setPath:setPath,
                text:text,
                onChangeText:onChangeText,
            });
        }
        else{
            navigation.navigate('story',{path,text});
            setIsViewed(true);
        }        
    }
    

  return (
    <View style={styles.container}>
        <View style={styles.profileBox}>
            <View style={styles.profileImage}>
                <View style={styles.hexagonc}>
                    <View style={styles.one}>
                        <View style={styles.one}>
                            <View style={styles.one}>
                                <View style={[styles.twoc,{backgroundColor:isViewed?'#898989':'#fdbb21'}]}>
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

            <View style={styles.profileImage}>
                <View style={styles.hexagon}>
                    <View style={styles.one}>
                        <View style={styles.one}>
                            <View style={styles.one}>
                                <View style={styles.two}>
                                    <TouchableOpacity onPress={storyRender} onLongPress={()=>navigation.navigate('imageEdit',{
                                    imagePath:imagePath,
                                    setImagePath:setImagePath,
                                    defaultImage:defaultImage,
                                    setDefaultImage:setDefaultImage,})}>

                                        {isViewed && 
                                        // <View style={{
                                        //     width: 170,
                                        //     height: 170,
                                        //     backgroundColor: 'white',
                                        //     borderColor: '#898989',
                                        //     borderWidth: 1.8,
                                        //     borderRadius: 100,
                                        //     justifyContent: 'center',
                                        //     alignItems: 'center', 
                                        // }}>
                                            <Image source={imagePath}
                                                style={{width: 400,
                                                height:400,
                                                backgroundColor: 'red',
                                                transform: [
                                                    {rotate: '144deg'},
                                                    {translateX:-30},
                                                    {translateY:60},
                                                    // {scale:1.4},
                                                ],
                                                resizeMode:'contain',
                                            }}/>
                                        // </View>
                                        }

                                        {!isViewed &&
                                        //  <View style={{
                                        //     width: 170,
                                        //     height: 170,
                                        //     backgroundColor: 'white',
                                        //     borderColor: '#fdbb21',
                                        //     borderWidth: 1.8,
                                        //     borderRadius: 100,
                                        //     justifyContent: 'center',
                                        //     alignItems: 'center', 
                                        // }}>
                                            <Image source={imagePath}
                                                style={{width: 400,
                                                height:400,
                                                backgroundColor: 'red',
                                                transform: [
                                                    {rotate: '144deg'},
                                                    {translateX:-30},
                                                    {translateY:60},
                                                    // {scale:1.4},
                                                ],
                                                resizeMode:'contain',
                                            }}/>
                                        // </View>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
        
        <View style={styles.data}>
            <Text style={styles.userName}> Krutik Mehta</Text>
            <Text style={styles.userData}> Engineer</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center',
        flex:1,
        // borderColor: 
        
    },
    // imageBorder:{
        
    // },
    // profilePicture:{
    //     resizeMode: 'cover',
    //     width: '90%',
    //     height: '90%',
    //     borderRadius: 100,
    // },
    profileImage:{
        marginTop:'45%',
        justifyContent:'center',
        alignItems:'center',
        // borderColor:'black',
        // borderWidth:2,
        position:'absolute',
        marginLeft:'38%',
    },
    data:{
        // position:'absolute',
        width:'100%',
        alignItems:'center',
        // borderColor:'red',
        // borderWidth:2,
        
    },
    userName:{
        fontSize:16,
        color:'#898989',
        // letterSpacing:10,
        fontFamily:'century gothic',
        fontWeight:'500',
    },
    userData:{
        fontSize:11,
        color:'#898989',        
        // letterSpacing:10,
        fontFamily:'century gothic',
        fontWeight:'300',
    },

    hexagon:{
        position:"absolute",
        transform:[{translateX:'10'},{translateY:'10'},{rotate:'72deg'},],
        height:300,
        width:400,
        overflow:"hidden", 
        // borderColor:'black',
        // borderWidth:2,
        transform:[{scale:0.5}]
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
      two:{
        height:'100%',
        width:'100%',
        transform:[{rotate:'-36deg'}],
        overflow:"hidden",
        backgroundColor:"black",
        // borderColor:'black',
        // borderWidth:2,
      },

      hexagonb:{
        position:"absolute",
        transform:[{translateX:'5'},{translateY:'5'},{rotate:'72deg'},],
        height:310,
        width:410,
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
        height:320,
        width:420,
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
        // backgroundColor:"#fdbb21",
        // borderColor:'black',
        // borderWidth:2,
      },
      profileBox:{
        position:'relative',
        height:'60%',
        // borderColor:'blue',
        // borderWidth:2,
      }
    
      
});

export default Profile;
