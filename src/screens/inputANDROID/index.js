import styles from './styles';

import DatePicker from 'react-native-date-picker';
import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, Touchable, StatusBar } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, Load } from 'cyllid/src/helpers';
import { Cash, InputLine, Tags, Repeat, LabelDate, LabelInput, Picker, GoBack } from './commons';

export const Input = ({ navigation }) => {

    const [tag, setTag] = useState();
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());

    const [isLoad, setLoad] = useState(false);
    const [showPicker, setShowPicker] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <ScrollView style={styles.scrollView}>
                <GoBack navigation={navigation} />
                <LabelInput />

                <Cash

                />

                <InputLine
                    value={name}
                    placeholder={'Nome'}
                    setValue={name => setName(name)}
                />

                <Tags
                    selected={tag}
                    tagEnable={setTag}
                />

                <LabelDate
                    date={date}
                    setShowPicker={setShowPicker}
                />

                <Repeat
                />

            </ScrollView>

            <Picker
                date={date}
                setDate={setDate}
                showPicker={showPicker}
            />

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


        </SafeAreaView >
    )
}