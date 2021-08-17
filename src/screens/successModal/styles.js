import { StyleSheet, Dimensions } from 'react-native';
import Color from 'cyllid/src/assets/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.DARK,
    },
    container: {
        width: width * .7,
        alignItems: 'center',
    },
    buttonNext: {
        padding: 10,
        width: '100%',
        marginTop: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    textAvancar: {
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    textTitle: {
        left: 7,
        fontSize: 24,
        color: 'white',
        marginBottom: -10,
        fontFamily: 'Nunito-Bold',
    },
    textDesc: {
        fontSize: 18,
        color: 'white',
        marginTop: -10,
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
    },
    containerText: {
        width: '100%',
    },
})