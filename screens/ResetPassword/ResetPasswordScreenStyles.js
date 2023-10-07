import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeProvider';
import theme from '../../utils/theme';

const ResetPasswordScreenStyles = () => {
  const { currentTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 'auto',
      height: 'auto',
      flexDirection: 'column',
      padding: 16,
    },
    subContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    //   marginVertical: 60
    },
    pageTitle: {
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
    submitBtn: {
        marginTop: 20,
    },
    separatorContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        marginVertical: 40
    }
  });

  return styles;
};

export default ResetPasswordScreenStyles;
