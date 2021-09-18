import styles from './styles';

import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, Load } from 'cyllid/src/helpers';
import { Cash, InputLine, Tags, Repeat, Pickers, TextEntrada } from './commons';

export const Input = ({ navigation }) => {

    const [tag, setTag] = useState();
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.safeArea}>

            <KeyboardAvoidingView behavior='padding'>
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

                    {/* <View style={styles.containerLabel}>
                    <TextClean style={styles.textTitle}>
                        Entrada
                    </TextClean>
                </View> */}
                    <TextEntrada
                        focus={focus}
                    />
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
                        focus={focus}
                        setDate={setDate}
                        setFocus={setFocus}
                    />
                    <Repeat
                        focus={focus}
                        setFocus={setFocus}
                    />

                    <TouchableOpacity
                        style={styles.buttonNext}
                    // onPress={route.params.next}
                    >
                        {
                            false ?
                                <Load />
                                :
                                <TextClean style={styles.textAvancar}>
                                    Registrar
                                </TextClean>
                        }
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}