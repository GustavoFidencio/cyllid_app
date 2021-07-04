import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import { TextClean, Load, Icon } from "cyllid/src/helpers";
import Animation from 'cyllid/src/assets/videos/firstSolicitAccess.json';

const { width } = Dimensions.get('window');

export const AccessApp = ({ next }) => {

    const [user, setUser] = useState('');
    const [password, setPass] = useState('');
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => Animate.smooth(100, valueAnimate, 800), 600);
    }, [])

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    });

    const _goBack = () => navigation.replace('Login');

    const _validRegisters = () => {
        if (name.length >= 3 && sobName.length >= 3) next()
    }

    return (
        <Animated.View style={{ ...styles.container, opacity }} >
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
                    placeholder={'Ex: Josi'}
                    title={'Nome de usuario'}
                    setValue={val => setUser(val)}
                />
                <Input
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