import { View, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState, memo } from 'react';

import { ItemList } from './itemList';

export const Tags = memo(({ tagEnable, selected }) => {

    const [tags, setTag] = useState([
        { name: 'teste' },
        { name: 'chave' },
        { name: 'salario' }
    ]);

    useEffect(() => {
        _getTags()
    }, [])

    const _getTags = () => {
        //fazer rest das tags
    }

    const _renderItem = ({ item, index }) =>
        <ItemList
            item={item}
            selected={selected == item.name}
            onPress={() => tagEnable(tags[index].name)}
        />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    horizontal
                    data={tags}
                    renderItem={_renderItem}
                    keyExtractor={(_, index) => String(index)}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%',
        marginTop: 30,
    },
    containerList: {
        flex: 1,
    },
    itemSeparator: {
        width: 12,
    }
})