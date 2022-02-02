import React, { useState, memo } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { StyleSheet, View, Animated } from 'react-native';

import { TextClean } from 'cyllid/src/helpers';

export const Cash = memo(() => {

    const [val, setVal] = useState(0);

    return (
        <Animated.View style={styles.container}>
            <View style={styles.containerAlign}>
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
                    maxLength={10}
                    style={styles.textNumberMoney}
                    onChangeValue={val => setVal(val)}
                />
            </View>
        </Animated.View >
    )
});

const styles = StyleSheet.create({
    container: {
        top: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    textMoney: {
        fontSize: 28,
        color: 'white',
        textAlignVertical: 'center',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney: {
        left: 5,
        fontSize: 28,
        color: 'white',
        minWidth: 80,
        fontFamily: 'Nunito-Black',
    },
    containerAlign: {
        flexDirection: 'row',
    }
})