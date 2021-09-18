import React, { useEffect, memo, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const ItemList = memo(({ item, onPress, selected }) => {

    const { name } = item;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => Animate.default(selected ? 100 : 0, valueAnimate, 500), [selected])

    const backgroundColor = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [Color.DARK, 'white']
    })

    const color = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['white', Color.DARK]
    })

    return (
        <Animated.View style={{ ...styles.container, backgroundColor }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                disabled={selected}
                style={styles.touchable}
            >
                <Animated.Text
                    allowFontScaling={false}
                    style={{ ...styles.labelTag, color }}
                >
                    #{name}
                </Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: 'white',
        paddingHorizontal: 12,
    },
    touchable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelTag: {
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
    }
})