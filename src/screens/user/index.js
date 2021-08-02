import styles from './styles';

import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Options } from './commons';
import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const User = ({ navigation }) => {

    const [user, setUser] = useState({ name: '', alias: '' });

    useEffect(() => {
        (async () => {
            let user = JSON.parse(await AsyncStorage.getItem('user'));
            console.log(user);
            setUser({
                name: user.full_name,
                alias: user.small_name
            });
        })();
    }, [])

    const options = [
        {
            bottom: false,
            text: 'Minha conta',
            onPress: () => console.log('teste'),
        },
        {
            bottom: true,
            text: 'Termos e políticas',
            onPress: () => console.log('teste'),
        },
        {
            bottom: true,
            text: 'Senhas de cartões',
            onPress: () => console.log('teste'),
        },
        {
            text: 'Sair',
            bottom: true,
            onPress: () => _exit(),
        },
    ];

    const _exit = async () => {
        await AsyncStorage.clear();
        navigation.replace('Splash')
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <View style={styles.containerPhoto}>
                <View style={styles.circle}>
                    <TextClean style={styles.aliasUser}>
                        {user.alias}
                    </TextClean>
                </View>
                <TextClean style={styles.textNameUser}>
                    {user.name}
                </TextClean>
            </View>
            <View style={styles.contianerOptions}>
                {options.map(({ text, onPress, bottom }, index) =>
                    <Options
                        text={text}
                        key={index}
                        bottom={bottom}
                        onPress={onPress}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}