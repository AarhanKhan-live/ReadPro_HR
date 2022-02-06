import React, {FunctionComponent,useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text,Modal,Image} from 'react-native';



const Leaves: FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal animationType={'fade'} visible={modalVisible} transparent={true} >
          <View style={styles.blur}>
            <View style={styles.modal}>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
        <Image
        source={require("../../assets/x.png")}
        style={styles.x}
        />
        </TouchableOpacity>
            <View style={styles.header}>
          <Text style={styles.headerText}>Upcoming Holidays</Text>
        </View>
        <View style={styles.leave}>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
            </View>
          </View>
          </View>
        </Modal>
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Upcoming Holidays</Text>
        </View>
        <View style={styles.leave}>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
          <View style={styles.holiday}>
          <Text style={styles.heading}>Rama Navami</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.date}>24 Sep,2021</Text>
          <Text style={styles.heading1}>Tuesday</Text>
          </View>
          </View>
            {/* <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                <View style={styles.heading}>
                    <Text style={styles.heading}>
                        Rama Navami
                    </Text>
                    <Text style={styles.heading}>
                        Rama Navami
                    </Text>
                    <Text style={styles.heading}>
                        Rama Navami
                    </Text>
                    <Text style={styles.heading}>
                        Rama Navami
                    </Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.date}>
                        26 Jan,2021
                    </Text>
                    <Text style={styles.date}>
                        02 Oct,2021
                    </Text>
                    <Text style={styles.date}>
                        24 Sep,2021
                    </Text>
                    <Text style={styles.date}>
                        31 Oct,2021
                    </Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.heading}>
                        Tuseday
                    </Text>
                    <Text style={styles.heading}>
                        Tuseday
                    </Text>
                    <Text style={styles.heading}>
                        Tuseday
                    </Text>
                    <Text style={styles.heading}>
                        Tuseday
                    </Text>
                </View>
            </View> */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={{color:"#279EA0",fontSize:18,alignSelf:"center",marginTop:18}}>
                  View All
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  blur:{
    flex:1,
    backgroundColor:"#000000AA"
},
modal:{
  
  width: '88%',
  backgroundColor: "#fff",
  alignSelf:"center",
  marginTop:"50%",
  padding:15,
  borderRadius:15
},
x:{
  height: 25,
  width: 25,
  borderRadius: 15,
  alignSelf: "flex-end",
},
  holiday:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'3%'
  },
  parent: {
    marginTop: 28,
    backgroundColor: '#E2E2E2',
    paddingHorizontal: '5%',
    paddingBottom: 20,
    borderRadius: 15,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#000"
  },
  leave:{
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:"#fff",
    padding: '6%',
    borderRadius: 15,
  },
  heading:{
  
    color:"#000",
    fontSize:13,
    fontWeight:"bold",
  
  },
  heading1:{
  
    color:"#000",
    fontSize:13,
  
  
  },
  date:{
    marginHorizontal:5,
    color:"#279EA0",
    fontSize:13,
   
  }
});

export default Leaves;