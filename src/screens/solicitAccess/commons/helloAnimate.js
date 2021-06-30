
import React, { memo } from 'react';
import { Animated, StyleSheet } from 'react-native';

export const HelloAnimate = memo(({ faded }) => {

    const opacity = faded.interpolate({
        inputRange: [0, 12, 20, 35],
        outputRange: [0, 1, 1, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.Text
            style={{
                ...styles.labelHello, opacity
            }}>
            Olá
        </Animated.Text>
    )
})

const styles = StyleSheet.create({
    labelHello: {
        fontSize: 24,
        color: 'white',
        position: 'absolute',
        fontFamily: 'Nunito-LightItalic',
    }
})