import React, { useState, useRef, useEffect, memo } from 'react';
import { View, SafeAreaView, StyleSheet, Animated, TextInput } from 'react-native';

import { InputLine } from '../inputLine';
import { Animate } from 'cyllid/src/services';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, CheckBox } from 'cyllid/src/helpers';

export const Repeat = memo(() => {

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

            <Animated.View style={{ opacity }} >

                {/* <TextInput
                    val={times}

                /> */}
                <InputLine
                    disable={repeat}
                    value={times}
                    setValue={val => setTimes(val)}
                    placeholder={'Repetir até (vezes)'}
                />
            </Animated.View>

        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 25,
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