import TextInputMask from 'react-native-text-input-mask';
import React, { forwardRef, useState, useRef, memo, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import { TextClean, Icon } from "cyllid/src/helpers";

export const PasswordInput = memo(forwardRef(({ error, value, setValue, setShow = false }, ref) => {

    const [show, setVisible] = useState(false);
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(error ? 100 : 0, valueAnimate)
    }, [error]);

    const borderColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['transparent', Color.ERROR]
    });

    const height = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [12, 22]
    });

    return (
        <View style={styles.container}>
            <TextClean style={styles.textUser}>
                Senha do aplicativo
            </TextClean>
            <Animated.View style={{ ...styles.backgroundInput, borderColor }}>
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
                <TextInputMask
                    ref={ref}
                    value={value}
                    maxLength={6}
                    mask={"[000000]"}
                    style={styles.input}
                    autoCorrect={false}
                    autoCompleteType={'off'}
                    keyboardType={'numeric'}
                    enablesReturnKeyAutomatically
                    onChangeText={val => setValue(val)}
                    onBlur={() => setShow && setShow(false)}
                    onFocus={() => setShow && setShow(true)}
                />
                {
                    !value.length ?
                        <TextClean style={styles.placeHolder}>
                            Ex: 400289
                        </TextClean>
                        :
                        !show &&
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.touchableInput}
                            onPress={() => ref.current.focus()}
                        >
                            {
                                Array(value.length).fill("").map((_, index) =>
                                    <View key={index} style={styles.circlePass} />
                                )
                            }
                        </TouchableOpacity>
                }
            </Animated.View >
            <Animated.Text style={{ ...styles.textError, height }}>
                {error}
            </Animated.Text>
        </View >
    )
}));

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        color: '#c4c4c4',
    },
    backgroundInput: {
        height: 40,
        width: '100%',
        marginTop: 2,
        borderRadius: 6,
        borderWidth: 1.5,
        backgroundColor: Color.DARK_ONE,
    },
    textUser: {
        fontSize: 14,
        color: 'white',
    },
    textError: {
        right: 5,
        alignSelf: 'flex-end',
        color: Color.ERROR,
    },
    container: {
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
    placeHolder: {
        height: 35,
        paddingTop: 8,
        paddingLeft: 15,
        position: 'absolute',
        color: 'rgba(256, 256, 256, .5)',
    },
    touchableInput: {
        zIndex: 2,
        height: 35,
        width: '80%',
        marginLeft: 15,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.DARK_ONE,
    },
    circlePass: {
        width: 7,
        height: 7,
        marginLeft: 2,
        borderRadius: 10,
        backgroundColor: '#c4c4c4',
    }

})