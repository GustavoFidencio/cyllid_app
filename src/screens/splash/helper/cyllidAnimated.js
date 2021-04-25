import { Animated, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

const { width, height } = Dimensions.get('window')

export const CyllidAnimated = ({ finaly }) => {

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
        <Animated.View
            style={{
                transform: [
                    {
                        translateY: valueAnimate.interpolate({
                            inputRange: [0, 100],
                            outputRange: [0, 5]
                        })
                    },
                ],
                opacity: valueAnimate.interpolate({
                    inputRange: [0, 90],
                    outputRange: [1, 0]
                })
            }}>
            <Image
                resizeMode='contain'
                style={{
                    width: width / 2,
                    // height: 200
                }}
                source={require('../../../assets/img/logo.png')}
            />
        </Animated.View>
    )
}