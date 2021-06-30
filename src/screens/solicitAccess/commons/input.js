import React, { useEffect, useRef, memo } from 'react';
import { View, Animated, StyleSheet, TextInput, Text } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Input = memo(({ placeholder, error, value, setValue, setShow, title }) => {

    const err = useRef(new Animated.Value(0)).current;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (error) Animate.smooth(100, err)
        else Animate.smooth(0, err)
    }, [error])

    useEffect(() => {
        setTimeout(() => {
            Animate.smooth(100, valueAnimate, 800)
        }, 600);
    }, [])

    const borderColor = err.interpolate({
        inputRange: [0, 100],
        outputRange: ['transparent', Color.ERROR]
    });

    const opacity = err.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    const width = valueAnimate.interpolate({
        extrapolate: 'clamp',
        inputRange: [20, 100],
        outputRange: ['0%', '100%'],
    });

    const opacityBackground = valueAnimate.interpolate({
        inputRange: [20, 100],
        outputRange: [0, 1]
    });

    return (
        <Animated.View
            style={{
                width: '100%',
                opacity: opacityBackground,
            }}
        >
            <Text style={styles.textUser}> {title} </Text>
            <Animated.View
                style={{
                    ...styles.backgroundInput,
                    borderColor,
                    width: width,
                }}
            >
                <TextInput
                    value={value}
                    selectTextOnFocus
                    spellCheck={false}
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    onBlur={() => setShow(false)}
                    onFocus={() => setShow(true)}
                    enablesReturnKeyAutomatically
                    placeholderTextColor={'#c4c4c4'}
                    onChangeText={val => setValue(val)}
                />
            </Animated.View>
            <Animated.Text style={{ ...styles.textError, opacity }}>
                Ops, usuário incorreto
            </Animated.Text>
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    input: {
        height: '100%',
        paddingLeft: 15,
        color: '#c4c4c4',
        fontFamily: 'Nunito-Italic',

    },
    backgroundInput: {
        height: 40,
        width: '100%',
        marginTop: 5,
        borderRadius: 6,
        borderWidth: 1.5,
        backgroundColor: Color.DARK_ONE,
    },
    textError: {
        top: 1,
        color: Color.ERROR,
    },
    textUser: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
})