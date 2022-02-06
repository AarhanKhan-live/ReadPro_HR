import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const CstmBtn2: FunctionComponent = () => {
    return (
        <View style={{flexDirection:"row",marginTop:20}}>
      
      <TouchableOpacity 
      style={{
        borderColor: "#279EA0",
        // backgroundColor:"#1ABC9C",
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        height:40,
        width:120,
        marginHorizontal:10}}>
        <Text style={{color:"#279EA0",fontWeight:"bold",fontSize:17}}>Check Out</Text>
      </TouchableOpacity>
      </View>
    );
  };
  
  const styles = () =>
    StyleSheet.create({
    });

    export default CstmBtn2;