import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import { Switch } from "../../helpers";
import Color from '../../assets/colors';
export class Login extends React.PureComponent {

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
                    <View style={styles.containerApresentation}>
                        <Text style={styles.textNameApp}>Cyllid</Text>
                        <View style={styles.containerDescApp}>
                            <Text style={styles.textDescApp}>Online, simples e prático.</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.textUser}> Usuário </Text>
                        <View style={styles.backgroundInput}>
                            <TextInput
                                onFocus={() => {
                                    console.log('prazer sou o focus');
                                }}
                                onBlur={() => {
                                    console.log('oi eu sou o blur, quando perco o foco');
                                }}
                                selectTextOnFocus
                                spellCheck={false}
                                style={styles.input}
                                autoCorrect={false}
                                autoCompleteType={'off'}
                                enablesReturnKeyAutomatically
                                placeholder={'Digite seu usuário'}
                                placeholderTextColor={'#c4c4c4'}
                            />
                        </View>
                        <View style={styles.containerSwitch}>
                            <Text style={styles.textLembrar}> Lembrar</Text>
                            <Switch />
                        </View>
                        <TouchableOpacity style={styles.buttonNext}>
                            <Text style={styles.textAvancar}> Avançar </Text>
                        </TouchableOpacity>
                        <Text style={styles.textSolicitarAcesso} >
                            Solicitar acesso
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}