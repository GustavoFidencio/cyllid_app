import styles from './styles';

import React from 'react';
import { View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';
import { TouchableTemporari, AnimatedUser } from './commons';

export const Password = ({ navigation }) => {

    return (
        <View style={{ paddingHorizontal: 16, flex: 1, backgroundColor: Color.DARK }}>
            <SafeAreaView style={styles.containerSafeArea}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={{ justifyContent: 'center' }}>
                    {/* <View style={{ width: '100%', }}>
                        <TextClean style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Olá Giovane! </TextClean>
                        <TextClean style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> É um prazer ter você aqui com a gente :) </TextClean> */}
                    {/* </View> */}

                    {/* <AnimatedUser>
                        <TextClean style={{ color: 'white', fontSize: 20 }}> teste </TextClean>
                    </AnimatedUser> */}
                    {/* <View style={{ height: 200, width: '100%', flexDirection: 'row' }}> */}
                    <TextClean style={styles.labelInstrucion}>
                        Agora insira sua senha!
                    </TextClean>
                    <View style={styles.containerLabels}>
                        <TextClean style={styles.labelPassword}>
                            Senha
                        </TextClean>
                        <TextClean style={styles.labelExchangePassword}>
                            Esqueceu sua senha?
                        </TextClean>
                    </View>
                    <TouchableTemporari
                        navigation={navigation}
                    />
                </View>
                {/* <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.setState({ error: !this.state.error })}
                    >
                        <TextClean style={styles.textAvancar}>
                            Avançar
                        </TextClean>
                    </TouchableOpacity> */}
            </SafeAreaView>
        </View>
    )
}