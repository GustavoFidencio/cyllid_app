import React, { useEffect, useState, useRef } from 'react';
import HapticFeedback from "react-native-haptic-feedback";
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, InputValidation } from "cyllid/src/helpers";

export const Important = ({ next, back, focus }) => {

    const refCpf = useRef(null);
    const refEmail = useRef(null);

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [errCpf, setErrCpf] = useState('');
    const [errEmail, setErrEmail] = useState('');

    useEffect(() => {
        if (focus) refCpf.current.focus()
    }, [focus])

    useEffect(() => {
        if (errCpf) setErrCpf(false);
    }, [cpf]);

    useEffect(() => {
        if (errEmail) setErrEmail(false);
    }, [email]);

    const _validCpf = async () => {
        try {
            setErrCpf(await StoragePhases.validCpf(cpf, errCpf))
        } catch (error) {
            setErrCpf(error)
            return error
        }
    }

    const _validEmail = async () => {
        try {
            setErrEmail(await StoragePhases.validEmail(email, errEmail))
            return true
        } catch (error) {
            setErrEmail(error)
            return error
        }
    }

    const _validRegisters = async () => {
        if (errCpf || errEmail && errCpf) refCpf.current.focus()
        else if (errEmail) refEmail.current.focus()
        else {
            if (await _validEmail()) return refEmail.current.focus();
            if (await _validCpf()) return refCpf.current.focus();
            next([cpf, email]);
        }
    };

    return (
        <Animated.View style={styles.container}>
            <TouchableOpacity
                onPress={back}
                style={styles.goBack}
            >
                <Icon size={30} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
            <View style={styles.containerInputs}>
                <InputValidation
                    ref={refCpf}
                    value={cpf}
                    title={'CPF'}
                    error={errCpf}
                    type={'numeric'}
                    setValue={val => setCpf(val)}
                    labelError={'CPF incompleto'}
                    placeholder={'Ex: 153.523.974-01'}
                    setShow={async show => {
                        if (!show) _validCpf()
                    }}
                />
                <InputValidation
                    ref={refEmail}
                    title={'E-mail'}
                    value={email}
                    error={errEmail}
                    setValue={val => setEmail(val)}
                    placeholder={'Ex: gustavo@gmail.com'}
                    setShow={show => {
                        if (!show) _validEmail()
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
        alignItems: 'center',
        paddingBottom: 20,
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
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    goBack: {
        left: 0,
        zIndex: 3,
        opacity: .5,
        padding: 10,
        position: 'absolute',
    },
})