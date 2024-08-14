import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';


interface Introprops {
  navigation: NavigationProp<any>; // Adjust type as per your navigation needs
}

const Introscreen:React.FC<Introprops> = ({ navigation }) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.splashtext}>Quiz App</Text>

      <Pressable style={styles.button} onPress={()=>navigation.navigate('MainScreen')}>
        <Text style={{color:'white',textAlign:'center'}}>Start Quiz</Text>
      </Pressable>

      <View style={styles.container}>
      <Text style={styles.text}>
        "If you want to add your own questions just simply change the quizQuestions array in the MainScreen File"
      </Text>
    </View>
    </View>
  )
}

export default Introscreen

const styles = StyleSheet.create({
splashtext:{
    color:'black',
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold'
},


button:{
    marginTop:70,
    backgroundColor:'black',
    borderRadius:14,
    padding:8,
    width:100,
    height:35,


},
container: {
   position:'absolute',
   bottom:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // Optional, for spacing around the text
  },
  text: {
    fontSize: 10,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center', // Optional, to center the text within its container
  },


})