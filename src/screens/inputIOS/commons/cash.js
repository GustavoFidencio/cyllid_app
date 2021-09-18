import React, { useState, useEffect, useRef } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';

import { Animate } from 'cyllid/src/services';
import { TextClean } from 'cyllid/src/helpers';

const { width } = Dimensions.get('window');

export const Cash = ({ setFocus, focus }) => {

    const [val, setVal] = useState(0);

    const marginVertical = useRef(new Animated.Value(30)).current;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(focus ? 10 : 30, marginVertical, 1200)
        focus && Animate.smooth(100, valueAnimate, 2000)
    }, [focus]);

    const left = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [85, width / 2],
        extrapolate: 'clamp',
    })

    return (
        <Animated.View style={{ left, marginVertical, ...styles.containerMoney }}>
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
                        // onBlur={() => setFocus('')}
                        onFocus={() => setFocus('cash')}
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
        position: 'absolute',
        alignItems: 'center',
        marginLeft: -width / 2,
    },
    containerAlign: {
        right: 20,
        flexDirection: 'row',
    }
})