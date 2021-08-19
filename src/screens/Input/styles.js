import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.DARK,
    },
    goBack: {
        left: 0,
        // padding: 8,
        // paddingTop: 8,
        position: 'absolute'
    },
    container: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    containerLabel: {
        width: 120,
        height: 60,
        marginRight: -5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textTitle: {
        fontSize: 26,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
})