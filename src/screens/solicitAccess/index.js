import styles from './styles';
import React, { useEffect, useRef } from 'react';
import { View, SafeAreaView, Animated } from 'react-native'

import { AnimateText } from './commons';
import { Animate } from 'cyllid/src/services';

export const SolicitAccess = () => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.default(100, valueAnimate, 4500)
    }, [])

    const fadedPrimay = valueAnimate.interpolate({
        inputRange: [0, 12, 20, 35],
        outputRange: [0, 1, 1, 0],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <Animated.Text style={{ ...styles.labelHello, opacity: fadedPrimay }}>
                Olá
            </Animated.Text>
            <View style={styles.containerComprimentation}>
                <AnimateText
                    faded={valueAnimate}
                />
            </View>
        </SafeAreaView>
    )
}