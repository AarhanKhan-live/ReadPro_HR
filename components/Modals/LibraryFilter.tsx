import React, {FunctionComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {connect, useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {Platform} from 'react-native';
import {setAnalyticsFilter} from '../../redux/actions';
import {useState} from 'react';
import Loader from './Loader';

type props = {
  onBack: () => void;
  show: boolean;
  analyticsFilter: any;
  user: any;
};
const LibraryFilter: FunctionComponent<props> = ({
  onBack,
  show,
  analyticsFilter,
  user,
}) => {
  const dispatcher = useDispatch();
  const [load, setLoad] = useState(false);
  const [Filter, setFilter] = useState('');
  return (
    <>
      <Loader show={load} />
      <Modal
        useNativeDriver={true}
        isVisible={show}
        onBackButtonPress={onBack}
        onBackdropPress={onBack}
        style={styles.parent}>
        <View style={styles.dialogue}>
          <Text style={styles.head}>Filters</Text>
          
          <View style={styles.filterRow}>
            <View style={Platform.OS === 'ios' && {transform: [{scale: 0.8}]}}>
              <CheckBox
                animationDuration={0.2}
                onValueChange={() => setFilter('All')}
              />
            </View>
            <Text style={styles.filterText}>Commercial</Text>
          </View>

          <View style={styles.filterRow}>
            <View style={Platform.OS === 'ios' && {transform: [{scale: 0.8}]}}>
              <CheckBox
                animationDuration={0.2}
                onValueChange={() => setFilter('T')}
              />
            </View>
            <Text style={styles.filterText}>Residential</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    margin: 0,
  },
  head: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dialogue: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: '3%',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: '2%',
  },
  filterText: {
    marginLeft: 6,
    fontSize: 15,
  },
});

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    analyticsFilter: state.filters.analyticsFilter,
  };
};

export default connect(mapStateToProps)(LibraryFilter);
