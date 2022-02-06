import React, {FunctionComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
  total: number;
  privilege: number;
  casual: number;
  onDuty: number;
  onPress: () => void;
}

const Leaves: FunctionComponent <Props> = (props) => {
  const leaves = props.total/3;
  const sumleave = props.casual + props.privilege + props.onDuty;
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Leaves</Text>
        </View>
        <View style={styles.leave}>
          <View style={styles.heading2}>
            <Text style={{color:"#000",fontSize:20,fontWeight:"bold"}}>
                Total Leaves
            </Text>
            <Text style={{color:"#279EA0",fontSize:20}}>
              {sumleave}/{props.total}
            </Text>
          </View>
          <View style={styles.heading}>
            <Text style={{color:"#000",fontSize:15}}>
                Privilege Leaves
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Progress.Bar style={{height:5,alignSelf:'center'}} progress={props.privilege/leaves} width={250} height={5} borderWidth={0} color="#1ABC9C" unfilledColor={"#E2E2E2"}  />
            <Text style={{color:"#000",fontSize:15}}>
                {props.privilege}/{leaves}
            </Text>
            </View>
            
          </View>
          <View style={styles.heading}>
            <Text style={{color:"#000",fontSize:15}}>
                Casual Leaves
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Progress.Bar style={{height:5,alignSelf:'center'}} progress={props.casual/leaves} width={250} height={5} borderWidth={0} color="#1ABC9C" unfilledColor={"#E2E2E2"}  />
            <Text style={{color:"#000",fontSize:15}}>
                {props.casual}/{leaves}
            </Text>
            </View>
          </View>
          <View style={styles.heading}>
            <Text style={{color:"#000",fontSize:15}}>
                On Duty Leaves
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Progress.Bar style={{height:5,alignSelf:'center'}} progress={props.onDuty/leaves} width={250} height={5} borderWidth={0} color="#1ABC9C" unfilledColor={"#E2E2E2"}  />
            <Text style={{color:"#000",fontSize:15}}>
                {props.onDuty}/{leaves}
            </Text>
            </View>
          </View>
          <TouchableOpacity onPress={props.onPress}>
              <Text style={{color:"#279EA0",fontSize:18,alignSelf:"center",marginTop:18}}>
                  Apply Leave
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    
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
    paddingHorizontal: '2%',
    
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color:"#000"
  },
  leave:{
    backgroundColor:"#fff",
    padding: '6%',
    borderRadius: 15,
  },
  heading:{
    flexDirection:"column",
    justifyContent:"space-between",
    marginVertical:'3%'
  },
  heading2:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:'4%'
  }
});

export default Leaves;
