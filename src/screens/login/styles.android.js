import { StyleSheet } from 'react-native';
import Color from '../../assets/colors';

export default StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        paddingTop: 43,
        paddingHorizontal: 16,
        backgroundColor: Color.DARK,
    },
    containerApresentation: {
        width: '100%',
        backgroundColor: Color.DARK,
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
        marginTop: 30,
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
        marginTop: 40,
        textAlign: 'center',
        color: Color.BLUE,
        marginBottom: 20,
    },
    container: {
        width: '100%'
    }
}) 