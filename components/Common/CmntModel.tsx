import React, {FunctionComponent,useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,Button
} from 'react-native';

const CmntModel : FunctionComponent= () => {
    const [modal, setmodal] = useState(false);
    const [cmt, setCmt] = useState(false)
  return (
      <>
      <View style={styles.parent}>
      <Modal animationType={'fade'} visible={modal} transparent={true} >
          <View style={styles.blur}>
    <View style={styles.modal}>
        <TouchableOpacity onPress={()=>setmodal(false)}>
        <Image
        source={require("../../assets/x.png")}
        style={styles.x}
        />
        </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:"row",marginTop:15}}>
            <Image
             source={require('../../assets/1.jpg')}
             style={styles.imageStyle}
             resizeMode={'contain'}
            />
            <View style={{ width:"72%",marginHorizontal:15}} >
                <Text style={styles.name}>Serena 12</Text>
                <Text style={styles.cmnt}>Happy Birthday ..Stay blessed May all your wishes come true</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",marginTop:15}}>
            <Image
             source={require('../../assets/2.jpg')}
             style={styles.imageStyle}
             resizeMode={'contain'}
            />
            <View style={{ width:"72%",marginHorizontal:15}} >
                <Text style={styles.name}>Serena 12</Text>
                <Text style={styles.cmnt}>Happy Birthday ..Stay blessed May all your wishes come true</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",marginTop:15}}>
            <Image
             source={require('../../assets/3.jpg')}
             style={styles.imageStyle}
             resizeMode={'contain'}
            />
            <View style={{ width:"72%",marginHorizontal:15}} >
                <Text style={styles.name}>Serena 12</Text>
                <Text style={styles.cmnt}>Happy Birthday ..Stay blessed May all your wishes come true</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",marginTop:15}}>
            <Image
             source={require('../../assets/4.jpg')}
             style={styles.imageStyle}
             resizeMode={'contain'}
            />
            <View style={{ width:"72%",marginHorizontal:15}} >
                <Text style={styles.name}>Serena 12</Text>
                <Text style={styles.cmnt}>Happy Birthday ..Stay blessed May all your wishes come true</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.addcmnt}>
            <TextInput
             style={styles.textInput}
             placeholder={'Add a Comment....'}
             placeholderTextColor={"#888989"}>
             </TextInput>
             <TouchableOpacity>
             <Text style={{color:"#1ABC9C",fontWeight:"bold"}}>Post</Text>
             </TouchableOpacity>
             </View>
    </View>
    </View>
    </Modal>
    <TouchableOpacity onPress={() => setmodal(true)}>
      <Text style={{color:"#1ABC9C"}}>View all</Text>
    </TouchableOpacity>
    
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    parent: {
        // height: 425
        // backgroundColor: "#1ABC9C",
      
        // padding:15,
        // borderRadius:15
      
      },
      modal:{
        height: 425,
        width: '88%',
        backgroundColor: "#fff",
        alignSelf:"center",
        marginTop:"35%",
        padding:15,
        borderRadius:15
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
      btn:{
        justifyContent:"center",alignSelf:"center",width:100
      },
      x:{
        height: 25,
        width: 25,
        borderRadius: 15,
        alignSelf: "flex-end",
      },
      blur:{
          flex:1,
          backgroundColor:"#000000AA"
      }
});

export default CmntModel;