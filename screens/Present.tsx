import React, {FunctionComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Text,ScrollView} from 'react-native';
import Progress from '../components/Home/Progress';
import Icon from 'react-native-vector-icons/Ionicons';

const Present: FunctionComponent = () => {
    return(
        <View style={{marginVertical:30}}>
            <View style={styles.title}>
                <Icon name={'arrow-back'} color={'black'} size={26}  />
                <Text style={styles.title_text}>Present</Text>
            </View>
            <View style={styles.month}>
                <Text  style={styles.month_text}><Text style={{fontWeight:'bold'}}>August</Text> 2021</Text>
                <View></View>
                <Icon name={'calendar'} color={'#1ABC9C'} size={30} />
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
        color:'#1ABC9C'
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

export default Present