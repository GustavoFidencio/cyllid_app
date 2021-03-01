import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import Color from '../../assets/colors';

export class Password extends React.PureComponent {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.containerSafeArea}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={styles.containerSeparation}>
                    <Text>oi</Text>
                </View>
            </SafeAreaView>
        )
    }
}