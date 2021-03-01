import { Animated } from 'react-native';
import React, { useState, useEffect } from 'react';

export const CyllidAnimated = ({ styled, finaly }) => {

    const [valueAnimate] = useState(new Animated.Value(100));

    const _animation = (value, delay) => {
        Animated.timing(valueAnimate, {
            toValue: value,
            duration: delay,
            useNativeDriver: false,
        }).start(() => finaly());
    }

    _animation(0, 1500)

    return (
        <Animated.Text
            style={{
                ...styled,
                transform: [
                    {
                        translateY: valueAnimate.interpolate({
                            inputRange: [0, 100],
                            outputRange: [0, 5]
                        })
                    },
                ],
                opacity: valueAnimate.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0]
                })
            }}
        >
            Cyllid
        </Animated.Text >
    )
}