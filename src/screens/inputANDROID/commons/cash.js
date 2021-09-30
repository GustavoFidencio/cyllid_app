import React, { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';

import { TextClean } from 'cyllid/src/helpers';

const { width } = Dimensions.get('window');

export const Cash = () => {

    const [val, setVal] = useState(0);

    return (
        <Animated.View style={styles.containerMoney}>
            <View style={styles.containerAbsolute}>
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
                        style={styles.textNumberMoney}
                        onChangeValue={val => setVal(!val ? 0 : val)}
                    />
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    containerMoney: {
        top: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMoney: {
        fontSize: 28,
        color: 'white',
        textAlignVertical: 'center',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney: {
        left: 10,
        fontSize: 28,
        color: 'white',
        minWidth: 80,
        fontFamily: 'Nunito-Black',
    },
    containerAbsolute: {
        width: width,
        alignItems: 'center',
    },
    containerAlign: {
        right: 20,
        flexDirection: 'row',
    }
})