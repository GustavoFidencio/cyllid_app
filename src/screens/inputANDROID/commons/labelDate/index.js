import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Text } from 'react-native';

import { Icon } from 'cyllid/src/helpers';
import Color from 'cyllid/src/assets/colors';
import { DateService, Animate } from 'cyllid/src/services';

export const LabelDate = ({ date, setShowPicker }) => {

    const dateAnimate = useRef(new Animated.Value(0)).current;
    const timeAnimate = useRef(new Animated.Value(0)).current;

    const dateColor = dateAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['white', Color.BLUE]
    });

    const timeColor = timeAnimate.interpolate({
        inputRange: [0, 100],
        outputRange: ['white', Color.BLUE]
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.touchableDate}
                onPress={() => {
                    setShowPicker('Date')
                    Animate.smooth(0, timeAnimate, 1000)
                    Animate.smooth(100, dateAnimate, 1000)
                }}
            >
                <Icon
                    size={20}
                    color={'white'}
                    name={'calendar'}
                    lib={'FontAwesome5'}
                    style={styles.iconDate}
                />
                <Animated.Text style={{ ...styles.textDate, color: dateColor }}>
                    {DateService.dataCalendary(date)}
                </Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.touchableTime}
                onPress={() => {
                    setShowPicker('Time')
                    Animate.smooth(0, dateAnimate, 1000)
                    Animate.smooth(100, timeAnimate, 1000)
                }}
            >
                <Icon
                    size={20}
                    color={'white'}
                    name={'timer'}
                    lib={'MaterialIcons'}
                    style={styles.iconTime}
                />
                <Animated.Text style={{ ...styles.textDate, color: timeColor }}>
                    {DateService.hoursAndMinutes(date)}
                </Animated.Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 35,
        flexDirection: 'row',
    },
    textDate: {
        fontSize: 19,
        color: 'white',
        fontFamily: 'Nunito-SemiBold',
    },
    touchableDate: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableTime: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconDate: {
        marginRight: 7
    },
    iconTime: {
        marginRight: 3
    },

})