import React, { useEffect, useRef, memo } from 'react';
import { View, Animated, StyleSheet, TextInput, Text } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Input = memo(({ title, placeholder, error, value, setValue, setShow }) => {

    const valueAnimate = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        if (error) Animate.smooth(100, valueAnimate)
        else Animate.smooth(0, valueAnimate)
    }, [error])

    const borderColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['transparent', Color.ERROR]
    });

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })

    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.textUser}> {title} </Text>
            <Animated.View style={{ ...styles.backgroundInput, borderColor }} >
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
        </View>
    )
})

const styles = StyleSheet.create({
    input: {
        height: '100%',
        paddingLeft: 15,
        color: '#c4c4c4',
    },
    backgroundInput: {
        height: 40,
        width: '100%',
        marginTop: 10,
        borderRadius: 6,
        borderWidth: 1.5,
        backgroundColor: Color.DARK_ONE,
    },
    textUser: {
        fontSize: 14,
        color: 'white',
    },
    textError: {
        top: 1,
        color: Color.ERROR,
    }
})