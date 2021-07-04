import styles from './styles';

import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { NameUser } from './commons';
import Color from 'cyllid/src/assets/colors';
import Animation from 'cyllid/src/assets/videos/splash.json';

export const Splash = ({ navigation }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            let storage = await AsyncStorage.getItem('user');
            setUser(storage)
        })();
    }, [])

    const _checkToken = () => {
        if (user) navigation.replace('Password', { user })
        else navigation.replace('Login')
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
            {
                user != null &&
                <NameUser name={user} />
            }
        </SafeAreaView>
    )
}