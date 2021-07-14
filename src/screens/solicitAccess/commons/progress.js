import React, { memo, useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

import Color from 'cyllid/src/assets/colors';

const { width } = Dimensions.get('window');

export const Progress = memo(({ valueAnimate }) => {

    const largeProgress = valueAnimate.interpolate({
        inputRange: [0, width * 2],
        outputRange: [width / 3.1, width]
    });

    return (
        <View>
            <View style={styles.containerProgress}>
                {
                    Array(3).fill("").map((_, index) =>
                        <Animated.View
                            key={index}
                            style={styles.itemBackground}
                        />
                    )
                }
            </View>
            <Animated.View style={{
                width: largeProgress,
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
            </Animated.View>
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