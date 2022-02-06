import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
  TextInput
} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

type props = {
  onSearch: () => void;
};

const SearchBar : FunctionComponent<props>= ({onSearch}) => {
  return (
    <View
      style={
        styles.parent
      }>
      <TextInput
        style={styles.textInput}
        placeholder={'Search '}
        placeholderTextColor={"#CCD1D1"}
        
      />
      <View style={styles.line} />
      <TouchableOpacity 
      onPress={onSearch}
      >
        <Icon name='search-outline' size={25} color="#1ABC9C" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginTop: 28,
    width: '95%',
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center",
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    elevation: 3,
  },
  
  textInput: {
    width: '83%',
  },
  line: {
    height: '60%',
    width: 1,
    backgroundColor: "#fff",
  },
});

export default SearchBar;
