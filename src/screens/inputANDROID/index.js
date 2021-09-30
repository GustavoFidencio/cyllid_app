import styles from './styles';

import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, Load } from 'cyllid/src/helpers';
import { Cash, InputLine, Tags, Repeat, Pickers, TextEntrada } from './commons';

export const Input = ({ navigation }) => {

    const [tag, setTag] = useState();
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [isLoad, setLoad] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={{
                    width: '100%',
                }}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.goBack}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon size={23} name={'left'} lib={'antdesign'} />
                        <TextClean style={styles.textGoBack}>
                            Home
                        </TextClean>
                    </TouchableOpacity>
                    <TextEntrada />
                    <Cash />
                    <InputLine
                        value={name}
                        placeholder={'Nome'}
                        setValue={name => setName(name)}
                    />
                    <Tags
                        selected={tag}
                        tagEnable={setTag}
                    />

                    <Pickers
                        date={date}
                        focus={focus}
                        setDate={setDate}
                        setFocus={setFocus}
                    />
                    <Repeat
                        focus={focus}
                        setFocus={setFocus}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.buttonNext}
            // onPress={route.params.next}
            >
                {
                    isLoad ?
                        <Load />
                        :
                        <TextClean style={styles.textAvancar}>
                            Registrar
                        </TextClean>
                }
            </TouchableOpacity>

        </SafeAreaView>
    )
}