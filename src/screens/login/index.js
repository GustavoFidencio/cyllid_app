import styles from './styles';

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import Color from '../../assets/colors';
import { StorageAuth } from './storage';
import { DescText, Ilustrator } from './helper';
import { Switch, InputValidation, TitleAnimated, TextClean, Load, } from "../../helpers";

export class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            error: false,
            isLoad: false,
            showKeyboard: false,
        }
        this.KeyboardHide = Keyboard.addListener('keyboardDidHide', () => this.setState({ showKeyboard: false }));
        this.KeyboardShow = Keyboard.addListener('keyboardDidShow', () => this.setState({ showKeyboard: true }));
    }

    componentWillUnmount() {
        this.KeyboardHide.remove();
        this.KeyboardShow.remove();
    }

    _validateUser() {
        this.setState({ isLoad: true })
        StorageAuth.checkUser(this.state.name)
            .then(async () => {
                await AsyncStorage.setItem('user', this.state.name)
                this.props.navigation.navigate('Password')
            })
            .catch(() => this.setState({ error: !this.state.error }))
            .finally(() => this.setState({ isLoad: false }))
    }

    render() {
        return (
            <SafeAreaView style={{ flexGrow: 0, backgroundColor: Color.DARK }}>
                <View style={styles.containerAll}>
                    <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                    <View style={styles.containerSeparation}>
                        <View style={styles.containerApresentation}>
                            <View style={{ flexDirection: 'row' }}>
                                <TitleAnimated sized
                                    text={'Cyllid'}
                                    styled={styles.textNameApp}
                                    opacity={this.state.showKeyboard}
                                />
                            </View>
                            <View style={styles.containerDescApp}>
                                <DescText
                                    styled={styles.textDescApp}
                                    text={'Online, simples e prático.'}
                                    opacity={this.state.showKeyboard}
                                />
                            </View>
                        </View>
                        <Ilustrator
                            show={!this.state.showKeyboard}
                        />
                        <View style={styles.container}>
                            <InputValidation
                                title={'Usuário'}
                                error={this.state.error}
                                value={this.state.name}
                                placeholder={'Digite seu usuário'}
                                setValue={name => {
                                    this.setState({ name })
                                    this.state.error && this.setState({ error: false })
                                }}
                            />
                            <View style={styles.containerSwitch}>
                                <TextClean style={styles.textLembrar}>
                                    Lembrar
                                </TextClean>
                                <Switch />
                            </View>
                            <TouchableOpacity
                                style={styles.buttonNext}
                                onPress={() => this._validateUser()}
                            >
                                {
                                    this.state.isLoad ?
                                        <Load />
                                        :
                                        <TextClean style={styles.textAvancar}>
                                            Avançar
                                        </TextClean>
                                }
                            </TouchableOpacity>
                            <TextClean style={styles.textSolicitarAcesso} >
                                Solicitar acesso
                            </TextClean>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}