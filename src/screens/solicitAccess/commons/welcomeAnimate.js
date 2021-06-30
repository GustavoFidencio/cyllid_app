
import React, { memo } from 'react';
import { Animated, StyleSheet } from 'react-native';

export const WelcomeAnimate = memo(({ faded }) => {

    const frase = ['Será', 'um', 'prazer', 'ter', 'você', 'aqui', 'com', 'a', 'gente!'];

    const maxHeight = faded.interpolate({
        inputRange: [100, 110],
        outputRange: [100, 0],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={{ ...styles.container, maxHeight }}>
            {
                frase.map((item, index) => {
                    let secondsForIndex = 5.8;
                    let seconds = (index + 8) * secondsForIndex;
                    return (
                        <Animated.Text
                            key={index}
                            style={{
                                ...styles.text,
                                opacity: faded.interpolate({
                                    inputRange: [seconds - 12, seconds + secondsForIndex, 100, 110],
                                    outputRange: [0, 1, 1, 0],
                                    extrapolate: 'clamp',
                                }),
                            }}
                        >
                            {` ${item}`}
                        </Animated.Text>
                    ) 
                })
            }
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: '91%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Nunito-LightItalic',
    },
})