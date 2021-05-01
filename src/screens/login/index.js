import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import Color from '../../assets/colors';
import { DescText } from './helper/descText';
import { Switch, InputValidation, TitleAnimated } from "../../helpers";

export class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            error: false,
            showKeyboard: false
        }
        this.KeyboardHide = Keyboard.addListener('keyboardDidHide', () => this.setState({ showKeyboard: false }));
        this.KeyboardShow = Keyboard.addListener('keyboardDidShow', () => this.setState({ showKeyboard: true }));
    }

    componentWillUnmount() {
        this.KeyboardHide.remove();
        this.KeyboardShow.remove();
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
                                <Text style={styles.textLembrar}> Lembrar</Text>
                                <Switch />
                            </View>
                            <TouchableOpacity
                                style={styles.buttonNext}
                                onPress={() => this.setState({ error: !this.state.error })}
                            >
                                <Text style={styles.textAvancar}> Avançar </Text>
                            </TouchableOpacity>
                            <Text style={styles.textSolicitarAcesso} >
                                Solicitar acesso
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}