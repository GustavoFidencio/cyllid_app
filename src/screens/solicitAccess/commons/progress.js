import React, { memo } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

import Color from 'cyllid/src/assets/colors';
import { TextClean } from "cyllid/src/helpers";

const { width } = Dimensions.get('window');

export const Progress = memo(({ scroll, valueAnimate }) => {

    const largeProgress = scroll.interpolate({
        inputRange: [-width, width * 2],
        outputRange: [0, width],
        extrapolate: 'clamp'
    });

    const opacity = valueAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    const transform = [{
        translateY: scroll.interpolate({
            inputRange: [0, width * 2],
            outputRange: [0, -50],
            extrapolate: 'clamp'
        })
    }];

    return (
        <Animated.View style={{ opacity, justifyContent: 'center' }}>
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
            <Animated.View style={{ width: largeProgress, ...styles.containerProgressBlue }} >
                {
                    Array(3).fill("").map((_, index) =>
                        <Animated.View
                            key={index}
                            style={styles.itemPrincipal}
                        />
                    )
                }
            </Animated.View>
            <View style={styles.containerLabels}>
                <Animated.View style={{ ...styles.labels, transform }} >
                    <TextClean style={styles.titleScreen} >
                        Informações Básicas
                    </TextClean>
                    <TextClean style={styles.titleScreen} >
                        Como vamos te achar
                    </TextClean>
                    <TextClean style={styles.titleScreen} >
                        Acesso ao aplicativo
                    </TextClean>
                </Animated.View>
            </View>
        </Animated.View>
    )
})


const styles = StyleSheet.create({
    containerProgress: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
    },
    containerProgressBlue: {
        top: 5,
        borderRadius: 99,
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'absolute',
    },
    itemBackground: {
        height: 3,
        opacity: .2,
        borderRadius: 99,
        width: width * .32,
        marginHorizontal: 2,
        backgroundColor: 'white',
    },
    itemPrincipal: {
        height: 3,
        borderRadius: 99,
        overflow: 'hidden',
        width: width * .32,
        marginHorizontal: 2,
        backgroundColor: Color.BLUE,
    },
    titleScreen: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
    },
    containerLabels: {
        width,
        top: 12,
        height: 30,
        overflow: 'hidden',
        position: 'absolute',
    },
    labels: {
        alignItems: 'center',
    }
})