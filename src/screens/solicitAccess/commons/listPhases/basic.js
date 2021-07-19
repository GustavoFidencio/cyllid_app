import React, { useEffect, useState, useRef } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, InputValidation } from "cyllid/src/helpers";

export const Basic = ({ next, back, valueAnimate }) => {

    const refName = useRef(null);
    const refSobName = useRef(null);
    const [name, setName] = useState('');
    const [isErr, setErr] = useState([false, false]);
    const [sobName, setSobname] = useState('');

    useEffect(() => refName.current.focus(), []);
    useEffect(() => StoragePhases.effectDates(isErr, setErr, 0), [name]);
    useEffect(() => StoragePhases.effectDates(isErr, setErr, 1), [sobName]);

    const _validRegisters = () => {
        if (isErr[0] || isErr[1] && isErr[0]) refName.current.focus()
        else if (isErr[1]) refSobName.current.focus()
        else {
            let error = StoragePhases.validBasic(name, sobName, next);
            setErr(error);
        }
    };

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    return (
        <Animated.View style={{ ...styles.container, opacity }} >
            <TouchableOpacity
                onPress={back}
                style={styles.goBack}
            >
                <Icon size={40} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
            <View style={styles.containerInputs}>
                <InputValidation
                    ref={refName}
                    value={name}
                    title={'Nome'}
                    error={isErr[0]}
                    placeholder={'Ex: Giovane'}
                    setValue={val => setName(val)}
                    setShow={show => {
                        if (!show) StoragePhases.validName(name, isErr, setErr)
                    }}
                />
                <InputValidation
                    error={isErr[1]}
                    value={sobName}
                    ref={refSobName}
                    title={'Sobrenome'}
                    placeholder={'Ex: Santos Silva'}
                    setValue={val => setSobname(val)}
                    setShow={show => {
                        if (!show) StoragePhases.validSobName(sobName, isErr, setErr)
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={_validRegisters}
                style={styles.buttonNext}
            >
                <TextClean style={styles.textAvancar}>
                    Avançar
                </TextClean>
            </TouchableOpacity>
        </Animated.View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    containerInputs: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    textAvancar: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    buttonNext: {
        bottom: 20,
        padding: 10,
        width: '100%',
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    goBack: {
        left: 0,
        zIndex: 3,
        opacity: .5,
        padding: 8,
        position: 'absolute',
    },
})