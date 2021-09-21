import React, { useEffect, useRef, memo } from 'react';
import HapticFeedback from "react-native-haptic-feedback";
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Switch = memo(({ value, setValue }) => {

    const valueAnimate = useRef(new Animated.Value(-1)).current;

    useEffect(() => Animate.smooth(value ? 24 : -1, valueAnimate, 600), [value])

    const borderColor = valueAnimate.interpolate({
        inputRange: [-1, 24],
        outputRange: [Color.DARK_ONE, Color.BLUE]
    });

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [-1, 24],
        outputRange: [Color.DARK_ONE, Color.BLUE]
    });

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                setValue(!value)
                HapticFeedback.trigger("impactLight");
            }}
        >
            <Animated.View style={{ ...styles.containerSwitch, borderColor }}>
                <Animated.View style={{
                    backgroundColor,
                    ...styles.circleSwitch,
                    transform: [{ translateX: valueAnimate }],
                }} />
            </Animated.View>
        </TouchableOpacity>
    )
})

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