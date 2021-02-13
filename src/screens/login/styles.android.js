import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        padding: 17,
        backgroundColor: '#030336',
    },
    containerApresentation: {
        width: '100%',
        backgroundColor: '#030336',
    },
    textNameApp: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
    containerDescApp: {
        width: 160,
        marginTop: 20
    },
    textDescApp: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    containerSeparation: {
        flex: 1,
        justifyContent: 'space-between',
    }
}) 