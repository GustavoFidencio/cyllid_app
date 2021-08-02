import React, { useEffect, useState, useRef } from 'react';
import HapticFeedback from "react-native-haptic-feedback";
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, InputValidation } from "cyllid/src/helpers";

export const Basic = ({ next, back, valueAnimate, focus }) => {

    const refName = useRef(null);
    const refSobName = useRef(null);

    const [name, setName] = useState('');
    const [errSob, setErrSob] = useState('');
    const [errName, setErrName] = useState('');
    const [sobName, setSobname] = useState('');

    useEffect(() => {
        if (focus) refName.current.focus()
    }, [focus])

    useEffect(() => {
        if (errName) setErrName(false);
    }, [name]);

    useEffect(() => {
        if (sobName) setErrSob(false);
    }, [sobName]);

    const _validRegisters = () => {
        if (errName || errSob && errName) refName.current.focus()
        else if (errSob) refSobName.current.focus()
        else {
            let erroName = StoragePhases.validName(name);
            let erroSobName = StoragePhases.validSobName(sobName);

            if (erroName && erroSobName) {
                setErrName(erroName);
                setErrSob(erroSobName);
                return HapticFeedback.trigger("notificationError");
            }
            if (erroName) {
                HapticFeedback.trigger("notificationError");
                return setErrName(erroName);
            }
            if (erroSobName) {
                HapticFeedback.trigger("notificationError");
                return setErrSob(erroSobName);
            }

            next([name, sobName]);
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
                <Icon size={25} name={'close'} lib={'antdesign'} color={'white'} />
            </TouchableOpacity>
            <View style={styles.containerInputs}>
                <InputValidation
                    ref={refName}
                    value={name}
                    title={'Nome'}
                    error={errName}
                    placeholder={'Ex: Giovane'}
                    setValue={val => setName(val)}
                    setShow={show => {
                        if (!show) setErrName(StoragePhases.validName(name, errName));
                    }}
                />
                <InputValidation
                    error={errSob}
                    value={sobName}
                    ref={refSobName}
                    title={'Sobrenome'}
                    placeholder={'Ex: Santos Silva'}
                    setValue={val => setSobname(val)}
                    setShow={show => {
                        if (!show) setErrSob(StoragePhases.validSobName(sobName, errSob));
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.buttonNext}
                onPress={_validRegisters}
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
        // height: '100%',
        alignItems: 'center',
        paddingBottom:20,
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
        padding: 10,
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        // bottom: width * .18, //valor ios
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    goBack: {
        right: 0,
        zIndex: 3,
        opacity: .5,
        padding: 12,
        position: 'absolute',
    },
})