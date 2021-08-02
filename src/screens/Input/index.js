import React from 'react';
import styles from './styles';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import { TextClean, Icon } from 'cyllid/src/helpers';
import { Cash } from './commons';

export const Input = ({ navigation }) => {
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

                {/* <View style={styles.containerMoney}>
                    <TextClean style={styles.textMoney}>
                        +
                    </TextClean>
                    <TextClean style={styles.textMoney}>
                        R$
                    </TextClean>
                    <TextClean style={styles.textNumberMoney}>
                        0,00
                    </TextClean>
                </View> */}
            </View>
        </SafeAreaView>
    )
}