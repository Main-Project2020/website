import React, { Component } from 'react';
 import { Platform, StyleSheet, View, Text,TextInput,
 Image, ImageBackground, TouchableOpacity, Alert,StatusBar, Dimensions } from 'react-native';
 
 import bgImage from './Images/background.jpg'
 import logo from './Images/logo.png'
 import Icon from 'react-native-vector-icons/Ionicons'
 const { width: WIDTH } = Dimensions.get('window')

 export default class Myapp extends Component<{}>
{
    onChanged(text){
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            // your call back function
            alert("please enter numbers only");
        }
    }
    this.setState({ myNumber: newText });
}

    render()
    {
        
         return(

         <ImageBackground source={bgImage} style={styles.backgroundContainer}>

         <View style={styles.inputContainer}>
            <Icon name= {'ios-call'} size={28} color={'rgba(225, 225, 225, 0.7)'}
                style={styles.inputIcons}/>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(text)=> this.onChanged(text)}
                //value={this.state.myNumber}
                maxLength={10}  //setting limit of input
                placeholder={'Enter phone number'}
                placeholderTextColor={'rgba(255, 255, 225, 0.7)'}
                underlineColorAndroid='transparent'
             />
        </View>
            
             <View style={styles.button}>
             <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text} >Get OTP</Text>

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
        height: 50,
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
        alignItems: 'center'
        
    },
    button: {
        justifyContent: 'space-around',
        alignItems: 'center'
	},
    text: {
        color: 'rgba(225, 225, 225, 0.7)',
        fontSize: 16,
        textAlign: 'center'
	}
});
