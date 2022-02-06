import React, {FunctionComponent, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {Calendar} from 'react-native-calendars';

const Apply : FunctionComponent= () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'privilege', value: 'privilege'},
        {label: 'casual', value: 'casual'},
        {label: 'on duty', value: 'on duty'}
    ]);
    const [shift,setShift] = useState<String>('');
    const [reason,setReason] = useState<String>('');
    const [daz,setDaz] = useState<any>()
    const textStyle = (num) => {
        return shift == num? styles.f_yes: styles.shiftbtntext;
    }
    const viewStyle = (num1) => {
        return shift == num1? styles.f_yes1: styles.shiftbtn;
    }
  return (
    <> 
    <ScrollView nestedScrollEnabled={true}>
    <View style={{flexDirection:"row",paddingHorizontal:15,marginTop:25,justifyContent: 'space-between',}}>
          <Text style={{color:"#000",fontSize:25}}>People</Text>
          <View style={{flexDirection:"row",}}>
          <Icon name='search-outline' size={25} color="#279EA0" />
          <Icon name='notifications' color="#279EA0" size={25} />
          </View>
      </View>
        <View style={styles.parent}>
        <View style={styles.parent1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>select date</Text>
        </View>
        <Calendar
          style={styles.calender}
          current={new Date()}
          onDayPress={(day) => {setDaz(day.dateString)}}
          monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          hideDayNames={false}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          enableSwipeMonths={false}
          theme={{
            arrowColor: "#279EA0",
            monthTextColor: "#279EA0",
            selectedDayTextColor: '#fff',
            indicatorColor: "#279EA0",
          }}
       
   markingType={'period'}
   markedDates={ 
  
    {[daz] : {startingDay: true,endingDay: true, color: '#279EA0', textColor: 'white'}}
    }
        />
      </View>
            <View style={styles.head}>
                <Text style={styles.heading}>
                    Select Shift
                </Text>
                <View style={{flexDirection:"row",marginVertical:35}}>
                    <TouchableOpacity style={viewStyle('First Half')} onPress={() => setShift('First Half') }>
                        <Text style={textStyle('First Half')}>
                            First Half
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={viewStyle('Second Half')} onPress={() => setShift('Second Half') }>
                        <Text style={textStyle('Second Half')}>
                            Second Half
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={viewStyle('Full')} onPress={() => setShift('Full') }>
                        <Text style={textStyle('Full')}>
                            Full
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.head1}>
                <Text style={styles.heading}>
                    Leave type
                </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    listMode="SCROLLVIEW"
                    zIndex={3}
                    dropDownContainerStyle={{borderWidth:1.5,borderColor:'rgba(128, 128, 128, 0.3)',}}
                    placeholder="-Select-"
                    placeholderStyle={{color:"grey"}}
                    style={styles.input}
                />
            </View>
            <View style={styles.head}>
                <Text style={styles.heading}>
                    Reason for Leave
                </Text>
               <TextInput
                style={styles.textInput}
                placeholder={'Write Here'}
                placeholderTextColor={"#CCD1D1"}
                multiline={true}
                numberOfLines={3}
                underlineColorAndroid='transparent'
                value={reason} onChange={(desc) => setReason({reason})}
                >
               </TextInput>
            </View>
            <View style={styles.all}>
            <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                <View style={styles.Apply}>
                    <Text style={styles.Apply1}>
                        Duration
                    </Text>
                    <Text style={styles.Apply1}>
                        Date
                    </Text>
                    <Text style={styles.Apply1}>
                        Shift
                    </Text>
                    <Text style={styles.Apply1}>
                        Type
                    </Text>
                </View>
                <View style={styles.Apply}>
                    <Text style={styles.Apply2}>
                        1
                    </Text>
                    <Text style={styles.Apply2}>
                        {daz}
                    </Text>
                    <Text style={styles.Apply2}>
                        {shift}
                    </Text>
                    <Text style={styles.Apply2}>
                        {value}
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity style={{backgroundColor:"#279EA0",alignSelf:"center",marginVertical:18,paddingVertical:10,paddingHorizontal:55,borderRadius:10,}}>
              <Text style={{color:"#fff",fontSize:18,fontWeight:"bold",alignSelf:"center"}}>
                  Apply
              </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    parent: {
      height: '100%',
      width: '100%',
      backgroundColor: "#F4F6F6",
      padding:10,
      alignSelf:"center",
      },
      parent1: {
        marginTop: 18,
        backgroundColor: '#E2E2E2',
        paddingHorizontal: '4%',
        paddingBottom: 20,
        borderRadius: 15,
      },
      header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '2%',
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:"#000"
      },
      calender: {
        borderRadius: 10,
        // width:300
      },
      heading:{
          color:"#279EA0",
          fontWeight:"bold",
          fontSize:20,
      },
      head:{
        alignItems:"center",
        marginTop:15,
        backgroundColor:"#fff",
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:18,
      },
      head1:{
        alignItems:"center",
        marginTop:15,
        backgroundColor:"#fff",
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:18,
        zIndex:5
      },
      input:{
        borderWidth:1.5,
        borderColor:'rgba(128, 128, 128, 0.3)',
        borderRadius:10,
        padding:6,
        marginVertical:20,
       
      },
      shiftbtntext:{
          color:"#000",
          fontWeight:"bold",
          alignSelf:"center",
          fontSize:11,
      },
      shiftbtn:{
        backgroundColor:"#E2E2E2",
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:5,
        width:"32%"
      },
      f_yes:{
          color:"#ffff",
          fontWeight:"bold",
          alignSelf:"center",
          fontSize:11,
      },
      f_yes1:{
        backgroundColor:"#279EA0",
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:5,
        width:"32%"
      },
      textInput: {
        width: '95%',
        marginVertical:15,
        backgroundColor:"#F2F4F4",
        borderRadius:8,
        alignItems:"center",
        color:"#000",padding:10
      },
      Apply1:{
          color:"#000", 
          fontSize:18,
          paddingVertical:7,
      },
      Apply2:{
          color:"#9EA2A2",
          fontSize:18,  
          paddingVertical:7,
          textAlign:'right'
      },
      all:{
        marginVertical:15,
        borderRadius:10,
        paddingHorizontal:18,
        paddingVertical:15,
        backgroundColor:"#fff",
        justifyContent:"space-between"
      }
});

export default Apply;