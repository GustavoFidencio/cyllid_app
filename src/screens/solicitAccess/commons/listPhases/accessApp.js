import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Load, Icon } from "cyllid/src/helpers";
import Animation from 'cyllid/src/assets/videos/firstSolicitAccess.json';

export const AccessApp = ({ next }) => {

    const [user, setUser] = useState('');
    const [password, setPass] = useState('');
    const [isErr, setErr] = useState([false, false]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 0), [user]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 1), [password]);

    const _goBack = () => navigation.replace('Login');

    const _validRegisters = () => {
        let error = StoragePhases.validBasic(user, password, next);
        setErr(error);
    }

    return (
        <Animated.View style={styles.container} >
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
                Acesso ao aplicativo.
            </TextClean>
            <View style={styles.containerInputs}>
                <Input
                    value={user}
                    error={isErr[0]}
                    placeholder={'Ex: Josi'}
                    title={'Nome de usuario'}
                    setValue={val => setUser(val)}
                />
                <Input
                    error={isErr[1]}
                    value={password}
                    title={'Senha do aplicativo'}
                    setValue={val => setPass(val)}
                    placeholder={'Ex: josias81264'}
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