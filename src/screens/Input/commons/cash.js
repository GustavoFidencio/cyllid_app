import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const Cash = ({ }) => {

    const [val, setVal] = useState()

    return (
        <View style={styles.containerMoney}>
            <TextClean style={styles.textMoney}>
                +
            </TextClean>
            <TextClean style={styles.textMoney}>
                R$
            </TextClean>
            <TextInputMask
                type={'money'}
                keyboardType={'numeric'}
                onChangeText={val => setVal(val)}
                style={styles.textNumberMoney}
            >
                0,00
            </TextInputMask>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMoney: {
        width: '100%',
        flexDirection: 'row',
    },
    textMoney: {
        top: 45,
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney: {
        left: 10,
        top: 45,
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-Black',
    }
})