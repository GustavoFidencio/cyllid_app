import Color from 'cyllid/src/assets/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.DARK,
    },
    animation: {
        width: width / 1.5,
        height: width / 1.5,
    },
})