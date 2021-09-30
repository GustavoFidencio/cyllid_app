import { View, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState, memo } from 'react';

import { ItemList } from './itemList';
import { Load } from 'cyllid/src/helpers';
import { StorageInput } from '../../storage';

export const Tags = memo(({ tagEnable, selected }) => {

    const [tags, setTag] = useState([]);
    const [isLoad, setLoad] = useState(true);

    useEffect(() => {
        _getTags()
    }, [])

    const _getTags = () => {
        StorageInput.getTags()
            .then(tags => setTag(tags))
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoad(false)
            })
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
                {
                    isLoad ?
                        <Load />
                        :
                        <FlatList
                            horizontal
                            data={tags}
                            renderItem={_renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(_, index) => String(index)}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                        />
                }
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