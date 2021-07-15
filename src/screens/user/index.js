import React from 'react';
import styles from './styles';
import { View, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Options } from './commons';
import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const User = ({ navigation }) => {

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
                        GS
                    </TextClean>
                </View>
                <TextClean style={styles.textNameUser}>
                    Giovane Santos
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