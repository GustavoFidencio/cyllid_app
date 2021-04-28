import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet, Animated } from 'react-native';

import Color from '../../../assets/colors';
import { Animate } from '../../../services';

export const Touchable = ({ item, index, remove, addValue }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.elasticPersonalizado(100, valueAnimate, 1000)
    }, []);

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })

    return (
        <Animated.View style={{ opacity }}>
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
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})