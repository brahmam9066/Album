import React, { Component } from 'react';
import { View,StyleSheet} from 'react-native';

import {RkAvoidKeyboard,RkTextInput,RkButton,RkTheme} from 'react-native-ui-kitten';


export default class Form extends Component {

    render() {
        return (
            <View style={styles.container}>
             <RkTextInput rkType='frame'
            placeholder="Email"
            selectionColor="#000"
            keyboardType="email-address"
           
           />
           <RkTextInput rkType='frame'
            placeholder="Password"
            placeholderTextColor = "#ffffff"
            selectionColor="#000"/>
            <RkButton rkType='success'>Login</RkButton>

            
            </View>
        )
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#428ff4',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
        RkTheme.setType('RkTextInput','frame',{
        width:300,
        inputBackgroundColor:'rgba(102, 102, 102,0.2)',
        paddingHorizontal:5,
        marginVertical: 5,
       
    });

    RkTheme.setType('RkButton', 'success', {
        container: {
           borderRadius: 10,
           marginLeft: 80
        },

      });