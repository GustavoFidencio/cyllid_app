import styles from './styles';

import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import { TouchableTemporari } from './commons';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const Password = ({ navigation, route }) => {

    const _goBack = () => navigation.replace('Login');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={_goBack}
                style={styles.goBack}
            >
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
        </View>
    )
}