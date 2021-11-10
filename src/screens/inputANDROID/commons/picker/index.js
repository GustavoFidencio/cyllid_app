import DatePicker from 'react-native-date-picker';
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Keyboard, Dimensions } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';
import { DateService, Animate } from 'cyllid/src/services';

const { width, height } = Dimensions.get('window');

export const Picker = ({ date, setDate, showPicker }) => {

    const [enable, setEnable] = useState(false);
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        console.log(showPicker);
        Animate.smooth(showPicker ? 100 : 0, valueAnimate, 2000)
    }, [showPicker]);

    return (
        <Animated.View
            style={{
                opacity: valueAnimate,
            }}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                onPress={() => {
                    console.log('aodjskioasjd');
                }}
            />
            <View
                style={{
                    zIndex: 2,
                    left: '10%',
                    bottom: '30%',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={styles.backgroundModal}>
                    <View style={styles.containerText}>
                        <TextClean style={styles.text}>
                            Selecione a Data
                        </TextClean>
                    </View>
                    <DatePicker
                        modal
                        date={date}
                        locale={'pt'}
                        mode={'time'}
                        mode={'date'}
                        textColor={'white'}
                        fadeToColor={'none'}
                        onDateChange={setDate}
                        androidVariant={'iosClone'}
                    />
                    <View style={styles.containerTouchables}>
                        <TouchableOpacity style={styles.touchable}>
                            <Icon size={23} color={'gray'} name={'close'} lib={'antdesign'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}>
                            <Icon size={23} name={'check'} lib={'antdesign'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        zIndex: 2,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, .7)',
    },
    backgroundModal: {
        zIndex: 5,
        padding: 5,
        borderRadius: 20,
        backgroundColor: Color.DARK,
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: 'Nunito-SemiBold',
    },
    containerTouchables: {
        height: 60,
        marginTop: 5,
        flexDirection: 'row',
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})