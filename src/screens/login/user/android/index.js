import styles from './styles';

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { StorageAuth } from '../../storage';
import Color from 'cyllid/src/assets/colors';
import { InputValidation, TextClean, Load, } from "cyllid/src/helpers";
import { DescText, Ilustrator, SolicitAcces, Switch, AnimateText } from './commons';

export class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            error: false,
            isLoad: false,
            remember: false,
            showKeyboard: false,
        }
        this._validateUser = this._validateUser.bind(this);
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
                if (this.state.remember) await AsyncStorage.setItem('remember', JSON.stringify(true))
                else await AsyncStorage.removeItem('remember')
                await AsyncStorage.setItem('user', JSON.stringify({ username: this.state.name }))
                this.props.navigation.navigate('Password', { user: this.state.name, login: true })
            })
            .catch(() => this.setState({ error: !this.state.error }))
            .finally(() => this.setState({ isLoad: false }))
    }

    render() {
        const { showKeyboard, error, name, remember, isLoad } = this.state;
        return (
            <SafeAreaView style={{ flexGrow: 0, backgroundColor: Color.DARK }}>
                <View style={styles.containerAll}>
                    <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                    <View style={styles.containerSeparation}>
                        <AnimateText
                            show={showKeyboard}
                        />
                        <Ilustrator show={!showKeyboard} />
                        <View style={styles.container}>
                            <InputValidation //mudar pro input do commmom
                                title={'Usuário'}
                                error={error}
                                value={name}
                                placeholder={'Digite seu usuário'}
                                setValue={name => {
                                    this.setState({ name })
                                    error && this.setState({ error: false })
                                }}
                            />
                            <View style={styles.containerSwitch}>
                                <TextClean style={styles.textLembrar}>
                                    Lembrar
                                </TextClean>
                                <Switch
                                    value={remember}
                                    setValue={remember => this.setState({ remember })}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={this._validateUser}
                                style={styles.buttonNextAndroid}
                            >
                                {
                                    isLoad ?
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
            </SafeAreaView>
        )
    }
}