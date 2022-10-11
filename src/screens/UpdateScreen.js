import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UpdateScreen({navigation}) {

  const press = (()=>{
    navigation.navigate("order")
  })
  return (
    <View style={style.container}>
      <Text style={style.orderHead}>Order Details</Text>

      <Text>
        Date :<Text> Wed Aug 03 2022</Text>
      </Text>

      <Text style={{ marginTop: 10, fontWeight: 500 }}>Retaler Name :</Text>

      <Text style={{ marginTop: 10, color: 'orange', fontWeight: 700 }}>
        Vinayaga Dept Stores
      </Text>

      <Text style={{ marginTop: 10, fontWeight: 500 }}>
        Address : Dharmapuram
      </Text>

      <Text style={{ marginTop: 10, fontWeight: 500 }}>
        Mobile No : +91 9000016
      </Text>


      <Text style={style.orderHead}>
        Order Status


        <TouchableOpacity style={style.touch} onPress={press}>
        <Text style={{textAlign:"center",fontSize:10}}>Placed Order</Text>
        </TouchableOpacity>
      </Text>


      <Text style={style.orditemhead}>
      Order Items
      </Text>

      <Text style={style.newcontainer}>

      <Text style={style.dosa}>Daily Fresh Dosa</Text>
      <Text style={style.price}>Price : 90 Rs</Text>
           
     </Text>
     <TouchableOpacity>
      <Text style={style.minus}>—</Text>
      </TouchableOpacity>

       <TouchableOpacity>
      <Text style={style.num}>3</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={style.plus}>+</Text>
      </TouchableOpacity>

  
    </View>
  );
}

const style = StyleSheet.create({
  container: { width: 'auto', height: 'auto', marginTop: 20, marginLeft: 25 },
  orderHead: {
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  touch:{
    backgroundColor:"orange",
    padding:5,
    color:"white",
    width:130,
    marginLeft:60,
    borderRadius:10,
    fontSize:13
  },
  orditemhead:{
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 12,
  },
  newcontainer:{
    width:300,
    height:80,
    backgroundColor:"lightpink",
    position:"relative",
    borderRadius:10
  },
  dosa:{
    position:"absolute",
    top:10,
    left:20,
    color:"darkblue",
    fontWeight:"bold"
  },
  price:{
    position:"absolute",
    bottom:20,
    left:20
  },
  minus:{
    position:"absolute",
    bottom:20,
    right:90,
    backgroundColor:"blue",
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:8,
    paddingRight:8,
    fontSize:18,
    borderRadius:10
  },
  num:{
    position:"absolute",
    bottom:20,
    right:55,
    backgroundColor:"orange",
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:10,
    paddingRight:10,
    fontSize:18,
    borderRadius:10,
    color:"white"
  },
  plus:{
    position:"absolute",
    bottom:20,
    right:20,
    backgroundColor:"blue",
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:8,
    paddingRight:8,
    fontSize:18,
    borderRadius:10

  }
});
