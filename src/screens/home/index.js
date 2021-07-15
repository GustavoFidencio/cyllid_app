import styles from './styles';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'

import { Card } from './commons';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const HomeInitial = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <View style={styles.containerContent}>
                <View style={styles.containerInfoDay}>
                    <TextClean style={styles.textUser}>
                        Giovane
                    </TextClean>
                    <TextClean style={styles.textDay}>
                        Jun/21
                    </TextClean>
                </View>
                <TextClean style={styles.textMoney} >
                    Seu saldo hoje:
                </TextClean>
                <View style={styles.containerValues}>
                    <TextClean style={styles.textReal}>
                        R$
                    </TextClean>
                    <TextClean style={styles.valueMoney}>
                        4.513,20
                    </TextClean>
                </View>
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