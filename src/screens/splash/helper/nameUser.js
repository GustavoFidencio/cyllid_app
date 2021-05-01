import React, { useEffect, memo, useRef, } from 'react';
import { Animated, Text, Dimensions, StyleSheet } from 'react-native';

import { Animate } from 'cyllid/src/services';

export const NameUser = memo(({ }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            Animate.default(100, valueAnimate, 1500)
        })();
    }, [])

    const transform = [{
        translateY: valueAnimate.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 5]
        })
    }];

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 90],
        outputRange: [0, 1]
    })

    return (
        <Animated.View style={{ transform, opacity, flexDirection: 'row' }}>
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 22,
                }}
            >
                Olá,
            </Text>
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    left: 5,
                    fontSize: 22,
                }}
            >
                Giovane
            </Text>
        </Animated.View>
    )
})

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: width / 2
    }
})