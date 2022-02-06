import { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Modal,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CstmBtn1 from '../components/Home/CstmBtn1';
import CstmBtn2 from '../components/Home/CstmBtn2';
import BdayCard from '../components/Home/BdayCard';
import Calender from '../components/Home/Calender';
import SearchBar from '../components/Common/SearchBar';
import Leaves from '../components/Home/Leaves';
import Upcoming from '../components/Home/Upcoming';
import LeaveCard from '../components/Home/LeaveCard';
import { RootStackScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootStackScreenProps<'TabOne'>) {
  
  return (
    <>
    <View style={styles.parent}>
        <ScrollView>     
          <View style={styles.parent2}>
            <TouchableOpacity
              style={
                Platform.OS === 'ios'
                  ? {position: 'absolute', top: 45, left: 12}
                  : {position: 'absolute', top: 30, left: 12}
              }
            >
              <Icon name={'notifications'} color={'#FFFFFF'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                Platform.OS === 'ios'
                  ? {position: 'absolute', top: 45, right: 20}
                  : {position: 'absolute', top: 30, right: 20}
            }
            >
            <Icon name={'log-out-outline'} color={'#FFF'} size={24} />
            </TouchableOpacity>
            <View style={styles.userDetails}>
              <TouchableOpacity>
              <Image
              source={require('../assets/user.png')}
              style={styles.imageStyle}
              resizeMode={'contain'}
              />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.userName} >
                  Nate
                </Text>
                <Text style={styles.email} >
                  Natearchibald23@gmail
                </Text>
              </View>
            </View>
          </View>
          <Image
          source={require('../assets/Time.png')}
          style={styles.timeimg}
          />
          <View style={{alignItems:'center'}}>
            <Text style={styles.time} >
                08:27:45
            </Text>
            <Text style={styles.time} >
                Shift : 10:00 Am - 6:30 Pm
            </Text>
            <View style={{flexDirection:"row"}}>
              <CstmBtn1/>
              <CstmBtn2/>
            </View>
          </View>
          <View style={{justifyContent:'center',alignSelf:'center',paddingHorizontal:20}}>
            <BdayCard/>
            <Calender heading={'Attendance'}/>
            <View>
              <SearchBar/>
              <View style={styles.leaves}>
                <LeaveCard color="#073B39" leave="Payable" title="10" onPress={() => navigation.navigate('Payable')}/>
                <LeaveCard color="#75DDDE" leave="Present" title="1"  onPress={() => navigation.navigate('Present')}/>
                <LeaveCard color="#88CBAC" leave="Absent" title="1"   onPress={() => navigation.navigate('Absent')}/>
                <LeaveCard color="#FFB30F" leave="Approved" title="1"/>
                <LeaveCard color="#52716B" leave="Pending" title="1"/>
                <LeaveCard color="#EF6352" leave="Rejected" title="1"/>
              </View>
            </View>
            <Leaves total={15} privilege={2} casual={4} onDuty={1} onPress={() => navigation.navigate('Apply')}/>
            <Upcoming/>
          </View>
        </ScrollView> 
    </View>
    </>
)
}

const styles = StyleSheet.create({
leaves:{
  flexDirection:'row',
  flexWrap:'wrap',
  alignSelf:'center',
  alignItems:'center',
  marginTop:10
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
parent: {
  // width: '100%',
 
},
parent2: {
  height: 165,
  width: '100%',
  backgroundColor: "#279EA0",
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
  paddingHorizontal: '7%',
  alignItems: 'center',
},
userDetails: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 55,
},
imageStyle: {
  height: 85,
  width: 85,
},
textContainer: {
  marginLeft: 20,
  width: '65%',
},
userName: {
  color: '#fff',
  fontSize: 19,
  width: '100%',
},
email: {
  fontSize: 15,
  marginTop: 5,
  color: '#fff',
  width: '100%',
},
time: {
    fontSize: 20,
    marginTop: 10,
    color: '#000',
    // width: '100%',
    alignSelf:'center',
    fontWeight:"bold",
  },
timeimg: {
  height:220,
  width: 200,
  alignSelf:'center',
  marginTop:-35
},
});