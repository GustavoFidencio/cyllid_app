import React, { memo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { StorageTerms } from '../../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, CheckBox, Load } from 'cyllid/src/helpers';
import { StorageHome } from 'cyllid/src/screens/home/storage';

export const Accept = memo(({ id, navigation }) => {

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');

    const [isLoad, setLoad] = useState(false);
    const [enable, setEnable] = useState(false);

    const _acceptTerm = () => {
        setLoad(true);
        StorageTerms.setAcceptTerm(id)
            .finally(async () => {
                setLoad(false);
                // let ballance = await StorageHome.getBalance();
                // let transcation = await StorageHome.getTransactionsAll();

                // console.log(ballance);
                // console.log(transcation);

                // navigation.reset({ index: 0, routes: [{ name: 'TabNav' }] })
            })
    }

    return (
        <>
            <View style={styles.container}>
                <CheckBox
                    val={enable}
                    setEnable={bool => setEnable(bool)}
                />
                <TextClean style={styles.subtitle}>
                    Aceito termos de uso
                </TextClean>
            </View>
            <TouchableOpacity
                disabled={!enable}
                onPress={_acceptTerm}
                style={styles.buttonNext}
            >
                {
                    isLoad ?
                        <Load />
                        :
                        <TextClean style={styles.textAvancar}>
                            Avançar
                        </TextClean>
                }
            </TouchableOpacity>
        </>
    )
})

const styles = StyleSheet.create({
    subtitle: {
        left: 10,
        fontSize: 17,
        fontSize: 18,
        color: 'black',
        fontFamily: 'Nunito-Bold',
    },
    buttonNext: {
        padding: 10,
        width: '100%',
        marginTop: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.BLUE,
    },
    textAvancar: {
        color: 'white',
    },
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }
})