import HapticFeedback from "react-native-haptic-feedback";
import React, { useState, useEffect, useRef, memo } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';

import { Icon } from './icon';
import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const CheckBox = memo(() => {

    const [value, setVal] = useState(false);
    const valueAnimate = useRef(new Animated.Value(-1)).current;

    useEffect(() => {
        let val = 0
        if (value) {
            val = 100;
            HapticFeedback.trigger("impactLight");
        }
        Animate.smooth(val, valueAnimate, 600)
    }, [value])

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['white', Color.BLUE]
    });

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => setVal(!value)}
        >
            <Animated.View
                style={{
                    backgroundColor,
                    ...styles.containerSwitch,
                }}
            >
                <Icon
                    size={22}
                    color={'white'}
                    name={'check'}
                />
            </Animated.View>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    containerSwitch: {
        width: 30,
        height: 30,
        borderWidth: 3,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Color.BLUE
    },
});