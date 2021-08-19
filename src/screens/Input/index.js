import styles from './styles';

import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, Animated } from 'react-native';

import { TextClean, Icon } from 'cyllid/src/helpers';
import { Cash, InputLine, Tags, Repeat, Pickers } from './commons';

export const Input = ({ navigation }) => {

    const [tag, setTag] = useState();
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.goBack}
                    onPress={() => navigation.goBack()}
                >
                    <Icon size={40} name={'left'} lib={'antdesign'} />
                </TouchableOpacity>
                <View style={styles.containerLabel}>
                    <TextClean style={styles.textTitle}>
                        Entrada
                    </TextClean>
                </View>
                <Cash
                    focus={focus != ''}
                    setFocus={setFocus}
                />

                <InputLine
                    value={name}
                    setFocus={setFocus}
                    placeholder={'Nome'}
                    setValue={name => setName(name)}
                />

                <Tags
                    selected={tag}
                    tagEnable={setTag}
                />
                <Pickers
                    date={date}
                    setDate={setDate}
                />
                <Repeat

                />
            </View>
        </SafeAreaView>
    )
}