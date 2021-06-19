import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
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