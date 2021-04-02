import React, { useState, useEffect } from 'react';
import { Animated, View, Text, Easing } from 'react-native';

export const CirclePass = ({ index, limit = false }) => {

    const [valueAnimate] = useState(new Animated.Value(0));

    const _animation = (value, delay) => {
        Animated.timing(valueAnimate, {
            toValue: value,
            useNativeDriver: false,
            duration: delay,
            easing: Easing.inOut(Easing.elastic(1))
        }).start();
    }

    useEffect(() => {
        if (limit)
            _animation(100, 1500)
    }, [limit])

    return (
        <Animated.View
            style={{
                top: 20,
                width: 10,
                height: 10,
                zIndex: 99,
                marginLeft: 5,
                borderRadius: 99,
                backgroundColor: valueAnimate.interpolate({
                    inputRange: [0, 50, 100],
                    outputRange: ['white', 'red', 'white']
                })
            }} />
    )
}