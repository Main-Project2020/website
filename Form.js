import React, {Component } from 'react';
import{

  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
export default class App extends Component<{}> {
   render() {
     return(
        <View style={styles.container}>
           <TextInput style={styles.inputBox}
           underlineColorAndroid='rgba(128,128,128,128)'
           placeholder="Email"
           placeholderTextColor = "#c0c0c0"
               />
           <TextInput style={styles.inputBox}
                   underlineColorAndroid='rgba(128,128,128,128)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#c0c0c0"
                />
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

       )
  }
}
const styles = StyleSheet.create({
  container:{
     flexGrow: 1,
     justifyContent:'center',
     alignItems:'center'
  },
inputBox:{
  width:300,
  backgroundColor:'rgba(255,255,255,0.3)',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#000000',
  marginVertical:10
},
button: {
  width:300,
  backgroundColor:'#1c313a',
  borderRadius:25,
  marginVertical:10,
  paddingVertical:12
},
buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
}
});
