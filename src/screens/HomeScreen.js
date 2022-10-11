
import {useState} from 'react'




import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleUpdate = (screenName) => {
    navigation.navigate(screenName);
  };

const [dta,setDta]=useState("+91 9000016")
  
  return (
    <View>
      <Image style={styles.img} source={require('../assets/snack-icon.png')} />
      <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
        <Text style={styles.head}>Sign In</Text>

        <Text style={styles.msg}>
          Try the amazing platform to sell the items and
        </Text>
        <Text style={{ textAlign: 'left' }}>
          work with
          <Text style={{ marginLeft: 3, color: 'orange', fontWeight: 'bold' }}>
            dashboards and orders
          </Text>
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 35,
            borderWidth: 1,
            borderColor: 'silver',
            borderRadius: 10,
            marginTop: 13,
            marginBottom: 12,
          }}

          value={dta}
        />

        <View>
          <TouchableOpacity
            style={{
              marginBottom: 20,
              width: 300,
              height: 40,
              backgroundColor: 'orange',
              borderRadius:10
            }}
            onPress={() => handleUpdate('update')}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: 'white',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: { fontWeight: 'bold', fontSize: 20, float: 'left', marginBottom: 10 },
  msg: { textAlign: 'left' },
  img: {
    width:80,
    height:80,
    margin:"auto",
    marginTop:20,
    marginBottom:50
  },
});
