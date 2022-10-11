import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OrderScreen({navigation}) {

const prss = (()=>{
  navigation.navigate("summery");
})

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Review Order</Text>

      <Text>Shipping to :</Text>
      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
        Mathuraman Stores - Dharmapuram
      </Text>

      <Text style={styles.ship}>Shipment Details</Text>

      <Text style={styles.newcontainer}>
        <Text style={styles.dosa}>Daily Fresh Dosa</Text>
        <Text style={styles.price}>Price : 90 Rs</Text>
      </Text>
      <TouchableOpacity>
        <Text style={styles.num}>3</Text>
      </TouchableOpacity>

      <Text style={styles.newcontainer1}>
        <Text style={styles.dosa1}>Butter</Text>
        <Text style={styles.price1}>Price : 90 Rs</Text>
      </Text>
      <TouchableOpacity>
        <Text style={styles.num1}>4</Text>
      </TouchableOpacity>

      <Text style={{ fontWeight: 'bold', color: 'darkblue', marginTop: 13 }}>
        Total : 180 Rs
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            marginTop: 2,
            fontSize: 13,
          }}
          onPress={prss}>
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    marginTop: 5,
    marginLeft: 25,
  },
  head: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  ship: {
    marginTop: 12,
  },
  newcontainer: {
    width: 300,
    height: 80,
    backgroundColor: 'lightpink',
    position: 'relative',
    borderRadius: 10,
    marginTop: 10,
  },
  dosa: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  price: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  num: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    backgroundColor: 'orange',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    borderRadius: 10,
    color: 'white',
  },
  newcontainer1: {
    width: 300,
    height: 80,
    backgroundColor: 'lightpink',
    position: 'relative',
    borderRadius: 10,
    marginTop: 10,
  },
  dosa1: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  price1: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  num1: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    backgroundColor: 'orange',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    borderRadius: 10,
    color: 'white',
  },
  btn: {
    width: 300,
    height: 25,
    backgroundColor: 'orange',
    marginTop: 10,
    borderRadius: 10,
  },
});
