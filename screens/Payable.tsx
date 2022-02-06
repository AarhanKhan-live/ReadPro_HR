import React, {FunctionComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import Progress from '../components/Home/Progress';
import Icon from 'react-native-vector-icons/Ionicons';

const Payable: FunctionComponent = () => {
    let days= [{id:1}]
    const Day = (day) => {
        if(day == 1){
            return 'MON'
        }
        else if(day==2) {
            return 'TUS'
        }
        else if(day==3) {
            return 'WED'
        }
        else if(day==4) {
            return 'THU'
        }
        else if(day==5) {
            return 'FRI'
        }
        else if(day==6) {
            return 'SAT'
        }
        else if(day==7) {
            return 'SUN'
        }
    }
    const Progresss = () => {
        let week = 0
        for(var i=0;i<31;i++){
        if(week==7){
            week=1
        }
        else{
            week++;
        }
        return(
            <Progress day={Day(week)} date={i} hours={'00'} Progress={0.8} />
        )
        }
    }
    return(
        <View style={{marginVertical:30}}>
            <View style={styles.title}>
                <Icon name={'arrow-back'} color={'black'} size={26}  />
                <Text style={styles.title_text}>Payable</Text>
            </View>
            <View style={styles.month}>
                <Text  style={styles.month_text}><Text style={{fontWeight:'bold'}}>August</Text> 2021</Text>
                <View></View>
                <Icon name={'calendar'} color={'#279EA0'} size={30} />
            </View>
            <View style={styles.table}>
                <View style={styles.col}>
                    <Text>First</Text>
                    <Text>Check in</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.col1} >
                        <Text>First</Text>
                        <Text>Check Out</Text>
                    </View>
                    <View style={styles.col}>
                        <Text>Total</Text>
                        <Text>Hours</Text>
                    </View>
                </View>
            </View>
           <ScrollView>
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            <Progress day={'MON'} date={'01'} hours={'00'} Progress={0.8} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginVertical:20,
        marginHorizontal:20
    },
    title_text:{
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:120
    },
    month:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        marginVertical:20,
    },
    month_text:{
        fontSize:25,
        color:'#279EA0'
    },
    table:{
        backgroundColor:'#E2E2E2',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        margin:10,
        paddingLeft:65,
        borderRadius:10,
    },
    col:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    col1:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    }
})

export default Payable