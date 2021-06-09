import { Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState, memo } from 'react';

import { Icon } from 'cyllid/src/helpers';
import { Animate } from 'cyllid/src/services';
import Colors from 'cyllid/src/assets/colors';

export const CircleSelect = memo(({ select, item }) => {

    const opacity = useRef(new Animated.Value(0)).current;
    const heightDistance = useRef(new Animated.Value(0)).current;
    const [icon, setIcon] = useState({ name: 'close', lib: 'fontawesome' });

    useEffect(() => {
        (async () => {
            Animate.default(0, opacity, 300)
            Animate.smooth(0, heightDistance, 500)
            setTimeout(() => {
                setTimeout(() => Animate.default(1, opacity, 500), 100);
                Animate.smooth(1, heightDistance, 800)
            }, 220);
        })();
    }, [select])

    useEffect(() => {
        setTimeout(() => setIcon(item.icon), 100)
    }, [item])

    const height = heightDistance.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 70]
    })

    return (
        <Animated.View style={{ ...styles.container, bottom: height }}>
            <Animated.View style={{ opacity }}>
                <Icon
                    size={30}
                    lib={icon.lib}
                    name={icon.name}
                    color={Colors.DARK}
                />
            </Animated.View>
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
})