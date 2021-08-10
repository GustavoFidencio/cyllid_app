import Color from 'cyllid/src/assets/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        height,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 27,
        color: 'black',
        marginBottom: 25,
        fontFamily: 'Nunito-Black',
    },
    containerSubTitle: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Nunito-Bold',
    },
    labelLaws: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Nunito-Regular',
    },
})