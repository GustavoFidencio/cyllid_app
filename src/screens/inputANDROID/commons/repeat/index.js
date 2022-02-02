import { View, StyleSheet, Animated, TextInput } from 'react-native';
import React, { useState, useRef, useEffect, memo } from 'react';

import { InputLine } from '../inputLine';
import { Animate } from 'cyllid/src/services';
import Color from 'cyllid/src/assets/colors';
import { TextClean, CheckBox } from 'cyllid/src/helpers';

export const Repeat = memo(({ }) => {

    const [times, setTimes] = useState('');
    const [repeat, setRepeat] = useState(false);
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(repeat ? 100 : 0, valueAnimate, 2000)
    }, [repeat]);

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    const _input = () => {
        return (
            <View
                style={{
                    top: 15,
                    height: 50,
                    marginHorizontal: 15,
                }}
            >
                <View
                    style={{
                        height: 40,
                        width: '100%',
                        borderBottomWidth: 2,
                        borderBottomColor: 'white',
                    }}
                >
                    <TextInput
                        // value={value}
                        style={{
                            right: 10,
                            height: '100%',
                            color: '#fdfdfd',
                            paddingLeft: 15,
                        }}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        autoCompleteType={'off'}
                        // enablesReturnKeyAutomatically
                        placeholderTextColor={'#c4c4c4'}
                        placeholder={'Repetir até (vezes)'}
                    // onChangeText={val => setValue(val)}
                    />
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.checkbox}>
                <CheckBox
                    val={repeat}
                    background={Color.DARK}
                    setEnable={val => setRepeat(val)}
                />
                <TextClean style={styles.textRepeat}>
                    Repetir
                </TextClean>
            </View>

            {/* <Animated.View style={{ opacity }} > */}

            {/* <TextInput
                    val={times}

                /> */}

            {/* {_input()} */}
            <View
                style={{
                    height: 50,
                    marginTop: 15,
                    backgroundColor: 'pink'
                }}
            >
                <View
                    style={{
                        height: 40,
                        borderBottomWidth: 2,
                        borderBottomColor: 'white',
                        // backgroundColor: 'red'
                    }}
                >
                    <TextInput
                        // value={value}
                        style={{
                            // right: 10,
                            color: '#fdfdfd',
                            // paddingLeft: 15,
                        }}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        autoCompleteType={'off'}
                        // enablesReturnKeyAutomatically
                        placeholderTextColor={'#c4c4c4'}
                        placeholder={'Repetir até (vezes)'}
                    // onChangeText={val => setValue(val)}
                    />
                </View>
            </View>
            {/* </Animated.View> */}

        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 25,
        marginHorizontal: 15
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRepeat: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'Nunito-SemiBold',
    },
})