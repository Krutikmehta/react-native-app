import { Text, View,ImageBackground,StyleSheet,Animated,StatusBar,Image,TouchableOpacity,TextInput } from 'react-native'
import React, { Component } from 'react'
import react from 'react';
import { useState, useEffect } from 'react';
import { ProgressBar,Colors } from 'react-native-paper';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// const Progress = ({step,steps,height}) => {
//   const animatedValue = react.useRef(new Animated.Value(-1000)).current;
//   const reactive = react.useRef(new Animated.Value(-1000)).current;
//   const [width,setWidth] = useState(0);

//   React.useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue:reactive,
//       duration:300,
//       useNativeDriver:true,
//     }).start();
//   },[]);

//   React.useEffect(() => {
//     reactive.setValue(-width + (width*step)*steps);
//   },[step,width])

//   return (
//     <View
//       onLayout={e => {
//         const newWidth = e.nativeEvent.layout.width;
//         setWidth(newWidth);
//       }}
//       style={{
//         height,
//         backgroundColor:'rgba(0,0,0,0.1)',
//         borgerRadius:{height},
//         overflow:'hidden',
//       }}
//     >
//       <Animated.View 
//         style={{
//           height,
//           width:'100%',
//           backgroundColor:'rgba(0,0,0,0.5)',
//           position:'absolute',
//           left:0,
//           top:0,
//           transform:[
//             {translateX:animatedValue,
//             },
//           ],
//         }}
//       />
//     </View>
//   )
// };



function Story({route, navigation}){
  const {path,text} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <Image
        source= {path}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
      <Text style={{
        fontWeight:'500',
        color:'white',
        marginTop:'70%',
        fontSize:25,
        fontFamily:'monospace'
      }}>{text}</Text>
    </View>
  );
};


// useEffect(() => {
//   let timer = setTimeout(() => {
//     navigation.goBack();
//   }, 5000);

//   Animated.timing(progress, {
//     toValue: 5,
//     duration: 5000,
//     useNativeDriver: false,
//   }).start();
//   return () => clearTimeout(timer);
//   }, []);


//   const [progress, setProgress] = useState(new Animated.Value(0));

//   const progressAnimation = progress.interpolate({
//     inputRange: [0, 5],
//     outputRange: ['0%', '100%'],
//   });


//   return (
//       <View>
//         {/* <Progress step={5} steps={10} height={20} /> */}
//         {/* <ProgressBar progress={0.5} color={Colors.red800} style={{width:300}}/> */}
//         <View
//           style={{
//             height: 3,
//             width: '95%',
//             borderWidth: 1,
//             backgroundColor: 'black',
//             position: 'absolute',
//             top: 18,
//           }}>
//           <Animated.View
//             style={{
//               height: '100%',
//               backgroundColor: 'white',
//               width: progressAnimation,
//             }}>
    
//           </Animated.View>
//         </View>
//         <ImageBackground source={require('../assets/background.jpg')} style={styles.background}/>
//       </View>
      
//   )
// }

// const styles = StyleSheet.create({
//     background:{
//         height:'100%',
//         width:'100%',
//         resizeMode:'cover',
//     },
// })

export default Story