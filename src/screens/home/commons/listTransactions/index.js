import { View, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useRef, memo, useEffect, useState } from "react";

import { ItemList } from './itemList';
import { StorageHome } from '../../storage';
import Color from 'cyllid/src/assets/colors';
import { TextClean, Load } from 'cyllid/src/helpers';

export const ListTransactions = ({ }) => {

    const [isLoad, setLoad] = useState(true);
    const [transactions, setTrans] = useState();
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
            {
                isLoad ?
                    <View style={styles.containerLoad}>
                        <Load color={'white'} size={'large'} />
                    </View>
                    :
                    <FlatList
                        data={transactions}
                        ListEmptyComponent={() =>
                            <View
                                style={{
                                    height: 50,
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // backgroundColor: 'purple'
                                }}
                            >
                                <TextClean
                                    style={{
                                        opacity: .9,
                                        fontSize: 15,
                                        color: 'white',
                                        fontFamily: 'Nunito-Italic',
                                    }}
                                >
                                    Você não possui nenhum lançamento...
                                </TextClean>
                            </View>
                        }
                        keyExtractor={(_, index) => String(index)}
                        renderItem={({ item }) => <ItemList transaction={item} />}
                        ItemSeparatorComponent={() => <View style={styles.separatorComponent} />}
                    />
            }
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
        fontFamily: 'Nunito-SemiBold',
    },
    containerLoad: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separatorComponent: {
        height: 20,
    }
})