import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Easing, Dimensions, StyleSheet, Animated, View } from 'react-native';

import Color from '../../../assets/colors';

export const Touchable = ({ item, index, remove, addValue }) => {

    const [valueAnimate] = useState(new Animated.Value(0));

    Animated.timing(valueAnimate, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.elastic(1))
    }).start();

    // useEffect(() => {
    //     if (limit)
    //         _animation(100, 1500)
    // }, [limit])

    return (
        <Animated.View style={{
            opacity: valueAnimate.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1]
            })
        }}>
            <TouchableOpacity
                style={{
                    ...styles.touchableBackground,
                    marginTop: index >= 3 ? 16 : 0,
                    marginLeft: index == 0 || index == 3 ? 0 : 16,
                }}
                onPress={() => !item.um && !item.dois ? remove() : addValue(item)}
            >
                <Text style={styles.textTouchable} >
                    {
                        !item.um && !item.dois ?
                            'Excluir'
                            :
                            `${item.um} e ${item.dois}`
                    }
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    touchableBackground: {
        height: 80,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: (WIDTH - 64) / 3,
        backgroundColor: Color.DARK_ONE,
    },
    textTouchable: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})