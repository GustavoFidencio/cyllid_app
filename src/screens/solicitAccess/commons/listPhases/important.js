import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from "cyllid/src/helpers";

export const Important = ({ next, back }) => {

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [isErr, setErr] = useState([false, false]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 0), [cpf]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 1), [email]);

    const _validRegisters = () => {
        let error = StoragePhases.validImportant(cpf, email, next);
        setErr(error);
    }

    return (
        <Animated.View style={styles.container}>
            <TouchableOpacity
                onPress={back}
                style={styles.goBack}
            >
                <Icon size={40} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
            <View style={styles.containerInputs}>
                <Input
                    type={'cpf'}
                    value={cpf}
                    title={'CPF'}
                    error={isErr[0]}
                    setValue={val => setCpf(val)}
                    labelError={'CPF incompleto'}
                    placeholder={'Ex: 153.523.974-01'}
                />
                <Input
                    title={'E-mail'}
                    value={email}
                    error={isErr[1]}
                    setValue={val => setEmail(val)}
                    placeholder={'Ex: gustavo@gmail.com'}
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