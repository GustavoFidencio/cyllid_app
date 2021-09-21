import React, { useRef, useEffect, memo } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

const { width } = Dimensions.get('window');

export const AnimateText = memo(({ show }) => {

    let widthScale = 0;
    const valueAnimate = useRef(new Animated.Value(0)).current;
    const opacityAnimate = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        (async () =>
            Animate.default(100, valueAnimate, 1500)
        )();
    }, [])

    useEffect(() => {
        (async () =>
            Animate.smooth(show ? 0 : 1, opacityAnimate, 1500)
        )();
    }, [show])

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
        outputRange: [55, 32]
    });

    const margin = opacityAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [(width / 3) - (widthScale / 2) - 16, 0]
    });

    const opacityTextFast = opacityAnimate.interpolate({
        inputRange: [0, .2],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Animated.Text
                    style={{
                        ...styles.textNameApp,
                        transform,
                        fontSize: sizeText,
                        marginLeft: margin,
                        opacity: opacityDefault,
                    }}
                    onLayout={e => widthScale = e.nativeEvent.layout.width}
                >
                    Cyllid
                </Animated.Text >
            </View>
            <View
                style={{
                    width: 160,
                    marginTop: 20,
                }}
            >
                <Animated.Text
                    style={{
                        ...{
                            fontSize: 22,
                            color: 'white',
                            fontWeight: 'bold',
                        },
                        opacity:
                            opacityTextFast
                    }}
                >
                    Online, simples e prático.
                </Animated.Text >
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textNameApp: {
        fontSize: 32,
        color: Color.BLUE,
        fontWeight: 'bold',
    },
})
