import styles from './styles';

import React from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Color from 'cyllid/src/assets/colors';
import Animation from 'cyllid/src/assets/videos/splash.json';

export const Splash = ({ navigation }) => {

    const _checkToken = () => {
        AsyncStorage.getItem('token')
            .then(token => {
                if (token) navigation.replace('TabNav')
                else navigation.replace('Login')
            })
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <View style={styles.animation} >
                <LottieView
                    autoPlay
                    loop={false}
                    source={Animation}
                    onAnimationFinish={_checkToken}
                />
            </View>
            {/* <NameUser /> */}
        </SafeAreaView>
    )
}