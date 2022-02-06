import React, {FunctionComponent, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import DetailsSection from '../Components/LeadDetails/LeadDetailsSection';
import NotesSection from '../Components/LeadDetails/NotesSection';
import AttachmentSection from '../Components/LeadDetails/AttachmentSection';
import TasksSection from '../Components/LeadDetails/TasksSection';
import CallLogs from '../Components/LeadDetails/CallLogs';

type props = {
  navigation: any;
  route: any;
  user: any;
  leads: any;
};

const LeadDetailsScreen: FunctionComponent<props> = ({
  navigation,
  route,
  user,
  leads,
}) => {
  const leadData = route.params.leadData.data;
  const leadId = route.params.leadData.id;
// console.log(leadData)
  return (
    <>
      <ScrollView
        style={{backgroundColor: 'grey'}}
        contentContainerStyle={styles.parent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.head}>
          <Text numberOfLines={2} style={styles.headText}>
            {leadData.customer_name}
          </Text>
          <View style={styles.iconView}>
          
          </View>
        </View>
        <Text style={styles.stage}>
          {leadData.stage === 'CALLBACK' ? 'CALL BACK' : leadData.stage}
        </Text>
        <View style={[styles.box]}>
          <DetailsSection
            leadData={leadData}
            navigation={navigation}
            leadId={leadId}
          />
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.head}>
            <Text style={styles.headText}>Notes</Text>
            <TouchableOpacity
              style={styles.subHeadContainer}
              onPress={() => navigation.navigate('Notes')}>
              <Text style={styles.subHead}>View All Notes</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {height: 180}]}>
            <NotesSection leadId={leadId} leadData={leadData} />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.head}>
            <Text style={styles.headText}>Attachments</Text>
            <TouchableOpacity
              style={styles.subHeadContainer}
              onPress={() => navigation.navigate('AllAttachments')}>
              <Text style={styles.subHead}>View All Attachments</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {height: 140}]}>
            <AttachmentSection leadId={leadId} leadData={leadData} />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.head}>
            <Text style={styles.headText}>Schedule Task</Text>
            <TouchableOpacity
              style={styles.subHeadContainer}
              onPress={() => navigation.navigate('AllTasks', {leadId})}>
              <Text style={styles.subHead}>View All Tasks</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {height: 165}]}>
            <TasksSection leadId={leadId} />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.head}>
            <Text style={styles.headText}>Calls</Text>
            <TouchableOpacity
              style={styles.subHeadContainer}
              onPress={() => navigation.navigate('CallLogs')}>
              <Text style={styles.subHead}>View All logs</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.box, {height: 90}]}>
            <CallLogs />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingTop: '3%',
    paddingHorizontal: '5%',
    paddingBottom: 4,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    marginLeft: 9,
  },
  stage: {
    fontSize: 13,
    color: 'grey',
    marginBottom: 10,
    marginLeft: 5,
  },
  headText: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    maxWidth: '52%',
  },
  subHeadContainer: {
    marginLeft: 'auto',
  },
  subHead: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
  iconView: {
    height: 40,
    width: '30%',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  box: {
    marginTop: 5,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
  },
});


export default LeadDetailsScreen;
