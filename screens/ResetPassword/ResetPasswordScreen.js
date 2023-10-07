// LoginScreen.js

import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import SubmitButton from '../../components/SubmitButton';
import ResetPasswordScreenStyles from '../ResetPassword/ResetPasswordScreenStyles';
import { ThemeContext } from '../../utils/ThemeProvider';
import theme from '../../utils/theme';

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const styles = ResetPasswordScreenStyles();

    const handleSubmit = () => {
        // Handle login logic here
        console.log('Submit button pressebbd');
        console.log('Email:', email);
    };

    const textStyle = {
        color: currentTheme === 'light' ? theme.light.colors.primaryColor : theme.dark.colors.primaryColor,
        fontFamily: 'UbuntuRegular'
    };

    const logoSource = currentTheme === 'light' ? require('../../assets/logo-light.png') : require('../../assets/logo-dark.png');

    return (
        <View style={[styles.container]}>

            <View style={styles.subContainer}>

                <View style={[styles.logoContainer]}>
                    <Image source={logoSource} style={[styles.logo]} />
                </View>

                <View style={{marginTop:40}}>
                    <Text style={[textStyle, styles.pageTitle]}>Reset Password</Text>
                </View>

                <TextInput
                    style={[styles.input, textStyle, { marginTop: 40 }]}
                    placeholder="Email"
                    placeholderTextColor={
                        currentTheme === 'light'
                            ? `${theme.light.colors.textColor}70`
                            : `${theme.dark.colors.textColor}70`
                    }
                    value={email}
                    onChangeText={setEmail}
                />
                
                <SubmitButton
                    title="Submit"
                    onPress={handleSubmit}
                    style={[textStyle, styles.submitBtn]} />

            </View>

        </View>
    );
};


export default ResetPasswordScreen;
