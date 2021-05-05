import React, { useRef, useEffect, memo } from 'react';
import { Animated, Dimensions } from 'react-native';

import { Animate } from '../services';

export const TitleAnimated = memo(({ text, styled, opacity, sized = false }) => {

    let widthScale = 0;
    const width = Dimensions.get('window').width;
    const valueAnimate = useRef(new Animated.Value(0)).current;
    const opacityAnimate = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        (async () =>
            Animate.default(100, valueAnimate, 1500)
        )();
    }, [])

    useEffect(() => {
        if (opacity)
            Animate.smooth(0, opacityAnimate, 1500)
        else
            Animate.smooth(1, opacityAnimate, 1500)
    }, [opacity])

    const transform = [{
        translateY: valueAnimate.interpolate({
            inputRange: [0, 50],
            outputRange: [8, 0]
        })
    }];

    const opacityDefault = valueAnimate.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 1]
    });

    const sizeText = opacityAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [55, styled.fontSize]
    });

    const margin = opacityAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [(width / 3) - (widthScale / 2) - 16, 0]
    });

    return (
        <Animated.Text
            onLayout={e => widthScale = e.nativeEvent.layout.width}
            style={{
                ...styled, transform,
                marginLeft: sized ? margin : 0,
                fontSize: sized ? sizeText : styled.fontSize,
                opacity: sized ? opacityDefault : opacityAnimate,
            }}
        >
            {text}
        </Animated.Text >
    )
})