import TextInputMask from 'react-native-text-input-mask';
import React, { useEffect, useState, forwardRef, memo } from 'react';
import { View, Animated, StyleSheet, TextInput, Text } from 'react-native';

import Color from '../assets/colors';
import { Animate } from 'cyllid/src/services';

export const InputValidation = memo(forwardRef(({ title, placeholder, error, value, setValue, setShow, type = 'default' }, ref) => {

    const [valueAnimate] = useState(new Animated.Value(0));

    useEffect(() => {
        Animate.smooth(error ? 100 : 0, valueAnimate)
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
        <View style={styles.container}>
            <Text style={styles.textUser}> {title} </Text>
            <Animated.View style={{ ...styles.backgroundInput, borderColor }}>
                <TextInputMask
                    mask={
                        type != 'default' &&
                        "[000].[000].[000]-[00]"
                    }
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
                    keyboardType={type != 'default' ? 'phone-pad' : 'default'}
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
        marginTop: 7,
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
        right: 5,
        alignSelf: 'flex-end',
        color: Color.ERROR,
    },
    container: {
        bottom: 2,
        width: '100%',
    }
})