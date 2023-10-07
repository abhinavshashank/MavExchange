// LoginScreen.js

import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import LoginScreenStyles from './LoginScreenStyles';
import SubmitButton from '../../components/SubmitButton';
import { ThemeContext } from '../../utils/ThemeProvider';
import theme from '../../utils/theme';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import globalStyles from '../utils/globalStyles';
import firebaseConfig from '../../firebaseConfig';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('sankalpvk18@gmail.com');
    const [password, setPassword] = useState('password');
    const [errorMessage, setErrorMessage] = useState('');
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const styles = LoginScreenStyles();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleLogin = async () => {
        // Handle login logic here
        // console.log('Login button pressebbd');
        // console.log('Email:', email);
        // console.log('Password:', password);
        // toggleTheme();

        // if (email.length > 0) {
        //     if (!emailRegex.test(email)) {
        //         setErrorMessage('Please enter a valid email address.');
        //     } else {
        //         setErrorMessage('');
        //     }
        // }
        // else {
        //     // setErrorMessage('Email is required!');
        // }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Alert.alert('Success', `Logged in as ${userCredential.user.email}`);

            navigation.navigate('Dashboard')
            // toggleTheme();
        } catch (error) {
            // Alert.alert('Error', error.message);
            Alert.alert('Login Error', 'Incorrect email or password!');
        }

        // navigation.navigate('Dashboard')
    };

    const handleForgotPassword = () => {
        //Redirect to reset password page
        navigation.navigate('ResetPassword');
    }

    const interfaceLook = {
        backgroundColor: currentTheme === 'light' ? theme.light.colors.backgroundColor : theme.dark.colors.backgroundColor
    };

    const textStyle = {
        color: currentTheme === 'light' ? theme.light.colors.primaryColor : theme.dark.colors.primaryColor,
        fontFamily: 'UbuntuRegular'
    };


    const logoSource = currentTheme === 'light' ? require('../../assets/logo-light.png') : require('../../assets/logo-dark.png');
    const appleLogoSource = currentTheme === 'light' ? require('../../assets/icons/apple-dark.png') : require('../../assets/icons/apple-light.png');

    return (
        <View style={[styles.container, interfaceLook]}>

            <View style={styles.subContainer}>

                <View style={[styles.logoContainer]}>
                    <Image source={logoSource} style={[styles.logo]} />
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text style={[textStyle, styles.loginTitle]}>Login</Text>
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
                    autoCapitalize="none"
                />
                {errorMessage ? <Text style={{ color: '#F58025', alignSelf: 'flex-start', marginStart: 20, marginTop: -5, fontSize: 12 }}>{errorMessage}</Text> : null}
                <TextInput
                    style={[styles.input, { marginTop: 10 }]}
                    placeholder="Password"
                    placeholderTextColor={
                        currentTheme === 'light'
                            ? `${theme.light.colors.textColor}70`
                            : `${theme.dark.colors.textColor}70`
                    }
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordContainer}>
                    <Text style={[styles.forgetPasswordText, textStyle]}>Forgot Password?</Text>
                </TouchableOpacity>
                <SubmitButton
                    title="Submit"
                    onPress={handleLogin}
                    style={textStyle} />

                <View style={styles.separatorContainer}>
                    <View style={styles.separatorLine} />
                    <Text style={[styles.separatorText, textStyle, { alignSelf: 'center', fontSize: 16, fontWeight: 400 }]}>OR</Text>
                    <View style={styles.separatorLine} />
                </View>
                <View style={styles.socialSignInContainer}>
                    <Text style={[textStyle, { fontSize: 18 }]}>Login with</Text>
                    <View style={styles.socialIconContainer}>
                        <View><Image source={require('../../assets/icons/google.png')} style={styles.socialIcon} /></View>
                        <View><Image source={appleLogoSource} style={styles.socialIcon} /></View>
                        <View><Image source={require('../../assets/icons/facebook.png')} style={styles.socialIcon} /></View>
                    </View>
                </View>
            </View>

        </View>
    );
};


export default LoginScreen;
