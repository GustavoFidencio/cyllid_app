import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from "cyllid/src/helpers";

export const AccessApp = ({ next, back }) => {

    const [user, setUser] = useState('');
    const [password, setPass] = useState('');
    const [isErr, setErr] = useState([false, false]);

    useEffect(() => StoragePhases.effectDates(isErr, setErr, 0), [user]);
    useEffect(() => StoragePhases.effectDates(isErr, setErr, 1), [password]);

    const _validRegisters = () => {
        let error = StoragePhases.validBasic(user, password, next);
        setErr(error);
    }

    return (
        <Animated.View style={styles.container} >
            <TouchableOpacity
                onPress={back}
                style={styles.goBack}
            >
                <Icon size={40} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
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
                    style={styles.buttonNext}
                    onPress={_validRegisters}
                >
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