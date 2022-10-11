import { View, Text, TouchableOpacity, StyleSheet,TextInput } from'react-native';

import {WebView} from 'react-native-webview'

import {useState} from 'react'

export default function Summery(){

  const [val,setVal]=useState("03/06/2022")
  return(
    <View style={style.container}>
    <Text style={style.summhead}>Order Summery</Text>
    <Text>
    <TextInput style={style.input} value={val}/>
    <TouchableOpacity  style={style.tuch}>
    <Text style={{color:"white",textAlign:"center"}}>→</Text>
    </TouchableOpacity>
    </Text>

    <Text style={style.txt}>1 X
    <Text style={style.head}>Daily Fresh Dosa Batter</Text>
    </Text>

     <Text style={style.txt}>1 X
    <Text style={style.head}>Butter</Text>
    </Text>
   
    <Text style={style.txt}>1 X
    <Text style={style.head}>Daily Fresh Dosa Batter</Text>
    </Text>


    </View>
  )
}


const style = StyleSheet.create({
  container:{
    width:300,
    height:"auto",
    marginLeft:20,
    marginTop:10
  },
  summhead:{
    color:"darkblue",
    fontWeight:"bold",
    fontSize:18
  },
  input:{
    width:120,
    borderWidth:1,
    borderColor:"silver",
    height:16,
    marginTop:15,
    padding:15
  },
  tuch:{
    width:30,
    height:20,
    backgroundColor:"orange",
    marginLeft:18,
    borderRadius:5
  },
  txt:{
    color:"orange",
    fontWeight:"bold",
    marginTop:20
  },
  head:{
    color:"darkblue",
    fontWeight:"bold",
    marginLeft:20
  }
})