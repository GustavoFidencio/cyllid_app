import { View, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState, memo, useCallback } from 'react';

import { ItemList } from './itemList';
import { Load } from 'cyllid/src/helpers';
import { StorageInput } from '../../storage';

export const Tags = memo(({ tagEnable, selected }) => {

    const [tags, setTag] = useState([]);
    const [isLoad, setLoad] = useState(true);

    useEffect(() => {
        _getTags()
    }, []);

    const _getTags = useCallback(() => {

        setTimeout(() => {
            setTag([
                { name: 'Salario' },
                { name: 'CashBack' },
                { name: 'Natal' },
                { name: 'Roubado' },
                { name: 'Emprestado' },
                { name: 'Achado' },
                { name: 'Décimo' },
                { name: 'PIS PASEP' },
            ]);
            setLoad(false);
        }, 800);

        //API
        // StorageInput.getTags()
        //     .then(tags => setTag(tags))
        //     .catch(err => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //         setLoad(false)
        //     })
    }, [])

    const _renderItem = useCallback(({ item, index }) =>
        <ItemList
            item={item}
            selected={selected == item.name}
            onPress={() => tagEnable(tags[index].name)}
        />
        , [tags, tagEnable, selected]);

    const _marginList = useCallback(() => <View style={styles.margin} />, []);

    return (
        <View style={styles.container}>
            {
                isLoad ?
                    <Load />
                    :
                    <FlatList
                        horizontal
                        data={tags}
                        renderItem={_renderItem}
                        ListFooterComponent={_marginList}
                        ListHeaderComponent={_marginList}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => String(index)}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                    />
            }
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%',
        marginTop: 30,
    },
    itemSeparator: {
        width: 12,
    },
    margin: {
        width: 15,
    }
});