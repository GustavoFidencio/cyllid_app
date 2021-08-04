import { View, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useRef, memo, useEffect, useState } from "react";

import { ItemList } from './itemList';
import { StorageHome } from '../../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const ListTransactions = ({ }) => {

    const [isLoad, setLoad] = useState(true);
    const [transactions, setTrans] = useState(Array(9).fill(""));
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        _getTransactions()
    }, []);

    const _getTransactions = () => {
        StorageHome.getTransactionsAll()
            .then(transactions => setTrans(transactions))
            .catch(err => console.log(err, 'cleber'))
            .finally(() => setLoad(false))
    }

    return (
        <View style={styles.container}>
            <TextClean style={styles.text}>
                Lançamentos do mês:
            </TextClean>
            <FlatList
                data={transactions}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => <ItemList transaction={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 50,
    },
    text: {
        color: 'white',
        marginBottom: 10,
        fontFamily: 'Nunito-Regular',
    }
})