import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../utils/ThemeProvider';
import theme from '../utils/theme';

const SubmitButton = ({ onPress }) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const btnStyles = {
    backgroundColor: currentTheme === 'light' ? theme.dark.colors.backgroundColor : theme.light.colors.backgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
  };
  const buttonTextStyles = {
    color: currentTheme === 'light' ? theme.dark.colors.primaryColor : theme.light.colors.primaryColor,
    fontSize: 14,
  };
  return (
    <TouchableOpacity style={[btnStyles]} onPress={onPress}>
      <Text style={[buttonTextStyles]}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
