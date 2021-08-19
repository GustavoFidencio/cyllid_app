import TextInputMask from 'react-native-text-input-mask';
import React, { useEffect, useState, memo } from 'react';
import { View, Animated, StyleSheet, TextInput, Text } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { Animate } from 'cyllid/src/services';

export const InputLine = memo(({ placeholder, disable = true, error, value, setValue, setFocus }) => {

    // const [valueAnimate] = useState(new Animated.Value(0));

    // useEffect(() => {
    //     Animate.smooth(error ? 100 : 0, valueAnimate)
    // }, [error]);

    // const borderColor = valueAnimate.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ['transparent', Color.ERROR]
    // });



    return (
        <View style={styles.container} >
            <Animated.View style={styles.backgroundInput}>
                <TextInputMask
                    value={value}
                    editable={disable}
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
                    onBlur={() => setFocus && setFocus('')}
                    onFocus={() => setFocus && setFocus(placeholder)}
                />
            </Animated.View>
        </View>
    )
})

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