import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    safeArea:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.DARK,
    },
    labelHello:{
        fontSize: 24,
        color: 'white',
        fontFamily: 'Nunito-LightItalic',
    },
    containerComprimentation:{
        height: 25,
        position: 'absolute',
    }
})