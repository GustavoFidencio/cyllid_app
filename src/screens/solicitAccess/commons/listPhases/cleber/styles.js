import Color from 'cyllid/src/assets/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    containerInputs: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    textAvancar: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    buttonNext: {
        bottom: 20,
        padding: 10,
        width: '100%',
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    goBack: {
        left: 0,
        zIndex: 3,
        opacity: .5,
        padding: 8,
        position: 'absolute',
    },
})