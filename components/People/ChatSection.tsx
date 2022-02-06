import React, {FunctionComponent,useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type props = {
  name:string;
  cmnt:string;
  
};

const ChatSection : FunctionComponent<props>= (props) => {
  return (
      <> 
    <View style={styles.parent}>
      
       <TouchableOpacity style={{flexDirection:"row",backgroundColor: "#F4F6F6",
      marginTop:5,
      padding:10,
      elevation: 3}}>
            <Image
             source={require('../../assets/1.jpg')}
             style={styles.imageStyle}
             resizeMode={'contain'}
            />
            <View style={{ width:"72%",marginHorizontal:15}} >
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.cmnt}>{props.cmnt}</Text>
            </View>
            <Icon name="chatbox-ellipses-outline" color="#1ABC9C" size={25}/>
            </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    parent: {
      height: '100%',
      width: '100%',
      backgroundColor: "#F4F6F6",
      marginTop:5,
      padding:10,
      elevation: 3,
      alignSelf:"center",
      },
      
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius:50,
      },
      name:{
          color:"#000",
          fontWeight:"bold"
      },
      cmnt:{
          color:"#000",
        },
});

export default ChatSection;