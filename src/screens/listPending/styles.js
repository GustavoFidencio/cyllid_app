import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.DARK,
    },
    container: {
        paddingHorizontal: 15,
    },
    goBack: {
        left: 5,
        // padding: 8,
        // paddingTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
})