import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import { TextClean, Load, Icon } from "cyllid/src/helpers";
import Animation from 'cyllid/src/assets/videos/firstSolicitAccess.json';

export const Important = ({ next }) => {

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [isErr, setErr] = useState([false, false]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 0), [cpf]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 1), [email]);

    const _goBack = () => navigation.replace('Login');

    const _validRegisters = () => {
        let error = StoragePhases.validImportant(cpf, email, next);
        setErr(error);
    }

    return (
        <Animated.View style={styles.container}>
            <TouchableOpacity
                onPress={_goBack}
                style={styles.goBack}
            >
                <Icon size={40} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
            <View style={styles.videoAnimation}>
                <LottieView
                    autoPlay
                    loop={false}
                    source={Animation}
                />
            </View>
            <TextClean style={styles.titleScreen} >
                Como vamos te achar.
            </TextClean>
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
            <View style={{ width: '100%' }}>
                <TouchableOpacity
                    onPress={_validRegisters}
                    style={styles.buttonNext}
                >
                    {/* this.state.isLoad ?
                        <Load />
                        : */}
                    <TextClean style={styles.textAvancar}>
                        Avançar
                    </TextClean>
                </TouchableOpacity>
            </View>
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
    videoAnimation: {
        flex: 1,
        width: '100%',
        maxWidth: width * .6,
        maxHeight: width * .6,
    },
    textAvancar: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    buttonNext: {
        padding: 10,
        width: '100%',
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    titleScreen: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    goBack: {
        left: 0,
        padding: 8,
        paddingTop: 16,
        position: 'absolute',
    }
})