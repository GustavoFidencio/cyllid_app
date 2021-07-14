import React, { useRef, memo, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';

import { Basic } from './basic';
import { Progress } from '../';
import { Important } from './important';
import { AccessApp } from './accessApp';
import { StoragePhases } from './storage';
import { StorageSolicitAccess } from '../../storage';

const phases = [
    { Comp: Basic },
    { Comp: Important },
    { Comp: AccessApp }
];

export const ListPhases = memo(({ show, navigation }) => {

    let list = useRef(null);
    const [user, setUser] = useState({});
    const scrollX = useRef(new Animated.Value(0)).current;

    const _solicitAccess = val => {
        StorageSolicitAccess.solicitAccess(user, val)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const _next = (index, val) => {
        if (index != phases.length) _setUser(val, index);
        else _solicitAccess(val);
    }

    const _back = (index) => {
        if (index == 0) navigation.goBack();
        else list.current.scrollToIndex({ animated: true, index: index - 1 });
    }

    const _setUser = async (val, index) => {
        setUser(await StoragePhases.setUser(val, user));
        list.current.scrollToIndex({ animated: true, index });
    }

    const _renderItem = ({ item, index }) =>
        <item.Comp
            back={() => _back(index)}
            next={val => _next(index + 1, val)}
        />

    return (
        show &&
        <>
            <Progress
                valueAnimate={scrollX}
            />
            <FlatList
                ref={list}
                horizontal
                data={phases}
                pagingEnabled
                bounces={false}
                style={styles.flat}
                scrollEnabled={false}
                initialNumToRender={1}
                decelerationRate={`fast`}
                renderItem={_renderItem}
                maxToRenderPerBatch={1}
                keyboardShouldPersistTaps="handled"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
        </>
    )
})

const styles = StyleSheet.create({
    flat: {
        flex: 1,
        height: '100%',
    },
    containerProgress: {
        height: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 2,
        justifyContent: 'space-around',
    }
})