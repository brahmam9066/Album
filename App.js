import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import {RkAvoidKeyboard,RkTextInput,RkButton} from 'react-native-ui-kitten';
import Header from './components/header';
import AlbumList from './components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
      
    );
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
