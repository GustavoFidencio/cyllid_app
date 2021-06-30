import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import { Input } from '../input';
import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';
import { TextClean, Load } from "cyllid/src/helpers";
import Animation from 'cyllid/src/assets/videos/firstSolicitAccess.json';

const { width } = Dimensions.get('window');

export const Basic = ({ }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => {
            Animate.smooth(100, valueAnimate, 800)
        }, 600);
    }, [])

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })

    return (
        <View style={styles.container}>
            <View style={styles.videoAnimation}>
                <LottieView
                    autoPlay
                    loop={false}
                    source={Animation}
                />
            </View>
            <TextClean style={styles.titleScreen} >
                Informações Básicas.
            </TextClean>
            <View style={styles.containerInputs}>
                <Input
                    title={'Nome'}
                    placeholder={'Ex: Giovane'}
                    setShow={() => console.log('oi')}
                />
                <Input
                    title={'Sobrenome'}
                    placeholder={'Ex: Santos Silva'}
                    setShow={() => console.log('oi')}
                />
            </View>
            <Animated.View style={{
                width: '100%',
                opacity
            }}>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={() => {
                        console.log('oi moço');
                    }}
                >
                    {/* this.state.isLoad ?
                        <Load />
                        : */}
                    <TextClean style={styles.textAvancar}>
                        Avançar
                    </TextClean>
                </TouchableOpacity>
            </Animated.View>
        </View>
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
        width: width * .6,
        height: width * .6,
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

})