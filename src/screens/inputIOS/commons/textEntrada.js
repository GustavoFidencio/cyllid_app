import { StyleSheet, Animated } from 'react-native';
import React, { memo, useRef, useEffect } from 'react';

import { Animate } from 'cyllid/src/services';
import Color from 'cyllid/src/assets/colors';

export const TextEntrada = memo(({ focus }) => {

    const valueAnimate = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animate.smooth(focus ? 0 : 100, valueAnimate, 1200)
    }, [focus]);

    const width = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 120]
    });

    const height = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [40, 60]
    });

    const fontSize = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [20, 26]
    });

    const border = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [13, 20]
    });

    return (
        <Animated.View
            style={{
                width,
                height,
                ...styles.containerLabel,
                borderTopLeftRadius: border,
                borderBottomLeftRadius: border,
                borderBottomRightRadius: border,
            }}
        >
            <Animated.Text style={{ fontSize, ...styles.textTitle }}>
                Entrada
            </Animated.Text>
        </Animated.View>
    )
})


const styles = StyleSheet.create({
    containerLabel: {
        marginRight: -5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    textTitle: {
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
})