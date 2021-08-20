import styles from './styles';

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Load } from "cyllid/src/helpers";
import Success from 'cyllid/src/assets/img/success.svg';

const { width } = Dimensions.get('screen');

export const SuccessModal = ({ route }) => {

    const { title, desc } = route.params.text;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={styles.containerText}>
                    <TextClean style={styles.textTitle}>
                        {title}
                    </TextClean>
                </View>
                <Success
                    width={width * .6}
                    height={width * .6}
                />
                <View style={styles.containerText}>
                    <TextClean lines={3} style={styles.textDesc}>
                        {desc}
                    </TextClean>
                </View>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={route.params.next}
                >
                    {
                        false ?
                            <Load />
                            :
                            <TextClean style={styles.textAvancar}>
                                Voltar
                            </TextClean>
                    }
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}