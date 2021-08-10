import TextInputMask from 'react-native-text-input-mask';
import React, { useEffect, useState, memo } from 'react';
import { View, Animated, StyleSheet, Text, FlatList } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Tags = memo(({ placeholder, error, value, setValue, setShow = false }) => {

    const [tags, setTag] = useState([]);
    // const [valueAnimate] = useState(new Animated.Value(0));

    useEffect(() => {
        _getTags()
    }, [])

    const _getTags = () => {
        //fazer rest das tags
    }

    // const borderColor = valueAnimate.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ['transparent', Color.ERROR]
    // });

    return (
        <View style={styles.container}>
            <FlatList

            />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        top: 15,
        height: 50,
        width: '100%',
        backgroundColor: 'gray'
    }
})