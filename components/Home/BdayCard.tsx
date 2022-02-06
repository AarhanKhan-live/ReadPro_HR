import React, {FunctionComponent,useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ViewStyle,
  Modal,
  Pressable,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatSection from '../People/ChatSection';
import CmntModel from '../Common/CmntModel';
const BdayCard: FunctionComponent = () => {
  const [cmt, setCmt] = useState(false)

  if(cmt){
    return(
      <View style={styles.parent}>
      <Text style={styles.title}>Its Grace's birthday, today. Wish her have a good day</Text>
        <View>
        <View style={styles.contentContainer1}>
          <Text style={styles.info}>Note</Text>
          <Text style={styles.subtitle1} >@Grace234 Happy Birthday! Stay Blessed May your day goes good.</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.info}>Serena</Text>
          <Text style={styles.subtitle}>@Grace234 Happy Birthday! </Text>
        </View>
        <View style={styles.addcmnt}>
            <TextInput
             style={styles.textInput}
             placeholder={'Add a Comment....'}
             placeholderTextColor={"#888989"}>
             </TextInput>
             <TouchableOpacity onPress={() => setCmt(false)}>
             <Text style={{color:"#1ABC9C",fontWeight:"bold"}}>Post</Text>
             </TouchableOpacity>
             </View>
        </View>
        
    </View>
    )
  }
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Its Grace's birthday, today. Wish her have a good day</Text>
        <View>
        <View style={styles.contentContainer1}>
          <Text style={styles.info}>Note</Text>
          <Text style={styles.subtitle1} >@Grace234 Happy Birthday! Stay Blessed May your day goes good.</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.info}>Serena</Text>
          <Text style={styles.subtitle}>@Grace234 Happy Birthday! </Text>
        </View>
        <View style={{justifyContent:"flex-end",flexDirection:"row",marginTop:25}}>
            <TouchableOpacity onPress={() => setCmt(true)}>
            <Text style={{color:"#000",marginRight:15}}>Add a comment</Text>
            </TouchableOpacity>
            <CmntModel/>
        </View>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
      marginTop:13,
    fontSize: 14,
    color: "#000",
    marginLeft: 6,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  textInput: {
    width: '83%',
    backgroundColor: "#E5E8E8",
    borderBottomLeftRadius: 18,
  borderTopLeftRadius: 18,
  color:"#000"
  },
  addcmnt:{
    flexDirection:"row",
    marginTop:15,
    backgroundColor: "#E5E8E8",
    borderRadius: 18,
    justifyContent:"center",
    alignItems:"center"
  },
  subtitle: {
    fontSize: 12,
    color: "#000",
    marginLeft: 16,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 12,
    color: "#000",
    marginLeft: 32,
    fontWeight: 'bold',
    
  },
  parent: {
    marginTop: 18,
    backgroundColor: '#fff',
    width: '98%',
    borderRadius: 10,
    shadowColor: '#000',
    // height: '100%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingRight: '5%',
    paddingLeft: '3%',
    paddingVertical:'3%'
  },
  contentContainer: {
    display: 'flex',
    flexDirection:"row",
    width: '100%',
    alignItems: 'center',
    marginTop:10
  },
  contentContainer1: {
    display: 'flex',
    flexDirection:"row",
    width: '100%',
    alignItems: 'center',
    marginTop:15
  },
  info: {
    fontSize: 13,
    fontWeight: 'bold',
    color:"#279EA0",
  },
  icon: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 45,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default BdayCard;