import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: Color.DARK,
    },
    textUser:{
        fontSize: 23,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    textDay:{
        fontSize: 23,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    textMoney:{
        fontSize: 18,
        color: 'white',
        marginTop:30,
        fontFamily: 'Nunito',
    },
    containerValues:{
        top: 2,
        flexDirection: 'row',
    },
    textReal:{
        top: 3,
        fontSize: 13,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    valueMoney:{
        left: 5,
        fontSize: 30,
        color: Color.BLUE,
        fontFamily: 'Nunito-Black',
    },
    containerInfoDay:{
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollview:{
        top: 5,
        height: 165
    },
    containerContent:{
        flex: 1,
        paddingHorizontal: 15,
    },
})