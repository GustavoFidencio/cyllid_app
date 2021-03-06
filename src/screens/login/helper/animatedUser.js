import { Animated, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export const AnimatedUser = ({ text, styled, opacity = 'default', children }) => {

    // const [valueAnimate] = useState(new Animated.Value(100));

    // const _animation = (value, delay) => {
    //     Animated.timing(valueAnimate, {
    //         toValue: value,
    //         duration: delay,
    //         useNativeDriver: false,
    //     }).start();
    // }

    // _animation(0, 1500)

    // useEffect(() => {
    //     if (opacity)
    //         _animation(100, 500)
    //     else
    //         _animation(0, 1500)
    // }, [opacity])

    return (
        // <Animated.Text
        //     style={{
        //         ...styled,
        //         transform: [
        //             {
        //                 translateY: valueAnimate.interpolate({
        //                     inputRange: [0, 100],
        //                     outputRange: [0, 8]
        //                 })
        //             },
        //         ],
        //         opacity: valueAnimate.interpolate({
        //             inputRange: [0, 100],
        //             outputRange: [1, 0]
        //         })
        //     }}
        // >
        //     { text}
        // </Animated.Text >
        <View style={{ backgroundColor: 'pink' }}>
            {children}
        </View>
    )
}