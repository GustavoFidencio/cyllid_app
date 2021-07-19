import React, { useEffect, useState, forwardRef, memo } from 'react';
import { View, Animated, Easing, StyleSheet, TextInput, Text } from 'react-native';

import Color from '../assets/colors';

export const InputValidation = memo(forwardRef(({ title, placeholder, error, value, setValue, setShow }, ref) => {

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
        if (error) animation(100)
        else animation(0)
    }, [error]);

    const borderColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['transparent', Color.ERROR]
    });

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.textUser}> {title} </Text>
            <Animated.View style={{ ...styles.backgroundInput, borderColor }}>
                <TextInput
                    ref={ref}
                    value={value}
                    spellCheck={false}
                    style={styles.input}
                    selectTextOnFocus
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
            <Animated.Text style={{ ...styles.textError, opacity }} >
                {error}
            </Animated.Text>
        </View>
    )
}))

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