import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Color from 'cyllid/src/assets/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: Color.DARK,
    },
    containerPhoto:{
        top: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle:{
        borderWidth: 3,
        width: width / 3,
        height: width / 3,
        borderRadius: 999,
        alignItems: 'center',
        borderColor: 'white',
        justifyContent: 'center',
    },
    aliasUser:{
        fontSize: 35,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    textNameUser:{
        top: 12,
        fontSize: 24,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    contianerOptions:{
        flex:1,
        top:90,
    },
})