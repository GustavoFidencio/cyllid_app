import React, { memo, useEffect, useState, useRef } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

import Color from 'cyllid/src/assets/colors';

const { width, height } = Dimensions.get('window');

export const Progress = memo(({ }) => {

    const valueAnimate = useRef(new Animated.Value(0)).current

    useEffect(() => {
        console.log("didmount");
    }, [])

    return (
        <View>
            <View style={styles.containerProgress}>
                {
                    Array(3).fill("").map((item, index) =>
                        <Animated.View
                            key={index}
                            style={styles.itemBackground}
                        />
                    )
                }
            </View>
            <View style={{
                width: 100,
                ...styles.containerProgressBlue,
            }}>
                {
                    Array(3).fill("").map((item, index) =>
                        <Animated.View
                            key={index}
                            style={styles.itemPrincipal}
                        />
                    )
                }
            </View>
        </View>
    )
})


const styles = StyleSheet.create({
    containerProgress: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
    },
    containerProgressBlue: {
        marginTop: 5,
        borderRadius: 99,
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'absolute',
    },
    itemBackground: {
        height: 4,
        opacity: .2,
        borderRadius: 99,
        width: width * .32,
        marginHorizontal: 2,
        backgroundColor: 'white',
    },
    itemPrincipal: {
        height: 4,
        borderRadius: 99,
        overflow: 'hidden',
        width: width * .32,
        marginHorizontal: 2,
        backgroundColor: Color.BLUE,
    }
})