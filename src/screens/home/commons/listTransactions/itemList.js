import { View, StyleSheet, Animated } from 'react-native';
import HapticFeedback from "react-native-haptic-feedback";
import React, { useRef, memo, useEffect, useState } from "react";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';
import { DateService, Animate } from 'cyllid/src/services';

export const ItemList = memo(({ transaction }) => {

    const [enable, setEnable] = useState(false);
    const { date, id, name, tag, type, value } = transaction;
    const positionModal = useRef(new Animated.Value(0)).current;

    positionModal.addListener(({ value }) => setEnable(value > 55));

    useEffect(() => {
        enable && HapticFeedback.trigger("impactMedium")
    }, [enable])

    const _color = () => {
        if (type == 'inbound') return 'green';
        else return 'red';
    }

    const _positieNegative = () => {
        if (type == 'inbound') return '+';
        else return '-';
    }

    const onHandlerStateChanged = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            if (event.nativeEvent.translationX > 59) {
                console.log('cachorro belga');
            } else Animate.default(0, positionModal, 500, true)
        }
    }

    const animatedEvent = Animated.event(
        [{ nativeEvent: { translationX: positionModal } },],
        { useNativeDriver: true }
    );

    const transform = [{
        translateX: positionModal.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 40],
            extrapolate: "clamp",
        })
    }];

    return (
        <View style={styles.containerHeight}>
            <View style={styles.containerGesture}>
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Animated.View style={{ transform, ...styles.contianerAnimated }}>
                        <View style={styles.container}>
                            <View style={{ ...styles.border, backgroundColor: _color() }} />
                            <View style={styles.containerContent}>
                                {
                                    name &&
                                    <>
                                        <View style={styles.containerNameValue}>
                                            <TextClean style={styles.labelName}>
                                                {name}
                                            </TextClean>
                                            <TextClean style={styles.labelSeundary}>
                                                {_positieNegative()}R$ {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                                            </TextClean>
                                        </View>
                                        <View style={styles.containerDates}>
                                            <TextClean style={styles.labelName}>
                                                {DateService.dataCalendary(date)}
                                            </TextClean>
                                            <TextClean style={styles.labelSeundary}>
                                                {DateService.hoursAndMinutes(date)}
                                            </TextClean>
                                        </View>
                                    </>
                                }
                            </View>
                        </View>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.DARK_ONE,
    },
    border: {
        width: 5,
        height: '80%',
        marginLeft: 6,
        borderRadius: 99,
    },
    labelName: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    containerContent: {
        flex: 1,
        height: '80%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    containerDates: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    containerNameValue: {
        justifyContent: 'center',
    },
    labelSeundary: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Nunito-Regular',
    },
    containerGesture: {
        height: 60,
        width: '100%',
        paddingRight: 40,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
    },
    containerHeight: {
        height: 60,
    },
    contianerAnimated: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})