import styles from './styles';

import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TouchableTemporari } from './commons';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const Password = ({ navigation, route }) => {

    const _goBack = async () => {
        if (route.params.login) navigation.goBack();
        else {
            await AsyncStorage.clear()
            navigation.replace('Login');
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <TouchableOpacity onPress={_goBack} >
                    <Icon size={40} name={'left'} lib={'antdesign'} />
                </TouchableOpacity>
                <SafeAreaView style={styles.safeArea}>
                    <TextClean style={styles.labelInstrucion}>
                        Agora insira sua senha!
                    </TextClean>
                    <View style={styles.containerLabels}>
                        <TextClean style={styles.labelPass}>
                            Senha
                        </TextClean>
                        <TextClean style={styles.labelExchange}>
                            Esqueceu sua senha?
                        </TextClean>
                    </View>
                    <TouchableTemporari
                        navigation={navigation}
                        user={route.params.user}
                    />
                </SafeAreaView>
            </SafeAreaView>
        </View>
    )
}