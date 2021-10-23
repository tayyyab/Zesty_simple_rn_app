import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TitleTextField: React.FC<{
  value: any;
  placeholder: any;
  onChangeText: any;
}> = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.container}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TitleTextField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});
