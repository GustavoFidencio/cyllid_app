import React, { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, ScrollView, StatusBar, StyleSheet, Animated } from 'react-native';

import { StorageTerms } from '../storage';
import { TextClean, CheckBox } from 'cyllid/src/helpers';

export const Terms = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _getTerms()
    }, [])

    const _getTerms = () => {
        StorageTerms.getTerms()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TextClean style={styles.title}>
                    Retenção de dados
                </TextClean>
                <View style={styles.containerSubTitle}>
                    <TextClean style={styles.subtitle}>
                        Descrição:
                    </TextClean>
                    <TextClean style={styles.subtitle}>
                        Requerido
                    </TextClean>
                </View>
                <View style={styles.containerSubTitle}>
                    <TextClean style={styles.subtitle}>
                        Versão:
                    </TextClean>
                    <TextClean style={styles.subtitle}>
                        1.0.0.0
                    </TextClean>
                </View>
                <View style={styles.laws}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 5,
                        }}
                    >
                        <View
                            style={{
                                width: 4,
                                top: 1.5,
                                height: 4,
                                marginRight: 5,
                                borderRadius: 90,
                                backgroundColor: 'black',
                            }}
                        />
                        <TextClean
                            style={{
                                color: 'black',
                            }}
                        >
                            teste
                        </TextClean>
                    </View>
                </View>
                <View>
                    <CheckBox />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        fontSize: 27,
        color: 'black',
        marginBottom: 25,
        fontFamily: 'Nunito-Black',
    },
    containerSubTitle: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Nunito-Bold',
    },
    laws: {
        marginTop: 25,
        backgroundColor: 'purple',
        flex: 1,
    }
})