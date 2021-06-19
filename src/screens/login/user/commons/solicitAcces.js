import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import { TextClean } from 'cyllid/src/helpers';

export const SolicitAcces = ({ show }) => {

    const valueAnimate = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        if (show) Animate.default(100, valueAnimate, 500)
        else Animate.default(0, valueAnimate, 200)
    }, [show])

    const height = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [50, 70],
    })

    const opacity = valueAnimate.interpolate({
        inputRange: [20, 100],
        outputRange: [0, 100],
    })

    return (
        <Animated.View style={{ height, opacity, ...styles.container }} >
            <TouchableOpacity
                disabled={!show}
                style={styles.button}
                onPress={() => console.log('solicitar acesso')}
            >
                <TextClean style={styles.text} >
                    Solicitar acesso
                </TextClean>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: Color.BLUE,
    },
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '75%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})