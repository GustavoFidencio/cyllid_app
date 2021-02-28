import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';

import Color from '../assets/colors'

export const Switch = ({ }) => {

    const [value, setVal] = useState(false);
    const [valueAnimate] = useState(new Animated.Value(-1));

    const animation = (val, delay = 600) => {
        Animated.timing(valueAnimate, {
            toValue: val,
            duration: delay,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    useEffect(() => {
        if (value)
            animation(24)
        else
            animation(-1)
    }, [value])

    return (
        <TouchableOpacity onPress={() => setVal(!value)} activeOpacity={1} >
            <Animated.View style={{
                ...styles.containerSwitch,
                borderColor: valueAnimate.interpolate({
                    inputRange: [-1, 24],
                    outputRange: [Color.DARK_ONE, Color.BLUE]
                })
            }}>
                <Animated.View style={{
                    ...styles.circleSwitch,
                    transform: [{ translateX: valueAnimate }],
                    backgroundColor: valueAnimate.interpolate({
                        inputRange: [-1, 24],
                        outputRange: [Color.DARK_ONE, Color.BLUE]
                    }),
                }} />
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerSwitch: {
        width: 60,
        height: 37,
        borderWidth: 3,
        borderRadius: 30,
    },
    circleSwitch: {
        width: 30,
        height: 30.5,
        borderRadius: 99,
        position: 'absolute',
    }
})