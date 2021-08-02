import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.DARK,
    },
    textUser: {
        fontSize: 23,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    numberDay: {
        fontSize: 26,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    mothnDay: {
        fontSize: 18,
        marginTop: -10,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    containerInfoDay: {
        width: '100%',
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollview: {
        top: 5,
        height: 165
    },
    containerContent: {
        paddingHorizontal: 15,
    },
    bgDate: {
        top: 0,
        right: -5,
        width: 80,
        height: 70,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})