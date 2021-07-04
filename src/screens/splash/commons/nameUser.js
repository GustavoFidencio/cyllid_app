import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { Animate } from 'cyllid/src/services';

export const NameUser = ({ name }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(1, valueAnimate, 1500)
    }, []);

    return (
        <View>
            <Animated.Text style={{
                ...styles.text,
                opacity: valueAnimate
            }}>
                Olá, {name}
            </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
})