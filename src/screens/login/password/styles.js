import { StyleSheet } from 'react-native';
import Color from 'cyllid/src/assets/colors';

export default StyleSheet.create({
    labelInstrucion: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    labelPass: {
        color: 'white'
    },
    labelExchange: {
        color: Color.BLUE
    },
    containerLabels: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Color.DARK,
    },
    goBack: {
        padding: 8,
        paddingTop: 16,
        position: 'absolute',
    }
})