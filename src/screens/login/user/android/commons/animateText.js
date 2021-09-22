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

    const height = opacityAnimate.interpolate({
        inputRange: [0, .5],
        outputRange: [0, 55],
        extrapolate: 'clamp'
    });

    const opacityTextFast = opacityAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Animated.Text
                    style={{
                        ...styles.textNameApp,
                        fontSize: sizeText,
                        marginLeft: margin,
                        opacity: opacityDefault,
                    }}
                    onLayout={e => widthScale = e.nativeEvent.layout.width}
                >
                    Cyllid
                </Animated.Text>
            </View>
            <Animated.View style={{ height, ...styles.containerDesc }}>
                <Animated.Text style={{ ...styles.textDesc, opacity: opacityTextFast }} >
                    Online, simples e prático.
                </Animated.Text >
            </Animated.View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center'
    },
    textNameApp: {
        fontSize: 32,
        color: Color.BLUE,
        fontWeight: 'bold',
    },
    containerDesc: {
        width: 160,
        marginTop: 20,
    },
    textDesc: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
