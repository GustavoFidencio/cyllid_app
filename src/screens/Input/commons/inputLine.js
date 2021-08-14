import TextInputMask from 'react-native-text-input-mask';
import React, { useEffect, useState, forwardRef, memo } from 'react';
import { View, Animated, StyleSheet, TextInput, Text } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const InputLine = memo(forwardRef(({ placeholder, error, value, setValue, setShow = false }, ref) => {

    // const [valueAnimate] = useState(new Animated.Value(0));

    // useEffect(() => {
    //     Animate.smooth(error ? 100 : 0, valueAnimate)
    // }, [error]);

    // const borderColor = valueAnimate.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ['transparent', Color.ERROR]
    // });

    return (
        <View style={styles.container}>
            <Animated.View style={styles.backgroundInput}>
                <TextInputMask
                    ref={ref}
                    value={value}
                    spellCheck={false}
                    style={styles.input}
                    selectTextOnFocus
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType={'default'}
                    autoCompleteType={'off'}
                    placeholder={placeholder}
                    enablesReturnKeyAutomatically
                    placeholderTextColor={'#c4c4c4'}
                    onChangeText={val => setValue(val)}
                    onBlur={() => setShow && setShow(false)}
                    onFocus={() => setShow && setShow(true)}
                />
            </Animated.View>
        </View>
    )
}))

const styles = StyleSheet.create({
    input: {
        right: 10,
        height: '100%',
        color: '#fdfdfd',
        paddingLeft: 15,
        // backgroundColor: 'red'sa
    },
    backgroundInput: {
        height: 40,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    container: {
        top: 15,
        height: 50,
        width: '100%',
    }
})