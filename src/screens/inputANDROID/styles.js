import { StyleSheet, Dimensions } from 'react-native';
import Color from 'cyllid/src/assets/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.DARK,
    },
    scrollView: {
        flex: 1,
        height: '100%',
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
})