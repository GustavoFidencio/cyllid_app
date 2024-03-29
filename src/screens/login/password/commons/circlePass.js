import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { Animate } from 'cyllid/src/services';

export const CirclePass = ({ limit = false }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            if (limit) Animate.elasticPersonalizado(100, valueAnimate, 1500)
        })();
    }, [limit])

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [0, 50, 100],
        outputRange: ['white', 'red', 'white']
    })

    return (
        <Animated.View style={{ ...styles.circle, backgroundColor }} />
    )
}

const styles = StyleSheet.create({
    circle: {
        top: 20,
        width: 10,
        height: 10,
        zIndex: 99,
        marginLeft: 5,
        borderRadius: 99,
    }
})