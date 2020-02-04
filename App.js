import React, { Component } from 'react';
 import { Platform, StyleSheet, View, Text,TextInput,
 Image, ImageBackground, TouchableOpacity, Alert,StatusBar, Dimensions } from 'react-native';
 
 import bgImage from './Images/background.jpg'
 import logo from './Images/logo.png'
 import Icon from 'react-native-vector-icons/Ionicons'
 const { width: WIDTH } = Dimensions.get('window')

 export default class Myapp extends Component<{}>
{
   constructor(){
     super();
     this.state={
     showpass: true,
     press: false
    }
  }
   
    showpass = () => {
        if(this.state.press == false) {
            this.setState({ showpass: false, press: true})  
		}else {
              this.setState({ showpass: true, press: false})
		}
	}

    render()
    {
        
         return(

         <ImageBackground source={bgImage} style={styles.backgroundContainer}>

         <View style={styles.inputContainer}>
            <Icon name= {'ios-person'} size={28} color={'rgba(225, 225, 225, 0.7)'}
                style={styles.inputIcons}/>
            <TextInput
                style={styles.input}
                placeholder={'Username'}
                placeholderTextColor={'rgba(255, 255, 225, 0.7)'}
                underlineColorAndroid='transparent'
             />
        </View>
        <View style={styles.inputContainer}>
            <Icon name= {'ios-lock'} size={28} color={'rgba(225, 225, 225, 0.7)'}
                style={styles.inputIcons} />
            <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={this.state.showpass}
                placeholderTextColor={'rgba(255, 255, 225, 0.7)'}
                underlineColorAndroid='transparent'
             />
            
            <TouchableOpacity style={styles.btnEye}
            onPress={this.showpass.bind(this)}>
                <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} 
                size={26} color={'rgba(255, 255, 225, 0.7)'}/>
             </TouchableOpacity>

             <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text} >Login</Text>

             </TouchableOpacity>

        </View>
         </ImageBackground>
              );
    }
}
 const styles = StyleSheet.create(
{
    
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
	},
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 120,
        height: 120
	},
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
	},
    inputContainer: {
        marginTop: 10
	},
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 55,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(225, 225, 225, 0.7)',
        marginHorizontal: 25
	},
    inputIcons: {
        position: 'absolute',
        top: 8,
        left: 37
	},
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
	},
    btnLogin: {
        width: WIDTH - 150,
        height: 45,
        borderRadius: 25,  
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 70
       
        
    },
    text: {
        color: 'rgba(225, 225, 225, 0.7)',
        fontSize: 16,
        textAlign: 'center'
	}
});
