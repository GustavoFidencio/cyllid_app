import { Animated } from 'react-native';
import React, { useEffect, memo, useRef, useState } from 'react';

import { Animate } from '../../../services/animate';

export const DescText = memo(({ text, styled, opacity }) => {

    const [keyboard, setKeyboard] = useState(false);
    const valueAnimate = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        (async () =>
            Animate.default(0, valueAnimate, 1500)
        )();
    }, []);

    useEffect(() => {
        if (opacity) {
            setKeyboard(true)
            Animate.default(100, valueAnimate, 500)
        } else {
            keyboard && setKeyboard(false)
            Animate.default(0, valueAnimate, 1500)
        }
    }, [opacity]);

    const transform = [{
        translateY: valueAnimate.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 8]
        })
    }];

    const opacityText = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0]
    });

    const opacityTextFast = valueAnimate.interpolate({
        inputRange: [0, 20],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.Text style={{
            ...styled, transform,
            opacity: keyboard ? opacityTextFast : opacityText
        }}>
            { text}
        </Animated.Text >
    )
})