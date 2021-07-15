import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: Color.DARK,
    },
    goBack: {
        left: 0,
        // padding: 8,
        // paddingTop: 8,
        position:'absolute'
    },
    container:{
        paddingHorizontal: 15
    },
    textTitle:{
        top: 45,
        fontSize: 26,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    containerMoney:{
        top:30,
        width:'100%',
        flexDirection:'row',
    },
    textMoney:{
        top: 45,
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney:{
        left:10,
        top: 45,
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-Black',
    }
})