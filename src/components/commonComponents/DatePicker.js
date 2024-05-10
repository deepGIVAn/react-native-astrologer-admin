import React, { useState, useMemo } from "react";
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickers = (props) => {
  const { onChange, value, mode, is24Hour, display } = props;

  const handleTimeChange = (event, time) => {
    onChange(event, time);
  };

  return (
    <View>
      <DateTimePicker
        testID="datePicker"
        value={value}
        mode={mode}
        is24Hour={is24Hour}
        display={display}
        onChange={handleTimeChange}
      />
    </View>
  )
}
export default DatePickers;