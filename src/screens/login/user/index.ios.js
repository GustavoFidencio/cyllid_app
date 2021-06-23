import styles from './styles';

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';

import { StorageAuth } from '../storage';
import Color from 'cyllid/src/assets/colors';
import { DescText, Ilustrator, Input, SolicitAcces } from './commons';
import { Switch, InputValidation, TitleAnimated, TextClean, Load } from "cyllid/src/helpers";

export class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            error: false,
            isLoad: false,
            showKeyboard: false,
        }
        this._validateUser = this._validateUser.bind(this);
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
        const { showKeyboard } = this.state;
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.containerAll}>
                        <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                        <View style={styles.containerSeparation}>
                            <View style={styles.containerApresentation}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TitleAnimated sized
                                        text={'Cyllid'}
                                        opacity={showKeyboard}
                                        styled={styles.textNameApp}
                                    />
                                </View>
                                <View style={styles.containerDescApp}>
                                    <DescText
                                        opacity={showKeyboard}
                                        styled={styles.textDescApp}
                                        text={'Online, simples e prático.'}
                                    />
                                </View>
                            </View>
                            <Ilustrator show={!showKeyboard} />
                            <View style={styles.container}>
                                <Input
                                    title={'Usuário'}
                                    error={this.state.error}
                                    value={this.state.name}
                                    placeholder={'Digite seu usuário'}
                                    setShow={showKeyboard => this.setState({ showKeyboard })}
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
                                    onPress={this._validateUser}
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
                            </View>
                            <SolicitAcces
                                show={!showKeyboard}
                                navigation={this.props.navigation}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}