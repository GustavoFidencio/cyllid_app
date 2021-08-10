import styles from './styles';

import React, { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, ScrollView, StatusBar, StyleSheet, Animated, Text, TouchableOpacity } from 'react-native';

import { TermsList, Accept } from './commons';
import { Laws } from 'cyllid/src/services';
import { StorageTerms } from '../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, CheckBox, Load } from 'cyllid/src/helpers';

export const Terms = ({ navigation, route }) => {

    const [term, setTerm] = useState();
    const [isLoad, setLoad] = useState(true);

    const { key, version, id } = route.params.term[0];

    useEffect(() => {
        setTerm(Laws.getLaw(key));
    }, [])

    useEffect(() => {
        term && setLoad(false);
    }, [term])

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        isLoad ?
                            <Load color={Color.BLUE} />
                            :
                            <>
                                <TextClean style={styles.title}>
                                    {term.title}
                                </TextClean>
                                <View style={styles.containerSubTitle}>
                                    <TextClean style={styles.subtitle}>
                                        Descrição:
                                    </TextClean>
                                    <TextClean style={styles.subtitle}>
                                        {term.desc}
                                    </TextClean>
                                </View>
                                <View style={styles.containerSubTitle}>
                                    <TextClean style={styles.subtitle}>
                                        Versão:
                                    </TextClean>
                                    <TextClean style={styles.subtitle}>
                                        {version}
                                    </TextClean>
                                </View>
                                <TermsList term={term} />
                                <Accept
                                    id={id}
                                    navigation={navigation}
                                />
                            </>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}