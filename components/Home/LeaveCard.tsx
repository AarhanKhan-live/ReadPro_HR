import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ViewStyle,
} from 'react-native';

interface Props {
    title:string;
    color:string;
    leave:string;
    onPress: () => void;
}

const LeaveCard: FunctionComponent <Props> = (props) => {
  return (
  <Pressable onPress={props.onPress}>
    <View style={{backgroundColor:`${props.color}`,height:110,width:110,justifyContent:'center',borderRadius:25, margin:7, elevation: 4,shadowColor:'black',shadowOffset:'black'}} >
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.leave}>{props.leave}</Text>
    </View>
  </Pressable>
  );}

const styles = StyleSheet.create({
    text:{
        color:'white',
        alignSelf:'center',
        fontSize:33
    },
    leave:{
        color:'white',
        alignSelf:'center',
        
        fontSize:15
    }

})  

export default LeaveCard