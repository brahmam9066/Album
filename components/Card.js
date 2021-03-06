import React,{Component} from 'react';
import { View } from 'react-native';


export default class Card extends Component{
    constructor(props){
        super(props);
    }
render(){
    return(
     <View style={styles.containerStyle}>
       {this.props.children}
     </View>
    );
}
}


const styles={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:"#ddd",
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0,height: 2},
        shadowRadius:2,
        elevation:1,
        marginTop:10,
        marginRight:5,
        marginLeft:5
    }
};