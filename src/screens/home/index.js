import styles from './styles';

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { StorageHome } from './storage';
import { Card, Balance } from './commons';
import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const HomeInitial = ({ navigation }) => {

    const [name, setName] = useState('');

    useEffect(() => {
        _getUserName()
    }, [])

    const _getUserName = async () => {
        let name = JSON.parse(await AsyncStorage.getItem('user'));
        name = StorageHome.toCaptalize(name.username);
        setName(name);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <View style={styles.containerContent}>
                <View style={styles.containerInfoDay}>
                    <TextClean style={styles.textUser}>
                        {name}
                    </TextClean>
                    <TextClean style={styles.textDay}>
                        Jun/21
                    </TextClean>
                </View>
                <Balance />
            </View>
            <View >
                <ScrollView
                    horizontal
                    style={styles.scrollview}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card
                        name={'Entrada'}
                        color={'#3BD16F'}
                        onPress={() => navigation.navigate('Input')}
                    />
                    <Card
                        color={'red'}
                        name={'Saida'}
                        onPress={() => navigation.navigate('Input')}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}