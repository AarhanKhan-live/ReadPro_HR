import React, {FunctionComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as ProgressBar from 'react-native-progress';

interface Props {
    day: any,
    date: Number,
    Progress: any,
    hours:any
}

const Progress : FunctionComponent<Props> = (props) => {
    return(
        <View style={styles.layout}>
            <View style={styles.day}>
                <Text style={styles.date_text}>{props.date}</Text>
                <Text style={styles.day_text}>{props.day}</Text>
            </View>
            <View style={styles.progress}>
                <View style={styles.row}>
                    <Text style={{fontSize:13}}>7:00AM</Text>
                    <Text style={{fontSize:13}}>9:00PM</Text>
                </View>
                <ProgressBar.Bar style={{height:5,alignSelf:'center'}} progress={props.Progress} width={250} height={5} borderWidth={0} color="#1ABC9C" unfilledColor={"#E2E2E2"}/>
            </View>            
            <View style={styles.time}>
                <Text style={styles.time_text}>{props.hours}</Text>
                <Text style={styles.time_text2}>Hrs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:20
    },
    day:{
        flexDirection:'column',
        backgroundColor:'#279EA0',
        padding:10,
        borderRadius:10,
        justifyContent:'center'
    },
    day_text:{
        color:'white',
        fontSize:15
    },
    date_text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    },
    progress:{
        flexDirection:'column',
        justifyContent:'center',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    time:{
        flexDirection:'column',
        padding:10,
        justifyContent:'center'
    },
    time_text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    },
    time_text2:{
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center'
    }

})
export default Progress