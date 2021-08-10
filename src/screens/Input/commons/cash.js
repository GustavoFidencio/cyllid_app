import React, { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const Cash = ({ }) => {

    const [val, setVal] = useState(0)

    return (
        <View style={styles.containerMoney}>
            <TextClean style={styles.textMoney}>
                +
            </TextClean>
            <TextClean style={styles.textMoney}>
                R$
            </TextClean>
            <CurrencyInput
                value={val}
                delimiter={"."}
                separator={","}
                style={styles.textNumberMoney}
                onChangeValue={val => setVal(!val ? 0 : val)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerMoney: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMoney: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney: {
        left: 10,
        fontSize: 28,
        color: 'white',
        minWidth: 80,
        fontFamily: 'Nunito-Black',
    }
})