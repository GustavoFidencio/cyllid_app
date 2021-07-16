import { StyleSheet, View } from 'react-native';
import React, { useRef, memo, useEffect, useState } from "react";

import { StorageHome } from '../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const Balance = memo(({ }) => {

    const [balance, setBalance] = useState('');

    useEffect(() => {
        _getBalance()
    }, [])

    const _getBalance = () => {
        StorageHome.getBalance()
            .then((res) => {
                setBalance(res.balance)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <TextClean style={styles.textMoney} >
                Seu saldo hoje:
            </TextClean>
            <View style={styles.containerValues}>
                <TextClean style={styles.textReal}>
                    R$
                </TextClean>
                <TextClean style={styles.valueMoney}>
                    {balance.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </TextClean>
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
})