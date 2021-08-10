import styles from './styles';

import React, { useState, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, Animated } from 'react-native';

import { Cash, InputLine } from './commons';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const Input = ({ navigation }) => {

    const [name, setName] = useState('');
    const [valueAnimate] = useState(new Animated.Value(0));

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.goBack}
                    onPress={() => navigation.goBack()}
                >
                    <Icon size={40} name={'left'} lib={'antdesign'} />
                </TouchableOpacity>
                <View style={styles.containerLabel} >
                    <TextClean style={styles.textTitle}>
                        Entrada
                    </TextClean>
                </View>
                <Cash
                />
                <InputLine
                    value={name}
                    placeholder={'Nome'}
                    setValue={name => setName(name)}
                />
                
            </View>
        </SafeAreaView>
    )
}