import React, { useEffect, useState, useRef } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity, Keyboard } from 'react-native';

// import { Input } from '../input';
import { StoragePhases } from './storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, InputValidation, Load } from "cyllid/src/helpers";

export const AccessApp = ({ next, back, load }) => {

    const refUser = useRef(null);
    const refPass = useRef(null);

    const [user, setUser] = useState('');
    const [password, setPass] = useState('');
    const [errUser, setErrUser] = useState('');
    const [errPass, setErrPass] = useState('');

    useEffect(() => {
        if (errUser) setErrUser(false);
    }, [user]);

    useEffect(() => {
        if (errPass) setErrPass(false);
    }, [password]);

    const _validRegisters = () => {
        if (errUser || errPass && errUser) refUser.current.focus()
        else if (errPass) refPass.current.focus()
        else {
            Keyboard.dismiss();
            _validUser()
            _validPass()
            if (errPass && errUser) return refUser.current.focus();
            if (errPass) return refPass.current.focus();
            next([user, password]);
        }
    }

    const _validUser = async () => {
        try {
            setErrUser(await StoragePhases.validUser(user, errUser))
        } catch (error) {
            setErrUser(error)
        }
    }

    const _validPass = async () => {
        try {
            setErrPass(await StoragePhases.validPass(password, errPass))
        } catch (error) {
            setErrPass(error)
        }
    }

    return (
        <Animated.View style={styles.container} >
            <TouchableOpacity
                onPress={back}
                style={styles.goBack}
            >
                <Icon size={30} name={'left'} lib={'antdesign'} />
            </TouchableOpacity>
            <View style={styles.containerInputs}>
                <InputValidation
                    value={user}
                    ref={refUser}
                    error={errUser}
                    placeholder={'Ex: Josi'}
                    title={'Nome de usuario'}
                    setValue={val => setUser(val)}
                    setShow={show => !show && _validUser()}
                />
                <InputValidation
                    ref={refPass}
                    error={errPass}
                    type={'numeric'}
                    password={true}
                    value={password}
                    title={'Senha do aplicativo'}
                    setValue={val => setPass(val)}
                    placeholder={'Ex: 400289'}
                    setShow={show => !show && _validPass()}
                />
            </View>
            <View style={{ width: '100%' }}>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={_validRegisters}
                >
                    {
                        load ?
                            <Load
                                size={20}
                                color={'white'}
                            />
                            :
                            <TextClean style={styles.textAvancar}>
                                Avançar
                            </TextClean>
                    }
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