import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../assets/colors';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    containerAll: {
        width: '100%',
        height: '100%',
        paddingTop: 43,
        paddingHorizontal: 16,
        backgroundColor: Color.DARK,
    },
    containerSafeArea: {
        flex: 1,
        paddingTop: 43,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: Color.DARK,
    },
    containerApresentation: {
        width: '100%',
    },
    textNameApp: {
        fontSize: 32,
        color: Color.BLUE,
        fontWeight: 'bold',
    },
    containerDescApp: {
        width: 160,
        marginTop: 20,
    },
    textDescApp: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    containerSeparation: {
        flex: 1,
        justifyContent: 'space-between',
    },
    textUser: {
        fontSize: 14,
        color: 'white',
    },
    backgroundInput: {
        height: 40,
        width: '100%',
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: Color.DARK_ONE,
    },
    input: {
        paddingLeft: 15,
        color: '#c4c4c4',
    },
    containerSwitch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textLembrar: {
        color: 'white',
        marginRight: 10,
    },
    buttonNext: {
        padding: 10,
        width: '100%',
        marginTop: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    textAvancar: {
        color: 'white',
    },
    textSolicitarAcesso: {
        fontSize: 14,
        marginTop: 30,
        textAlign: 'center',
        color: Color.BLUE,
        marginBottom: 20,
    },
    container: {
        width: '100%',
    },

    //password
    labelInstrucion: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    labelPassword: {
        color: 'white'
    },
    labelExchangePassword: {
        color: Color.BLUE
    },
    containerLabels: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    

})