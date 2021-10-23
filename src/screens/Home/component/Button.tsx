import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button: React.FC<{
  text: String;
  onButtonPress: any;
  buttonStyle?: any;
  textStyle?: any;
}> = ({text, onButtonPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onButtonPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gold',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});
