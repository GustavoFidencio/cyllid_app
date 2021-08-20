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
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
    textGoBack: {
        fontSize: 17,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    backgroundSelect: {
        right: 10,
        padding: 5,
        borderRadius: 30,
        position: 'absolute',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    textSelect: {
        color: Color.DARK,
        fontFamily: 'Nunito-Bold',
    },
    containerLoad: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleScreen: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    list: {
        width: '100%',
        marginTop: 15,
    },
    separatorComponent: {
        height: .5,
        width: '100%',
        backgroundColor: 'gray',
    },
    indexSelect: {
        fontSize: 20,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    containerDesc: {
        marginTop: 40,
        flexDirection: 'row',
    }
})