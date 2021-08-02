import styles from './styles';

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { StorageHome } from './storage';
import { TextClean } from 'cyllid/src/helpers';
import { Card, Balance, ListTransactions } from './commons';

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
            <StatusBar barStyle='light-content' />
            <View style={styles.containerContent}>
                <View style={styles.containerInfoDay}>
                    <TextClean style={styles.textUser}>
                        {name}
                    </TextClean>
                    <View style={styles.bgDate}>
                        <TextClean style={styles.numberDay}>
                            21
                        </TextClean>
                        <TextClean style={styles.mothnDay}>
                            JUN
                        </TextClean>
                    </View>
                </View>
                <Balance />
            </View>
            <ListTransactions />
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