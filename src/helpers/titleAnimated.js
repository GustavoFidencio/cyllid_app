import React, { useState, useEffect } from 'react';
import { Animated, View, Dimensions, Easing } from 'react-native';

export const TitleAnimated = ({ text, styled, opacity = 'default', sized = false }) => {

    const width = Dimensions.get('window').width;
    let widthScale = 0;
    const [valueAnimate] = useState(new Animated.Value(0));
    const [opacityAnimate] = useState(new Animated.Value(1));

    const _animation = (val, value, delay) => {
        Animated.timing(val, {
            toValue: value,
            duration: delay,
            useNativeDriver: false,
        }).start();
    }

    const _animationTwo = (val, value, delay) => {
        Animated.timing(val, {
            toValue: value,
            duration: delay,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    _animation(valueAnimate, 100, 1500)

    useEffect(() => {
        if (opacity)
            _animationTwo(opacityAnimate, 0, 1500)
        else
            _animationTwo(opacityAnimate, 1, 1500)
    }, [opacity])

    return (
        <Animated.Text
            onLayout={e => widthScale = e.nativeEvent.layout.width}
            style={{
                ...styled,
                transform: [
                    {
                        translateY: valueAnimate.interpolate({
                            inputRange: [0, 50],
                            outputRange: [8, 0]
                        })
                    },
                ],
                opacity: opacity == 'default' ?
                    valueAnimate.interpolate({
                        inputRange: [0, 80],
                        outputRange: [0, 1]
                    })
                    :
                    sized ?
                        1
                        :
                        opacityAnimate,
                fontSize: sized ?
                    opacityAnimate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [55, styled.fontSize]
                    })
                    :
                    styled.fontSize,
                marginLeft: sized ?
                    opacityAnimate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [(width / 3) - (widthScale / 2) - 16, 0]
                    })
                    :
                    0,
            }}
        >
            { text}
        </Animated.Text >
    )
}