import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    containerAll: {
        width: '100%',
        height: '100%',
        paddingTop: 43,
        paddingHorizontal: 16,
        backgroundColor: Color.DARK,
        justifyContent: 'space-between',
    },
    containerSafeArea: {
        flex: 1,
        paddingTop: 43,
        justifyContent: 'center',
        backgroundColor: Color.DARK,
    },
    containerSeparation: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
    textUser: {
        fontSize: 14,
        color: 'white',
    },
    backgroundInput: {
        height: 40,
        width: '100%',
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: Color.DARK_ONE,
    },
    input: {
        paddingLeft: 15,
        color: '#c4c4c4',
    },
    containerSwitch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textLembrar: {
        color: 'white',
        marginRight: 10,
    },
    buttonNext: {
        padding: 10,
        width: '100%',
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    buttonNextAndroid: {
        padding: 10,
        width: '100%',
        borderRadius: 30,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    textAvancar: {
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    container: {
        width: '100%',
    },
    safeArea: {
        flexGrow: 0,
        backgroundColor: Color.DARK,
    },
})