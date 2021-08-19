import { StyleSheet, View } from 'react-native';
import React, { memo, useEffect, useState } from "react";

import { StorageHome } from '../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Load } from 'cyllid/src/helpers';

export const Balance = memo(({ }) => {

    const [isLoad, setLoad] = useState(true);
    const [balance, setBalance] = useState('');

    useEffect(() => {
        _getBalance()
    }, [])

    const _getBalance = () => {
        StorageHome.getBalance()
            .then(({ balance }) => setBalance(balance))
            .catch(err => console.log(err.response))
            .finally(() => setLoad(false))
    }

    return (
        <>
            <TextClean style={styles.textMoney} >
                Seu saldo hoje:
            </TextClean>
            <View style={styles.containerValues}>
                {
                    isLoad ?
                        <View style={styles.containerLoad}>
                            <Load size={'small'} color={'white'} />
                        </View>
                        :
                        <>
                            <TextClean style={styles.textReal}>
                                R$
                            </TextClean>
                            <TextClean style={styles.valueMoney}>
                                {balance.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                            </TextClean>
                        </>
                }
            </View>
        </>
    )
})

const styles = StyleSheet.create({
    containerValues: {
        top: 2,
        flexDirection: 'row',
    },
    textReal: {
        top: 3,
        fontSize: 13,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    valueMoney: {
        left: 5,
        fontSize: 30,
        color: Color.BLUE,
        fontFamily: 'Nunito-Black',
    },
    textMoney: {
        fontSize: 18,
        color: 'white',
        marginTop: 30,
        fontFamily: 'Nunito',
    },
    containerLoad: {
        height: 41,
        width: 150,
        justifyContent: 'center',
    }
})