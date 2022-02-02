import React, { memo } from 'react';
import TextInputMask from 'react-native-text-input-mask';
import { View, Animated, StyleSheet } from 'react-native';

export const InputLine = memo(({ value, disable, setValue }) =>
    <View style={styles.container}>
        <Animated.View style={styles.backgroundInput}>
            <TextInputMask
                value={value}
                spellCheck={false}
                style={styles.input}
                editable={!disable}
                selectTextOnFocus
                autoCorrect={false}
                placeholder={'Nome'}
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                enablesReturnKeyAutomatically
                placeholderTextColor={'#c4c4c4'}
                onChangeText={val => setValue(val)}
            />
        </Animated.View>
    </View>
);

const styles = StyleSheet.create({
    input: {
        right: 10,
        height: '100%',
        color: '#fdfdfd',
        paddingLeft: 15,
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
        marginHorizontal: 15,
    },
});