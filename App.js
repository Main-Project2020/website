import React, { Component } from 'react';
 import { Platform, StyleSheet, View, Text,TextInput,
 Image,ImageBackground, TouchableOpacity, Alert,StatusBar } from 'react-native';
 export default class Myapp extends Component<{}>
{
   constructor(){
     super();
     this.state={
     isVisible : true,
    }
  }
   Hide_Splash_Screen=()=>{
    this.setState({
      isVisible : false
    });
  }

  componentDidMount(){
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 5000);
   }

    render()
    {
        let Splash_Screen = (
             <View style={styles.SplashScreen_RootView}>
                 <View style={styles.SplashScreen_ChildView}>
                     <View style={styles.container}>
                        <StatusBar
                          backgroundColor="#1c313a"
                          barStyle="light-content"
                          />
                        <Text style={{color:"#ffffff",fontSize:30,fontWeight: 'bold'}}>CHIT FUND</Text>
                      </View>
                </View>
             </View> )
         return(
           <View style={styles.container_login}>
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
            {
                 (this.state.isVisible === true) ? Splash_Screen : null
            }
          </View>
              );
    }
}
 const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      container_login:
    {
       flexGrow: 1,
       justifyContent:'center',
       alignItems:'center'
      },
      text:
      {
        color:"#ffffff",
        fontSize:30,
        fontWeight: 'bold',
        justifyContent:'center'
      },
      inputBox:
    {
       width:300,
       backgroundColor:'rgba(255,255,255,0.3)',
       borderRadius:25,
       paddingHorizontal:16,
       fontSize:16,
       color:'#000000',
       marginVertical:10
     },
     button:
    {
       width:300,
       backgroundColor:'#1c313a',
       borderRadius:25,
       marginVertical:10,
       paddingVertical:12
     },
     buttonText:
  {
       fontSize:16,
       fontWeight:'500',
       color:'#ffffff',
       textAlign:'center'
     },
      container : {
      backgroundColor:'#455a64',
      width:'100%',
      height: '100%',
      resizeMode: 'contain',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex:1,
    },
});
