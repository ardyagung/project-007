import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Button, StyleSheet} from 'react-native';
import CustomTextInput from './components/customTextInput';

const WeatherSearch = ({searchWeather}) => {
  const [location, setLocation] = useState('');

  return (
    <View>
      <CustomTextInput 
        text={location}
        onChange={setLocation}
        placeholder="Search the weather of your city" 
        numberOfLines={1} />
      <View style={styles.buttonWrapper}>
        <Button 
          title="Search" 
          onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

WeatherSearch.PropTypes = {
  searchWeather: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;