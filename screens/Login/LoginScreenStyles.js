import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeProvider';
import theme from '../../utils/theme';

const LoginScreenStyles = () => {
  const { currentTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 'auto',
      height: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 16,
    },
    subContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 60
    },
    loginTitle: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 600
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderEndWidth: 0,
      borderTopWidth: 0,
      marginBottom: 10,
      paddingHorizontal: 8,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
        
    },
    logoContainer: {
        position: 'relative',
        marginTop: 40
    },
    logo: {
        width: 100,
        height: 100
    },
    forgetPasswordText: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 0
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        paddingEnd: 16,
        marginBottom: 30
    },
    submitBtn: {
        // marginTop: 20,
    },
    separatorContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        marginVertical: 40
    },
    separatorLine: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'gray',
        marginStart: 20,
        marginEnd: 20
    },
    socialSignInContainer: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40
    },
    socialIcon: {
        width: 30,
        height: 30,
        margin: 30
    }
  });

  return styles;
};

export default LoginScreenStyles;
