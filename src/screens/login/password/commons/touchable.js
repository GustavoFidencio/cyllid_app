import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet, Animated } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const Touchable = ({ item, index, remove, addValue, disabled, err }) => {

    const colorErr = useRef(new Animated.Value(0)).current;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => Animate.elasticPersonalizado(100, valueAnimate, 1000), []);

    useEffect(() => {
        Animate.default(err ? 100 : 0, colorErr, 2300)
    }, [err]);

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })

    const colorre = colorErr.interpolate({
        inputRange: [0, 20, 50, 70, 100],
        outputRange: ['white', 'red', 'white', 'red', 'white']
    })

    const getNumber = () => {
        if (index + 1 > 9) return '0'
        else return `${index + 1}`
    }

    return (
        <Animated.View style={{ opacity }}>
            <TouchableOpacity
                disabled={disabled}
                style={{
                    ...styles.touchableBackground,
                    marginTop: index >= 3 ? 16 : 0,
                    marginLeft:
                        index == 0 || index == 3
                            || index == 6 || index == 9 ? // quando tirar os botoes temporario apagar essa linha
                            0 : 16,
                }}
                // onPress={() => !item.um && !item.dois ? remove() : addValue(item)}
                onPress={() => addValue(getNumber())}
            >
                <Animated.Text style={{ ...styles.textTouchable, color: colorre }} >
                    {getNumber()}
                </Animated.Text>
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
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})