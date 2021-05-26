import React, { useEffect, memo, useRef, } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import Logo from 'cyllid/src/assets/img/logo.svg';

const { width } = Dimensions.get('window');

export const CyllidAnimated = memo(({ finaly }) => {

    const valueAnimate = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        (async () => {
            setTimeout(() => finaly(), 2000);
            Animate.smooth(0, valueAnimate, 5800)
        })();
    }, [])

    const transform = [{
        translateY: valueAnimate.interpolate({
            inputRange: [0, 100],
            outputRange: [-width, 0],
            extrapolate: 'clamp',
        })
    }];

    const scale = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [1.2, 1],
    })

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.containerGradiend, transform }} >
                <View style={styles.backgroundTopGradient} />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.image} colors={[Color.DARK, 'transparent']} />
            </Animated.View>
            <Animated.View style={{ transform: [{ scale }] }}>
                <Logo
                    width={width / 2}
                    height={width / 2}
                />
            </Animated.View>
        </View>
    )
})


const styles = StyleSheet.create({
    image: {
        width: width / 2,
        height: width / 2,
    },
    container: {
        height: width / 2,
    },
    containerGradiend: {
        zIndex: 2,
        width: width / 2,
        height: width / 2,
        position: 'absolute',
    },
    backgroundTopGradient: {
        width: width / 2,
        height: width / 2,
        backgroundColor: Color.DARK,
    }
})