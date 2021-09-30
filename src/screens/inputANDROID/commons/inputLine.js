import TextInputMask from 'react-native-text-input-mask';
import React, { memo } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const InputLine = memo(({ placeholder, disable = true, error, value, setValue, keyboardType = 'default' }) =>
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
                autoCompleteType={'off'}
                placeholder={placeholder}
                keyboardType={keyboardType}
                enablesReturnKeyAutomatically
                placeholderTextColor={'#c4c4c4'}
                onChangeText={val => setValue(val)}
            />
        </Animated.View>
    </View>
)

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
        width: '100%',
    }
})