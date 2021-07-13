import React, { useRef, memo } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';

import { Basic } from './basic';
import { Important } from './important';
import { AccessApp } from './accessApp';

const phases = [
    { Comp: Basic },
    { Comp: Important },
    { Comp: AccessApp }
];

export const ListPhases = memo(({ show }) => {

    let list = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const _next = index => {
        if (index == phases.length) {
            console.log('opa');
        } else {
            list.current.scrollToIndex({ animated: true, index })
        }
    }

    const _renderItem = ({ item, index }) => <item.Comp next={() => _next(index + 1)} />

    return (
        show &&
        <>
            <FlatList
                ref={list}
                horizontal
                data={phases}
                pagingEnabled
                bounces={false}
                style={styles.flat}
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
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 10
                }}
            >
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 99,
                    backgroundColor: 'white',
                }} />
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 99,
                    backgroundColor: 'white',
                    marginLeft: 5
                }} />
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 99,
                    backgroundColor: 'white',
                    marginLeft: 5
                }} />
            </View>
        </>
    )
})

const styles = StyleSheet.create({
    flat: {
        flex: 1,
        height: '100%',
    },
})