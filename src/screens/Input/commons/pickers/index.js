import DatePicker from 'react-native-date-picker';
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import { InputLine } from '../inputLine';
import { DateService, Animate } from 'cyllid/src/services';
import { TextClean, Icon, CheckBox } from 'cyllid/src/helpers';

export const Pickers = ({ date, setDate }) => {

    const [show, setShow] = useState(false);

    const [valueAnimate] = useState(new Animated.Value(0));

    useEffect(() => {
        Animate.smooth(show ? 100 : 0, valueAnimate, 2000)
    }, [show]);

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