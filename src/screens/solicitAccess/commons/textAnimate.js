
import React, { memo } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export const AnimateText = memo(({ faded }) => {

    const frase = ['Será', 'um', 'prazer', 'ter', 'você', 'aqui', 'com', 'a', 'gente!']

    return (
        <View style={{ flexDirection: 'row' }}>
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
                                    inputRange: [seconds - 12, seconds + secondsForIndex],
                                    outputRange: [0, 1],
                                    extrapolate: 'clamp',
                                }),
                            }}
                        >
                            {` ${item}`}
                        </Animated.Text>
                    )
                })
            }
        </View>
    )
})

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Nunito-LightItalic',
    },
})