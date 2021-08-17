import TextInputMask from 'react-native-text-input-mask';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, memo, forwardRef, useState } from 'react';

import { Icon } from 'cyllid/src/helpers';
import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Input = memo(forwardRef(({ placeholder, error, value, setValue, title, type = 'default', password = false }, ref) => {

    const [show, setShow] = useState(password);
    const err = useRef(new Animated.Value(0)).current;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (error) Animate.smooth(100, err)
        else Animate.smooth(0, err)
    }, [error])

    useEffect(() => { setTimeout(() => Animate.smooth(100, valueAnimate, 800), 600) }, [])

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
        <Animated.View style={{ ...styles.container, opacity: opacityBackground }}>
            <Text style={styles.textUser}>
                {title}
            </Text>
            <Animated.View style={{ borderColor, width: width, ...styles.backgroundInput }}>
                {
                    password &&
                    <TouchableOpacity
                        onPress={() => setShow(!show)}
                        style={styles.containerTouchable}
                    >
                        <Icon
                            size={25}
                            color={'white'}
                            name={!show ? 'eye' : 'eye-slash'}
                        />
                    </TouchableOpacity>
                }
                <TextInputMask
                    ref={ref}
                    value={value}
                    spellCheck={false}
                    selectTextOnFocus
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType={type}
                    autoCapitalize={'none'}
                    secureTextEntry={show}
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    maxLength={password ? 6 : 40}
                    enablesReturnKeyAutomatically
                    placeholderTextColor={'#c4c4c4'}
                    mask={
                        type != 'default' && !password &&
                        "[000].[000].[000]-[00]"
                    }
                    onChangeText={val => setValue(val)}
                />
            </Animated.View>
            <Animated.Text style={{ ...styles.textError, opacity }}>
                {labelError}
            </Animated.Text>
        </Animated.View>
    )
}))

const styles = StyleSheet.create({
    input: {
        height: '100%',
        paddingLeft: 15,
        color: '#c4c4c4',
        fontFamily: 'Nunito-Italic',
    },
    backgroundInput: {
        top: -5,
        height: 40,
        width: '100%',
        marginTop: 5,
        borderRadius: 6,
        borderWidth: 1.5,
        backgroundColor: Color.DARK_ONE,
    },
    textError: {
        left: 2,
        top: -5,
        color: Color.ERROR,
    },
    textUser: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    containerTouchable: {
        right: 0,
        zIndex: 2,
        width: 60,
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
    }
})