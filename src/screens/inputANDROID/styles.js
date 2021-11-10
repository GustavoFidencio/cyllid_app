import { StyleSheet, Dimensions } from 'react-native';
import Color from 'cyllid/src/assets/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.DARK,
    },
    goBack: {
        top: 5,
        left: 5,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonNext: {
        bottom: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    textAvancar: {
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    textGoBack: {
        fontSize: 17,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    }
})