import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

type props = {
  heading:string;
};

const Calender: FunctionComponent <props>= (props) => {
 
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{props.heading}</Text>
        </View>
        <Calendar
          style={styles.calender}
          current={new Date()}
          monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          hideDayNames={false}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          enableSwipeMonths={false}
          theme={{
            arrowColor: "#1ABC9C",
            monthTextColor: "#1ABC9C",
            selectedDayTextColor: '#fff',
            indicatorColor: "#1ABC9C",
          }}
        markedDates={{
            '2021-10-14': {selected: true, selectedColor: 'blue'},
            '2021-10-13': {
                customStyles: {
                  container: {
                    backgroundColor: 'white',
                    elevation: 2
                  },
                  text: {
                    textColor: 'blue'
                  }
                }
              },
            
          }}
        //   markingType={'period'}
//   markedDates={{
//     '2012-11-20':{marked: true, dotColor: '#50cebb'},
//     '2012-11-22': {startingDay: true, color: 'green'},
//     '2012-11-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
//     '2012-11-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
//   }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
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
});

export default Calender;
