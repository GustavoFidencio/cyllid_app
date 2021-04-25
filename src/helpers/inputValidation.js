import React, { useEffect, useState } from 'react';
import { View, Animated, Easing, StyleSheet, TextInput, Text } from 'react-native';

import Color from '../assets/colors'

export const InputValidation = ({ title, placeholder, error, value, setValue }) => {

    const [valueAnimate] = useState(new Animated.Value(0));

    const animation = val => {
        Animated.timing(valueAnimate, {
            toValue: val,
            duration: 1500,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    useEffect(() => {
        if (error)
            animation(100)
        else
            animation(0)
    }, [error])

    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.textUser}> {title} </Text>
            <Animated.View
                style={{
                    ...styles.backgroundInput,
                    borderColor: valueAnimate.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['transparent', Color.ERROR]
                    })
                }}
            >
                <TextInput
                    value={value}
                    selectTextOnFocus
                    spellCheck={false}
                    style={styles.input}
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    enablesReturnKeyAutomatically
                    placeholderTextColor={'#c4c4c4'}
                    onChangeText={val => setValue(val)}
                />
            </Animated.View>
            <Animated.Text
                style={{
                    ...styles.textError,
                    opacity: valueAnimate.interpolate({
                        inputRange: [0, 100],
                        outputRange: [0, 1]
                    })
                }}
            >
                Ops, usuário incorreto
            </Animated.Text>
        </View>
    )
}

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