import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import { View, StyleSheet, TouchableOpacity, Animated, Keyboard } from 'react-native';

import { TextClean } from 'cyllid/src/helpers';
import { DateService, Animate } from 'cyllid/src/services';

export const Pickers = ({ date, setDate, focus, setFocus }) => {

    const [show, setShow] = useState(false);

    const [valueAnimate] = useState(new Animated.Value(0));

    useEffect(() => {
        if (show && focus) {
            Keyboard.dismiss();
            setFocus('');
        }
        Animate.smooth(show ? 100 : 0, valueAnimate, 2000)
    }, [show]);

    useEffect(() => {
        focus && show && setShow(false);
    }, [focus])

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                    <TextClean style={styles.textDate}>
                        {DateService.estrada(date)}
                    </TextClean>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>
            <Animated.View style={{ opacity, ...styles.containerPicker }}>
                <DatePicker
                    date={date}
                    locale={'pt'}
                    mode={'time'}
                    mode={'date'}
                    textColor={'white'}
                    onDateChange={setDate}
                />
            </Animated.View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 35,
    },
    textDate: {
        color: 'white',
        marginLeft: 5,
    },
    line: {
        height: 2,
        width: '100%',
        marginTop: 10,
        backgroundColor: 'white',
    },
    containerPicker: {
        bottom: 0,
        position: 'absolute',
    },
})