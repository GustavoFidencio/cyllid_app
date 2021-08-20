import TextInputMask from 'react-native-text-input-mask';
import React, { useEffect, useState, forwardRef, memo } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Color from '../assets/colors';
import { Icon } from 'cyllid/src/helpers';
import { Animate } from 'cyllid/src/services';

export const InputValidation = memo(forwardRef(({ title, placeholder, error, value, setValue, setShow = false, type = 'default', password = false }, ref) => {

    const [show, setVisible] = useState(password);
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
            <Text style={styles.textUser}>
                {title}
            </Text>
            <Animated.View style={{ ...styles.backgroundInput, borderColor }}>
                {
                    password &&
                    <TouchableOpacity
                        onPress={() => setVisible(!show)}
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
                    mask={
                        type != 'default' && !password &&
                        "[000].[000].[000]-[00]"
                    }
                    ref={ref}
                    value={value}
                    spellCheck={false}
                    style={styles.input}
                    selectTextOnFocus
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    secureTextEntry={show} //nao funciona n sei pq 
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    enablesReturnKeyAutomatically
                    maxLength={password ? 6 : 40}
                    placeholderTextColor={'#c4c4c4'}
                    onBlur={() => setShow && setShow(false)}
                    onFocus={() => setShow && setShow(true)}
                    onChangeText={(val, teste) => {
                        if (type != 'default' && !password) setValue(teste);
                        else setValue(val);
                    }}
                    keyboardType={type != 'default' ? 'number-pad' : 'default'}
                />
            </Animated.View>
            <Animated.Text style={{ ...styles.textError, opacity }}>
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
        right: 5,
        alignSelf: 'flex-end',
        color: Color.ERROR,
    },
    container: {
        bottom: 2,
        width: '100%',
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
})