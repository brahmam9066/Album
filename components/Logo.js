import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';
import {RkModalImg,RkText} from 'react-native-ui-kitten';


export default class Logo extends Component {
	render(){
		return(
			<View >
				<RkCard  style={{width:130, height: 150}}
          			source={require('../images/logo1.jpg')}></RkCard>
          		<RkText rkType='logoText'>Welcome</RkText>	
  			</View>
			)
	}
}



RkTheme.setType('RkText','logoText',{
    marginVertical: 15,
    fontSize:30,
    color:'rgba(179, 179, 179, 0.7)'
   
});
